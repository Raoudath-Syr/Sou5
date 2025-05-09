import React from "react";
import ecog1 from '../assets/ecog1.jpg'; // Vérifie que ce chemin est correct

const videos = [
  {
    titre: "Pourquoi faut-il économiser l'eau ?",
    url: "https://www.youtube.com/embed/YzgQXpgsdww",
  },
  {
    titre: "Comment bien trier ses déchets ?",
    url: "https://www.youtube.com/embed/fZHPKpaE0ZA",
  },
  {
    titre: "17 gestes simples pour économiser de l’eau au quotidien",
    url: "https://www.youtube.com/embed/m5S9i053E7c",
  },
  {
    titre: "Recyclage : comment bien trier ses déchets à la maison",
    url: "https://www.youtube.com/embed/ho70pO7JJok",
  },
];

const Video = () => {
  return (
    <div
      className="p-0 m-0"
      style={{
        backgroundImage: `url(${ecog1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="p-6 max-w-5xl mx-auto pt-24 text-white">
        <h1 className="text-3xl font-bold mt-6 text-center text-green-300">
          Vidéos éducatives
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {videos.map((video, index) => (
            <div key={index} className="shadow-lg rounded overflow-hidden">
              <iframe
                className="w-full h-64"
                src={video.url}
                title={video.titre}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="p-4 text-center font-medium">{video.titre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
