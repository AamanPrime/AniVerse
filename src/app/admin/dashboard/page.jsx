"use client"
import { useState } from "react";
import Navbar from "@/Components/Navbar";

export default function SqlQueriesPage() {
  const [querysql, setQuerysql] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Predefined SQL Queries
  const predefinedQueries = [
    {
      id: 1,
      description: "Find episodes with the most likes for each anime",
      sql: `
      SELECT e.AnimeID, a.Title, s.SeasonNumber, e.EpisodeNumber, e.NoOfLikes
      FROM Episodes e
      JOIN Animes a ON e.AnimeID = a.AnimeID
      JOIN Seasons s ON e.SeasonID = s.SeasonID
      WHERE (e.AnimeID, e.NoOfLikes) IN (
          SELECT AnimeID, MAX(NoOfLikes)
          FROM Episodes
          GROUP BY AnimeID
      )
      ORDER BY e.NoOfLikes DESC;
    `,
    },
    {
      id: 2,
      description: "Find animes with the most reviews",
      sql: `
      SELECT a.AnimeID, a.Title, COUNT(r.ReviewID) AS ReviewCount, AVG(r.Rating) AS AvgUserRating
      FROM Animes a
      LEFT JOIN Reviews r ON a.AnimeID = r.AnimeID
      GROUP BY a.AnimeID, a.Title
      ORDER BY ReviewCount DESC
      LIMIT 10;
    `,
    },
    {
      id: 3,
      description:
        "Find users who have commented on episodes but never left a review",
      sql: `
      SELECT DISTINCT u.UserID, u.UserName
      FROM Users u
      JOIN Comments c ON u.UserID = c.UserID
      WHERE u.UserID NOT IN (
          SELECT DISTINCT UserID 
          FROM Reviews
      )
      ORDER BY u.UserName;
    `,
    },
    {
      id: 4,
      description: "Find the most active users (based on comments and reviews)",
      sql: `
      SELECT 
          u.UserID, 
          u.UserName, 
          COUNT(DISTINCT c.CommentID) AS CommentCount, 
          COUNT(DISTINCT r.ReviewID) AS ReviewCount,
          (COUNT(DISTINCT c.CommentID) + COUNT(DISTINCT r.ReviewID)) AS TotalActivity
      FROM Users u
      LEFT JOIN Comments c ON u.UserID = c.UserID
      LEFT JOIN Reviews r ON u.UserID = r.UserID
      GROUP BY u.UserID, u.UserName
      ORDER BY TotalActivity DESC
      LIMIT 10;
    `,
    },
    {
      id: 5,
      description:
        "Find users who have premium subscriptions but haven't watched any anime in the last 3 months",
      sql: `
      SELECT u.UserID, u.UserName, u.Email, ps.SubscriptionDate, ps.NextPaymentDate
      FROM Users u
      JOIN PremiumSubscription ps ON u.UserID = ps.UserID
      LEFT JOIN WatchHistory wh ON u.UserID = wh.UserID AND wh.LastWatchTimeStamp >= CURRENT_TIMESTAMP - INTERVAL '3 months'
      WHERE ps.IsActive = TRUE
      AND wh.UserID IS NULL
      ORDER BY ps.NextPaymentDate;
    `,
    },
    {
      id: 6,
      description: "Find actors who appear in multiple animes",
      sql: `
      SELECT 
          actor_name, 
          COUNT(DISTINCT a.AnimeID) AS AnimeCount, 
          STRING_AGG(a.Title, ', ') AS Animes
      FROM Animes a, 
          LATERAL jsonb_array_elements_text(a.Actors::jsonb) AS actor_name
      WHERE a.Actors IS NOT NULL 
          AND jsonb_typeof(a.Actors::jsonb) = 'array'
      GROUP BY actor_name
      HAVING COUNT(DISTINCT a.AnimeID) > 1
      ORDER BY AnimeCount DESC;
    `,
    },
    {
      id: 7,
      description:
        "Get all episodes of a specific anime with their watch count",
      sql: `
      SELECT e.AnimeID, a.Title, s.SeasonNumber, e.EpisodeNumber, COUNT(wh.UserID) AS ViewCount
      FROM Episodes e
      JOIN Animes a ON e.AnimeID = a.AnimeID
      JOIN Seasons s ON e.SeasonID = s.SeasonID
      LEFT JOIN WatchHistory wh ON e.AnimeID = wh.AnimeID 
          AND s.SeasonNumber = wh.Seasonnumber 
          AND e.EpisodeNumber = wh.Episodenumber
      WHERE e.AnimeID = '21902689-d209-43e5-8fa2-fbe4eb73280d'
      GROUP BY e.AnimeID, a.Title, s.SeasonNumber, e.EpisodeNumber
      ORDER BY s.SeasonNumber, e.EpisodeNumber;
    `,
    },
    {
      id: 8,
      description: "Get the average rating for each season of all animes",
      sql: `
      SELECT s.AnimeID, a.Title, s.SeasonNumber, AVG(r.Rating) AS AverageRating
      FROM Seasons s
      JOIN Animes a ON s.AnimeID = a.AnimeID
      LEFT JOIN Reviews r ON s.AnimeID = r.AnimeID
      GROUP BY s.AnimeID, a.Title, s.SeasonNumber
      ORDER BY s.AnimeID, s.SeasonNumber;
    `,
    },
    {
      id: 9,
      description: "Get watchtime statistics for each user",
      sql: `
      SELECT u.UserID, u.UserName, 
             COUNT(DISTINCT wh.AnimeID) AS AnimesWatched,
             SUM(wh.Progress) AS TotalProgressPercentage,
             SUM(a.NoOfEpisodes * e.Duration * (wh.Progress / 100.0)) AS EstimatedWatchMinutes
      FROM Users u
      LEFT JOIN WatchHistory wh ON u.UserID = wh.UserID
      LEFT JOIN Animes a ON wh.AnimeID = a.AnimeID
      LEFT JOIN Episodes e ON wh.AnimeID = e.AnimeID
      GROUP BY u.UserID, u.UserName
      ORDER BY EstimatedWatchMinutes DESC;
    `,
    },
    {
      id: 10,
      description:
        "Get the distribution of ratings for each anime (histogram-like)",
      sql: `
      SELECT a.AnimeID, a.Title,
             COUNT(CASE WHEN r.Rating >= 1 AND r.Rating < 2 THEN 1 END) AS "1-2",
             COUNT(CASE WHEN r.Rating >= 2 AND r.Rating < 3 THEN 1 END) AS "2-3",
             COUNT(CASE WHEN r.Rating >= 3 AND r.Rating < 4 THEN 1 END) AS "3-4",
             COUNT(CASE WHEN r.Rating >= 4 AND r.Rating < 5 THEN 1 END) AS "4-5",
             COUNT(CASE WHEN r.Rating = 5 THEN 1 END) AS "5"
      FROM Animes a
      LEFT JOIN Reviews r ON a.AnimeID = r.AnimeID
      GROUP BY a.AnimeID, a.Title
      ORDER BY a.Title;
    `,
    },
    {
      id: 11,
      description: "Get subscription revenue stats by month",
      sql: `
      SELECT 
          EXTRACT(YEAR FROM SubscriptionDate) AS Year,
          EXTRACT(MONTH FROM SubscriptionDate) AS Month,
          COUNT(*) AS NewSubscriptions,
          SUM(Price) AS TotalRevenue
      FROM PremiumSubscription
      GROUP BY EXTRACT(YEAR FROM SubscriptionDate), EXTRACT(MONTH FROM SubscriptionDate)
      ORDER BY Year DESC, Month DESC;
    `,
    },
    {
      id: 12,
      description: "Get the most commented episodes",
      sql: `
      SELECT a.Title, s.SeasonNumber, e.EpisodeNumber, COUNT(c.CommentID) AS CommentCount
      FROM Episodes e
      JOIN Animes a ON e.AnimeID = a.AnimeID
      JOIN Seasons s ON e.SeasonID = s.SeasonID
      LEFT JOIN Comments c ON e.EpisodeID = c.EpisodeID
      GROUP BY a.Title, s.SeasonNumber, e.EpisodeNumber
      ORDER BY CommentCount DESC
      LIMIT 10;
    `,
    },
  ];


 const handleQuerysqlChange = (e) => {
   setQuerysql(e.target.value);
 };

 const executeQuerysql = async (query = null) => {
   const sql = query || querysql;

   setLoading(true);
   setError(null);
   try {
     const response = await fetch("/api/sqlquery", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ querysql: sql }),
     });

     if (!response.ok) {
       throw new Error("Failed to execute SQL query.");
     }

     const data = await response.json();
     setResults(data);
     setQuerysql(sql); // Show executed query in textarea
   } catch (err) {
     setError(err.message);
     setResults([]);
   } finally {
     setLoading(false);
   }
 };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl font-extrabold text-red-500 text-center">
            Admin Dashboard
          </h1>

          {/* Predefined Queries Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Predefined Queries
            </h2>
            <ul className="space-y-4">
              {predefinedQueries.map((query) => (
                <li
                  key={query.id}
                  className="bg-gray-700 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <strong>Query {query.id}:</strong> {query.description}
                    <pre className="text-green-300 text-sm mt-1">
                      {query.sql}
                    </pre>
                  </div>
                  <button
                    onClick={() => executeQuerysql(query.sql)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold text-white transition"
                  >
                    Execute
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SQL Input Section */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-red-500 mb-4">
              Write Your Own SQL Query
            </h2>
            <textarea
              id="sql-querysql"
              value={querysql}
              onChange={handleQuerysqlChange}
              rows={8}
              className="w-full bg-gray-900 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write your SQL query here..."
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => executeQuerysql()}
                disabled={loading}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {loading ? "Executing..." : "Execute Query"}
              </button>
            </div>
          </div>

          {/* Error Section */}
          {error && (
            <div className="bg-red-700 text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {/* Results Section */}
          {Array.isArray(results) && results.length > 0 ? (
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                Query Results
              </h2>
              <div className="bg-gray-900 p-4 rounded-lg mb-4">
                <pre className="text-sm text-green-400 whitespace-pre-wrap">
                  {querysql}
                </pre>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      {Object.keys(results[0]).map((column) => (
                        <th
                          key={column}
                          className="px-4 py-2 text-left text-sm font-semibold text-gray-200"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {results.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-700 transition-colors"
                      >
                        {Object.values(row).map((value, idx) => (
                          <td
                            key={idx}
                            className="px-4 py-2 text-sm text-gray-300"
                          >
                            {value !== null ? (
                              value.toString()
                            ) : (
                              <span className="italic text-red-400">NULL</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : results && results.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                Query Results
              </h2>
              <p className="text-gray-400 italic">
                No rows returned for this query.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};