import React from "react";
import { TbBrandGithub, TbBrandYoutube } from "react-icons/tb";
import  MyIcon from '../assets/icon.svg';

const Card = ({ title, description, svgIcon, videoSource }) => {
  return (
    <div className="flex flex-col items-left justify-center rounded-md bg-white/5 p-3 shadow-md hover:border-2 hover:border-white-400">
      <div className="mb-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
        >
          {svgIcon}
        </svg>
      </div>
      <h3 className="mb-1 text-xl font-semibold text-gray-100 text-left">{title}</h3>
      <p className="text-white text-left">{description}</p>
      <div className="mt-2">
        <a
          href={videoSource}
          target="_blank"
          className="flex items-center justify-center rounded-md bg-white/10 px-2 py-1 font-semibold text-white no-underline transition-colors hover:bg-white/20"
          rel="noopener noreferrer"
        >
          <TbBrandYoutube className="mr-1 h-4 w-4" />
          Video
        </a>
      </div>
    </div>
  );
};

const Cards = () => {
  const cards = [
    {
      title: "E-Commerce",
      description: "Launch a store overnight and tap into the global marketplace",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=0tO-Mj8fL5M",
    },
    {
      title: "Copywriting",
      description: "Master the craft of copywriting and turn prose into profit",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=-15Q1x0C3WQ",
    },
    {
      title: "Content Creation + AI",
      description: "Create valuable digital assets and learn to sell them",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=Hc25C3G7xHg",
    },
    {
      title: "E-Commerce",
      description: "Launch a store overnight and tap into the global marketplace",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=0tO-Mj8fL5M",
    },
    {
      title: "Copywriting",
      description: "Master the craft of copywriting and turn prose into profit",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=-15Q1x0C3WQ",
    },
    {
      title: "Content Creation + AI",
      description: "Create valuable digital assets and learn to sell them",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=Hc25C3G7xHg",
    },
    {
      title: "Web Development",
      description: "Build responsive and dynamic websites using modern technologies",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=0tO-Mj8fL5M",
    },
    {
      title: "Mobile App Development",
      description: "Develop native mobile apps using React Native and Expo",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=-15Q1x0C3WQ",
    },
    {
      title: "Cloud Computing",
      description: "Design and deploy scalable applications using cloud technology",
      svgIcon: <TbBrandGithub />,
      videoSource: "https://www.youtube.com/watch?v=Hc25C3G7xHg",
    },
  ];


  return (
    <div>
      <div>
        <p className="text-gray-600 text-center text-balance">THE REAL WORLD CAMPUSES</p>
        <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance">10+ WEALTH CREATION METHODS</h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-64 m-4 flex-shrink-0 sm:w-96 md:w-full lg:w-1/3 xl:w-1/4">
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="p-4 ">
        <h2 className="text-3xl flex items-center font-bold text-white justify-content-center">
          <img className="w-10 h-16" src={MyIcon} alt="Icon" />
          <span className="ml-4">NEW SKILLS REGULARLY ADDED</span>
        </h2>
        <p className="text-gray-600 text-center text-balance">When a new technology revolutionizes an industry,</p>
        <p className="text-l font-bold text-white"> The Real World will be the first and only place to teach you how to take advantage of it.</p>
        <p className="text-gray-600 text-center text-balance">Our students receive the latest information at 8am every day.</p>
      </div>
    </div>
  );
};

export default Cards;