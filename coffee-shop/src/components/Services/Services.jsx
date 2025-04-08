import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee1.png";
import Coffee3 from "../../assets/coffee3.png";

const servicesData = [
  {
    image: Coffee3,
    title: "Black Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nobis.",
  },
  {
    image: Coffee1,
    title: "Hot Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nobis.",
  },
  {
    image: Coffee3,
    title: "Cold Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nobis.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      deplay: 0.6,
      staggerChildern: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* //   header section  */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 1, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffees</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi
          fuga eaque, ratione dolorem ipsum? Laudantium possimus consequuntur
          facilis beatae quia ipsum? Temporibus quasi quos consequatur
          repudiandae, voluptatem sequi molestiae?
        </motion.p>
      </div>
      {/* card section  */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <div className="text-center p-4 space-y-6">
            <img
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto  hover:scale-110 duration-300 cursor-pointer"
            />
            <div className=" space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <h1 className="text-darkGray">{service.subtitle}</h1>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
