import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  eidth: "100vw",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar Section */}
          <Navbar />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 1, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  deplay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  deplay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                  <h1 className="text-sm opacity-55 loading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias commodi, nobis, porro, eligendi explicabo nostrum
                    omnis dicta soluta quos illum aliquam aspernatur nemo.
                    Cupiditate neque sint debitis repellendus perspiciatis
                    doloribus!
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[25-px] h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image  section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  deplay: 0.4,
                }}
                src={BlackCoffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange ring circle */}
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  deplay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  deplay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[-1]"
              >
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none"
                >
                  Black Tumbler
                </motion.h1>
              </motion.div>
            </div>
            {/* Third DIv section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 1, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    deplay: 1.2,
                  }}
                  className="relative z-10 space-y-4"
                >
                  <h1 className="text-2xl">Black Tumbler</h1>
                  <h1 className="text-sm opacity-55 loading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias commodi.
                  </h1>
                </motion.div>
                <div className="absolute -top-6 -right-2 w-[25-px] h-[180px] bg-darkGray/50"></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
