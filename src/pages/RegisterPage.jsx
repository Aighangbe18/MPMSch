import React from "react";
import { motion } from "framer-motion";

// Section animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const RegisterPage = () => {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0 brightness-50"  />

      {/* Overlay Content */}
      <div className="relative z-10 p-6 md:p-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl mx-auto rounded-2xl shadow-2xl p-6 md:p-12 space-y-10 border"
        >
          {/* Title */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-3xl mt-7 md:text-4xl font-bold text-center text-blue-950"
          >
            Enrolment Essentials for New Students
          </motion.h1>

          {/* Virtual Class Info */}
          <motion.div variants={fadeUp} custom={2} className="space-y-4">
            <p className="text-xl font-semibold text-blue-950">Virtual Class</p>
            <ul className="list-disc pl-6 space-y-1 text-blue-950">
              <li>CLASS FREQUENCY (Standard): <strong>4 Classes per Month</strong></li>
              <li>DURATION:
                <br /><span className="ml-4">• Strong recommendation – <em>Till spontaneity is achieved</em></span>
                <br /><span className="ml-4">• Weak recommendation – <em>1 year and more</em></span>
              </li>
            </ul>
          </motion.div>

          {/* Learning Materials */}
          <motion.div variants={fadeUp} custom={3} className="space-y-2">
            <h2 className="text-xl font-semibold text-blue-950">Learning Materials</h2>
            <ul className="list-disc pl-6 space-y-1 text-blue-950">
              <li>Notepad</li>
              <li>Personal Instrument</li>
              <li>Instrument tutor as recommended</li>
              <li>Music Manuscripts</li>
              <li>Writing Materials</li>
              <li>Music Theory Companion App</li>
              <li>Device for class (Mobile or PC)</li>
              <li>Stable internet (for Virtual Class)</li>
              <li>Source of power (for powered instruments)</li>
            </ul>
          </motion.div>

          {/* Payment Section */}
          <motion.div variants={fadeUp} custom={4} className="space-y-3">
            <h2 className="text-xl font-semibold text-blue-950">Standard Payment is MONTHLY</h2>
            <p className="italic text-blue-950">
              *Discount is applicable only on referral basis or multiple enrollees.*
            </p>
            <ul className="list-disc pl-6 space-y-1 text-white/90">
              <li className="text-blue-950 font-bold">2 hours weekly – <strong className="text-blue-500">₦160,000.00 per month</strong></li>
              <li className="text-blue-950 font-bold">1 hour weekly – <strong className="text-blue-500">₦80,000.00 per month</strong></li>
              <li className="text-blue-950 font-bold">30 minutes weekly – <strong className="text-blue-500">₦60,000.00 per month</strong></li>
            </ul>
            <p className="text-sm text-blue-950 mt-2">
              All payment goes into the school account.<br />
              Payment time is flexible – before, during, or end of the month.
            </p>
          </motion.div>

          {/* Enrolment Pathway */}
          <motion.div variants={fadeUp} custom={5} className="space-y-2">
            <h2 className="text-xl font-semibold text-blue-950">Enrolment Pathway</h2>
            <ol className="list-decimal pl-6 space-y-1 text-blue-950">
              <li>Read the Enrolment Essentials</li>
              <li>Fill the Registration Form</li>
              <li>Connect to Your Assigned Instructor</li>
              <li>Plan Your First Class</li>
            </ol>
          </motion.div>

          {/* Animated Register Button */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="text-center pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-400 hover:text-blue-950 text-black font-bold py-3 px-10 rounded-full text-lg shadow-xl transition duration-300"
            >
                <a href="https://forms.gle/oCDFQqEa1rbA44h57">
              Register Now
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
