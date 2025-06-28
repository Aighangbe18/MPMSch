
const Gallery = () => {
  // Repeat the images to reach 25 items
  const baseImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
  "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  "/images/gallery10.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg",
  "/images/gallery13.jpg",
    "/images/gallery14.jpg",
    "/images/gallery15.jpg",
  "/images/gallery16.jpg",
    "/images/gallery17.jpg",
    "/images/gallery18.jpg",
  "/images/gallery19.jpg",
    "/images/gallery20.jpg",
    "/images/gallery21.jpg",
  "/images/gallery22.jpg",]
  
  const images = Array.from({ length: 25 }, (_, i) => baseImages[i % baseImages.length]);

  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-center mt-12">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((img, i) => (
         <div
  key={i}
  className="h-60 overflow-hidden rounded border-3 border-transparent hover:border-4 hover:border-blue transition-all duration-300"
>

<img
  src={img}
  alt={`Gallery ${i}`}
  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
/>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
