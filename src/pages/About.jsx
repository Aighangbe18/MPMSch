import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section className="bg-white text-gray-800">

      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative mt-8 bg-[url('../images/gallery12.jpg')] bg-cover bg-center min-h-[50vh] flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-opacity-60 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-3"> We are invested in molding the future</p>
        </div>
      </motion.div>

      {/* COMPANY SUMMARY */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-16 px-6 text-blue-800"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Company Summary</h2>
        <p className="text-blue-800 mb-4 leading-relaxed">
          Masters' Piece Music House is a registered business with the Corporate Affairs Commission
          in the Federal Republic of Nigeria, focused on promoting a proper culture of quality
          foundational music education.
        </p>
        <p className="text-blue-800 leading-relaxed">
          <strong>TEN YEAR GOAL:</strong> To become a world-renowned music institution with
          state-of-the-art facilities in major cities worldwide, providing quality music education
          for over 10,000 individuals, and becoming a leading foundational music teaching institution in Nigeria.
        </p>
      </motion.div>

      {/* VISION & MISSION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gray-50 py-14 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Vision Statement</h2>
            <p className="text-blue-800 leading-relaxed">
              A place where quality culture of music is molded from solid foundation to mastery.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-blue-800 font-semibold mb-4">Mission Statement</h2>
            <p className="text-blue-800 leading-relaxed">
              We are dedicated to shaping the future through delivering exceptional foundational music
              education built on a foundation of integrity, healthy student-teacher relationships,
              and a relentless pursuit of excellence.
            </p>
          </div>
        </div>
      </motion.div>

      {/* COMPANY HISTORY */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-16 px-6"
      >
        <h2 className="text-2xl text-blue-800 font-bold mb-4">Company History</h2>
        <p className="text-blue-800 mb-4 leading-relaxed">
          Masters’ Piece Music Academy began as an idea in 2014 by Mr. Ayodele Ayodeji, who
          discovered his exceptional talent for teaching and playing the piano. His motivation for starting
          the academy stemmed from the desire to earn a living and fund his transportation to school.
        </p>
        <p className="text-blue-800 mb-4 leading-relaxed">
          For several years, he worked as a freelancer until June 2020, when Aduragbemi Afe joined
          him as a violin instructor. This partnership catalyzed the official registration of the music
          school with the Corporate Affairs Commission of the Federal Republic of Nigeria on April 6,
          2022, leading to a rebranding as Masters’ Piece Music House.
        </p>
        <p className="text-blue-800 mb-4 leading-relaxed">
          With this new direction, the academy expanded its services to include music production and the sale
          of musical instruments.
        </p>
        <ul className="list-disc pl-6 text-blue-800 leading-relaxed">
          <li>The school has expanded from two instructors to eight.</li>
          <li>Instruments taught increased from two to ten.</li>
          <li>Provided lessons to approximately 80 students.</li>
          <li>Successfully prepared ~10 students for MUSON graded exams since 2021.</li>
          <li>Achieved a 100% pass rate with distinctions and merits.</li>
        </ul>
      </motion.div>

      {/* TEAM CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center py-16 bg-indigo-50 text-blue-800"
      >
        <h2 className="text-3xl text-blue-800 font-semibold mb-4">Meet Our Team</h2>
        <p className="text-blue-800 mb-6">Dedicated and passionate music educators.</p>
        <a
          href="/team"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          View Team
        </a>
      </motion.div>
    </section>
  );
};

export default About;
