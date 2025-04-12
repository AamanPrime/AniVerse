"use client";
import { useState } from "react";

export default function AddAnimePage() {
  const [formData, setFormData] = useState({
    Title: "",
    ReleaseDate: "",
    Description: "",
    NoOfEpisodes: "",
    NoOfSeasons: "",
    Studio: "",
    AverageRating: "",
    CoverImage: "",
    Subtitles: "",
    Actors: "",
    Languages: "",
    Genres: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated strings to arrays for JSON fields
    const dataToSend = {
      ...formData,
      NoOfEpisodes: parseInt(formData.NoOfEpisodes),
      NoOfSeasons: parseInt(formData.NoOfSeasons),
      AverageRating: parseFloat(formData.AverageRating),
      Subtitles: formData.Subtitles.split(",").map((s) => s.trim()),
      Actors: formData.Actors.split(",").map((a) => a.trim()),
      Languages: formData.Languages.split(",").map((l) => l.trim()),
      Genres: formData.Genres.split(",").map((g) => g.trim()),
    };

    try {
      const res = await fetch("/api/animes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (res.ok) {
        alert("Anime added successfully!");
        setFormData({
          Title: "",
          ReleaseDate: "",
          Description: "",
          NoOfEpisodes: "",
          NoOfSeasons: "",
          Studio: "",
          AverageRating: "",
          CoverImage: "",
          Subtitles: "",
          Actors: "",
          Languages: "",
          Genres: "",
        });
      } else {
        alert("Failed to add anime.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Anime</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Title", name: "Title" },
          { label: "Release Date", name: "ReleaseDate", type: "date" },
          { label: "Description", name: "Description", type: "textarea" },
          { label: "No. of Episodes", name: "NoOfEpisodes", type: "number" },
          { label: "No. of Seasons", name: "NoOfSeasons", type: "number" },
          { label: "Studio", name: "Studio" },
          { label: "Average Rating", name: "AverageRating", type: "number", step: "0.1" },
          { label: "Cover Image URL", name: "CoverImage" },
          { label: "Subtitles (comma-separated)", name: "Subtitles" },
          { label: "Actors (comma-separated)", name: "Actors" },
          { label: "Languages (comma-separated)", name: "Languages" },
          { label: "Genres (comma-separated)", name: "Genres" },
        ].map(({ label, name, type = "text", step }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <input
                type={type}
                name={name}
                step={step}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            )}
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
