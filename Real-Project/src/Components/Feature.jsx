import React, { useEffect, useState } from "react";

const Feature = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const featureSection = document.getElementById("feature-section");
      const scrollHeight =
        featureSection.scrollHeight - featureSection.clientHeight;
      const scrolled = featureSection.scrollTop;
      const percent = (scrolled / scrollHeight) * 100;
      setScrollPercent(percent);
    };

    const featureSection = document.getElementById("feature-section");
    featureSection.addEventListener("scroll", handleScroll);

    return () => {
      featureSection.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="feature-section"
        className="w-full h-screen p-5"
        style={{
          position: "relative",
          overflowY: "auto",
          overflowx: "auto",
          
          // maxHeight: "80vh",
          // maxWidth: "auto",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-slate-300 uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            A STEP-BY-STEP PATH
          </h1>
          <h2 className="text-slate-300 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            TOOLS TO MAXIMIZE YOUR INCOME
          </h2>
        </div>
        <div className="flex justify-between relative my-20">
          <div className="w-1/4 flex flex-wrap">
            <div className="image my-4">
              <img
                className="rounded-md w-full md:w-3/4 lg:w-full"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWNv8lLRyP0v3Uyf33EIP2cNVr9ONPeGiUmP6Aa0_U9pra7X2O"
                alt=""
              />
            </div>
            <div className="image my-4">
              <img
                className="rounded-md w-60 md:w-40 lg:w-full"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlAVfzjnaOdlCgudJdL9gb7U1IiajuODNDhxwmkNq3qlcTjNTW"
                alt=""
              />
            </div>
            <div className="image my-4">
              <img
                className="rounded-md w-60 md:w-40 lg:w-full"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBBpeRaoIMkoVJUh3cchHDH60jRuUlbcaEZEXcSWm_aDu0cS5m"
                alt=""
              />
            </div>
            <div className="image my-4">
              <img
                className="rounded-md w-60 md:w-40 lg:w-full"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHZk-QO0szMf2sDXVXDurA5kmyZv6HiB3U4Mh-8vlOjdq72phx"
                alt=""
              />
            </div>
          </div>
          {/* Vertical Line */}
          <div className="relative">
            <div className="h-full border-r-gray-700 border-2 absolute top-0 left-1/2"></div>
            <Arrow scrollPercent={scrollPercent} />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="text-center mb-8">
              <p className="text-slate-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                VITAL LIFE LESSONS
              </p>
              <p className="text-slate-300 text-base md:text-lg lg:text-xl xl:text-2xl mb-4">
                World-class custom-built learning application
              </p>
            </div>
            <button className="my-2 px-8 py-4 rounded-full border border-solid border-slate-300 hover:bg-[#66778848]">
              Scale from Zero to $10k/month as fast as possible
            </button>
            <button className="my-2 px-8 py-4 rounded-full border border-solid border-slate-300 hover:bg-[#66778848]">
              Master skills you need to maximize your income
            </button>

            <hr className="my-8 w-full pl-20" />

            <div className="text-center mb-8">
              <p className="text-slate-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                PRIVATE NETWORK
              </p>
              <p className="text-slate-300 text-base md:text-lg lg:text-xl xl:text-2xl mb-4">
                Celebrate your wins with people who understand
              </p>
            </div>
            <button className="my-2 px-8 py-4 rounded-full border border-solid border-slate-300 hover:bg-[#66778848]">
              Make like-minded friends on your journey
            </button>
            <button className="my-2 px-8 py-4 rounded-full border border-solid border-slate-300 hover:bg-[#66778848]">
              Network with 113,000+ students
            </button>

            <hr className="my-8 w-full" />

            <div className="text-center mb-8">
              <p className="text-slate-300 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                ACCESS TO MULTIMILLIONAIRES
              </p>
              <p className="text-slate-300 text-base md:text-lg lg:text-xl xl:text-2xl mb-4">
                Mentors are hyper-successful experts in their field
              </p>
            </div>
            <button className="my-2 px-8 py-4 rounded-full border border-solid border-slate-300 hover:bg-[#66778848]">
              Get mentored every step of your journey
            </button>
            <button className="my-2 px-8 py-4 rounded-full border border-solid border-slate-300 hover:bg-[#66778848]">
              1-on-1 advice from industry experts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Arrow = ({ scrollPercent }) => {
  const topPosition = `${scrollPercent}%`;

  const arrowStyle = {
    position: "absolute",
    top: topPosition,
    left: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <div style={arrowStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-[#e6e63599] max-h-[50px] w-20"
      >
        <path
          fillRule="evenodd"
          d="M10 3.333L6.667 10h6.666L10 3.333z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Feature;
