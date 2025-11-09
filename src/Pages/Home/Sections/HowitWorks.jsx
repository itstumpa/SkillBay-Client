import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HowitWorks = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/howitworks.json")
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.error(err));
  }, []);

  // Framer motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-10/12 mx-auto py-16 px-4 md:px-8 text-center">
      <h2 data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowitWorks;
