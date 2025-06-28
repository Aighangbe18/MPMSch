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

      {/* HEADER with background image */}
      <div className="relative mb-20">
        {/* ✅ Background image with min height */}
        <div className="absolute inset-0 min-h-[60vh] bg-[url('../images/gallery11.jpg')] bg-cover bg-center opacity-70 z-0" />

        {/* ✅ Header content with same min height */}
        <div className="relative z-10 min-h-[60vh] flex items-center md:px-20 px-5 py-20 text-white">
          <header className="w-full flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Offering{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 rounded-full"
                        />
                        <span className="text-lg md:text-5xl">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>in the most</h1>
              <h1>effective quality</h1>
            </div>

            <p className="text-blue-950 text-xl md:text-2xl">
              We are invested in molding the future
            </p>
          </header>
        </div>
      </div>

      {/* IMAGE GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 px-6 py-10 bg-white">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="../images/gallery3.jpg"
            alt="Visual 1"
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="../images/gallery25.jpg"
            alt="Visual 2"
            className="w-full h-80 object-cover"
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
