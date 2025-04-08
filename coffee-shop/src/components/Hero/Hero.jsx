import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar Section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* Left content section */}
            <div
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 relative"
              style={{
                backgroundImage: `url(${BgImage})`,
                backgroundSize: "contain", // Ensures the background fits the text content area
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "20px", // Optional: Adds padding around the content
                minHeight: "fit-content", // Ensures the div grows according to content size
              }}
            >
              <motion.h1
                initial={{ opacity: 1, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Bangla Tong
              </motion.h1>
              <motion.div
                initial={{ opacity: 1, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
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
                <div className="absolute -top-6 -left-10 w-[25px] h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Hero Image section */}
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
                  Bangla Tong
                </motion.h1>
              </motion.div>
            </div>

            {/* Right section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 relative">
              {/* Big Watermark Text */}
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-9xl font-bold leading-none absolute top-10 right-10 text-darkGray/40"
              >
                Bangla Tong
              </motion.h1>

              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Bangla Tong
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
                  <h1 className="text-2xl">Bangla Tong</h1>
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
          {/* SideBar Menu Section */}
          {sidebar && (
            <motion.div
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              className="absolute top-0 right-0 w-[140px] bg-gradient-to-b from-primary/80 h-full to-primaryDark/80 backdrop-blur-sm z-10"
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-6 text-white">
                  {/* line */}
                  <div className="w-[1px] h-[70px] bg-white"></div>

                  {/* Social Icons */}
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl" />
                  </div>

                  {/* line */}
                  <div className="w-[1px] h-[70px] bg-white"></div>
                </div>
              </div>
            </motion.div>
          )}
          ;
        </div>
      </section>
    </main>
  );
};

export default Hero;
