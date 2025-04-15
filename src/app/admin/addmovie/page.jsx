"use client";
import { useState } from "react";

import Navbar from "@/Components/Navbar";

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
  const generateRandomId = () => Math.floor(Math.random() * 100000); // You can tweak range

  const parseGenresWithRandomIds = (input) => {
    return input.split(",").map((genre) => ({
      id: generateRandomId(),
      name: genre.trim(),
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      NoOfEpisodes: parseInt(formData.NoOfEpisodes),
      NoOfSeasons: parseInt(formData.NoOfSeasons),
      AverageRating: parseFloat(formData.AverageRating),
      Subtitles: parseGenresWithRandomIds(formData.Subtitles),
      Actors: parseGenresWithRandomIds(formData.Actors),
      Languages: parseGenresWithRandomIds(formData.Languages),
      Genres: parseGenresWithRandomIds(formData.Genres),
    };

    try {
      const res = await fetch("/api/admin/addmovie", {
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
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546197.jpg?t=st=1744538383~exp=1744541983~hmac=b0a4dbc716630b34f48e94708166707c1834183fe50c8bb5c7cc68612b547451&w=1800')",
        }}
      >
        <div className="w-full max-w-5xl bg-black bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-white">
          <h1 className="text-4xl font-extrabold text-center text-red-500 mb-8">
            Add New Anime
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { label: "Title", name: "Title" },
              { label: "Release Date", name: "ReleaseDate", type: "date" },
              { label: "Description", name: "Description", type: "textarea" },
              {
                label: "No. of Episodes",
                name: "NoOfEpisodes",
                type: "number",
              },
              { label: "No. of Seasons", name: "NoOfSeasons", type: "number" },
              { label: "Studio", name: "Studio" },
              {
                label: "Average Rating",
                name: "AverageRating",
                type: "number",
                step: "1",
              },
              { label: "Cover Image URL", name: "CoverImage" },
              { label: "Subtitles (comma-separated)", name: "Subtitles" },
              { label: "Actors (comma-separated)", name: "Actors" },
              { label: "Languages (comma-separated)", name: "Languages" },
              { label: "Genres (comma-separated)", name: "Genres" },
            ].map(({ label, name, type = "text", step }) => (
              <div key={name} className="flex flex-col">
                <label className="block font-semibold text-gray-300 mb-2">
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 resize-none focus:ring-2 focus:ring-red-500"
                    rows={4}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    step={step}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-red-500"
                  />
                )}
              </div>
            ))}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition-transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}