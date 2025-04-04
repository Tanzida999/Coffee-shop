import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
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
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <div className="relative">
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
              </div>
            </div>
            {/* Hero Image  section */}
            <div className="relative">
              <img src={BlackCoffee} alt="" />
            </div>
            {/* Third DIvnsection */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
