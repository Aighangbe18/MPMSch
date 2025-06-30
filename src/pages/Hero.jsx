import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden bg-white text-black">
<div className="marquee bg-blue-800 py-3 border-y-2 border-black text-white font-bold uppercase text-xl sm:text-2xl md:text-3xl tracking-wider">
  <div className="marquee-box">
    <span className="marquee-item px-6">
      🎵 MastersPiece Music House 🎶 • MastersPiece Music House 🎶 • MastersPiece Music House 🎶 •
    </span>
    <span className="marquee-item px-6">
      🎵 MastersPiece Music House 🎶 • MastersPiece Music House 🎶 • MastersPiece Music House 🎶 •
    </span>
  </div>
</div>

      {/* HEADER with background image */}
      <div className="relative mb-20">
        {/* Background image */}
        <div className="absolute inset-0 min-h-[60vh] bg-[url('../images/bg1.jpg')] bg-cover bg-center z-0" />

        {/* Header content */}
        <div className="relative z-10 min-h-[70vh] flex items-center md:px-20 px-5 py-20 text-white">
          <header className="w-full flex flex-col gap-6 hero-text">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              Offering{" "}
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 md:gap-3 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full"
                      />
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              in the most
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              effective quality
            </h1>
          </header>
        </div>
      </div>

      {/* IMAGE GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 px-6 py-10 bg-white">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="../images/gallery15.jpg"
            alt="Visual 1"
            className="w-full h-150 object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="../images/gallery25.jpg"
            alt="Visual 2"
            className="w-full h-150 object-cover"
          />
        </div>
      </div>

      {/* COUNTER SECTION */}
      <div className="bg-white py-10">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
