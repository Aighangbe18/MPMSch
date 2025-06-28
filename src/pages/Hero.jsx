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
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10  bg-[url('../images/gallery11.jpg')] bg-cover bg-center h-screen w-full">
      
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-white">
              <h1>
                Offering 
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
                          className="xl:size-12 md:size-10 size-7  rounded-full"
                        />
                        <span className="text-xl md:text-2xl">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>in the most</h1>
              <h1> effective quality</h1>
            </div>

            <p className="text-white-50 md:text-sm relative z-10 pointer-events-none">
              We are invested in molding the future
            </p>

    
          </div>
        </header>

      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 z-10 relative">
        <img src="../images/gallery3.jpg" alt="Visual 1" className="w-full h-auto" />
        <img src="../images/gallery25.jpg" alt="Visual 2" className="w-full h-auto" />
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;