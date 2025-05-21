import { useEffect } from "react";

export default function Photography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "volleyball1.jpg",
    "volleyball2.jpg",
    "sunset.jpg",
    "portrait.jpg",
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Photography</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={`photos/${src}`}
            alt=""
            className="rounded shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}