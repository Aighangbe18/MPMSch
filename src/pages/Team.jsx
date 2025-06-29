import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const members = [
  { name: "Ayodele Ayodeji", role: "Director I", image: "ay.jpg" },
  { name: "Aduragbemi Afe", role: "Director II", image: "adura.jpg" },
  { name: "Abigeal Ozallo", role: "Head of Administration", image: "abigael.jpg" },
  { name: "Conscience Aighangbe", role: "Educational Manager", image: "conzy.jpg" },
  { name: "Divine Osarodion", role: "Administrative Assistant", image: "divine.jpg" },
    { name: "David Popoola", role: "Communication Officer", image: "david.jpg" },
  { name: "Kehinde Oladiran", role: "Welfare Officer", image: "kehinde.jpg" },
  { name: "Praise Moses", role: "Social Media Supervisor", image: "praise.jpg" },
  { name: "Daniel Akinwumi", role: "Graphics Designer", image: "ak.jpg" },
  { name: "Theophilus Oladiran", role: "Piano Instructor", image: "theo.jpg" },
];

const Team = () => {
  return (
    <section className="text-black bg-white">
      {/* Header with background image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative mt-8 bg-[url('../images/gallery12.jpg')] bg-cover bg-center min-h-[50vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-opacity-60 z-0" />
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Our Team</h1>
          <p className="text-base mt-2 text-white/80">
            The Molders
          </p>
        </div>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="p-10 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={i}
              className="border rounded-lg p-4 shadow hover:shadow-md transition duration-300 bg-white"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={`../images/${m.image}`}
                alt={m.name}
                className="w-full h-70 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-gray-600">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
