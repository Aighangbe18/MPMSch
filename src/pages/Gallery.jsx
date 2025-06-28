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
  const baseImages = [
    "/images/gallery11.jpg", "/images/gallery14.jpg", "/images/gallery13.jpg", "/images/gallery7.jpg",
    "/images/gallery5.jpg", "/images/gallery6.jpg", "/images/gallery2.jpg", "/images/gallery8.jpg",
    "/images/gallery9.jpg", "/images/gallery10.jpg", "/images/gallery1.jpg", "/images/gallery12.jpg",
    "/images/gallery3.jpg", "/images/gallery4.jpg", "/images/gallery15.jpg", "/images/gallery16.jpg",
    "/images/gallery17.jpg", "/images/gallery18.jpg", "/images/gallery19.jpg", "/images/gallery20.jpg",
    "/images/gallery21.jpg", "/images/gallery22.jpg",
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
              className="h-60 overflow-hidden rounded-lg border-2 border-transparent hover:border-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
