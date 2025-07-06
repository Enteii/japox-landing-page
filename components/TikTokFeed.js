import React, { useEffect, useState } from "react";

export default function TikTokFeed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch(
          "https://api.example.com/tiktok?user=japox_corp&api_key=YOUR_TIKTOK_API_KEY"
        );
        const data = await res.json();
        if (data && Array.isArray(data.videos)) {
          setVideos(data.videos);
        }
      } catch (err) {
        console.error("Failed to load TikTok videos", err);
      }
    }
    loadVideos();
  }, []);

  if (videos.length === 0) {
    return <div className="text-gray-400">Loading videos...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={video.embed_url}
          className="w-full h-64 rounded-lg"
          allow="autoplay; encrypted-media"
        ></iframe>
      ))}
    </div>
  );
}

