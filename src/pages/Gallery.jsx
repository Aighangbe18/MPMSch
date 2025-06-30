import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Gallery = () => {
  const [showVideos, setShowVideos] = useState(false);

  const baseImages = [
    "/images/gallery11.jpg", "/images/gallery14.jpg", "/images/gallery13.jpg", "/images/gallery7.jpg",
    "/images/gallery5.jpg", "/images/gallery6.jpg", "/images/gallery2.jpg", "/images/gallery8.jpg",
    "/images/gallery9.jpg", "/images/gallery1.jpg", "/images/gallery12.jpg",
    "/images/gallery3.jpg", "/images/gallery4.jpg", "/images/gallery15.jpg", "/images/gallery16.jpg",
    "/images/gallery17.jpg", "/images/gallery18.jpg", "/images/gallery19.jpg", "/images/gallery20.jpg",
    "/images/gallery21.jpg", "/images/gallery22.jpg",
  ];

  const videoSources = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube link
  ];

  const images = Array.from({ length: 25 }, (_, i) => baseImages[i % baseImages.length]);

  return (
    <section className="p-0 text-white min-h-screen">
      {/* Hero Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative mt-8 bg-[url('/images/gallery12.jpg')] bg-cover bg-center min-h-[50vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-opacity-50 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-base mt-2 text-white/80">
            Capturing Moments, Celebrating The Process.
          </p>
        </div>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-16 px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-lg border-2 border-transparent hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                loading="lazy"
                className="w-full h-60 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowVideos(prev => !prev)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            {showVideos ? "Hide Videos" : "See Videos"}
          </button>
        </div>
      </motion.div>

      {/* Videos Section */}
      {showVideos && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto pb-20 px-6"
        >
          <h2 className="text-3xl font-bold mb-6 mt-10">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videoSources.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                {src.includes("youtube") ? (
                  <iframe
                    src={src}
                    title={`YouTube video ${index}`}
                    className="w-full h-64 md:h-80"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    controls
                    className="w-full h-64 md:h-80 object-cover"
                    src={src}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
