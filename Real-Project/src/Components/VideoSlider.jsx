import React, { useState } from "react";

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      id: 1,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Big Buck Bunny",
      country: "PAY 1",
      $: "$59.99",
    },
    {
      id: 2,
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Sample Movie",
      country: "PAY 2",
      $: "$99.99",
    },
    {
      id: 3,
      url: "https://www.w3schools.com/html/movie_kid.mp4",
      title: "The Kid",
      country: "PAY 3",
      $: "$49.99",
    },
  ];

  // Calculate the width and height of the video elements based on the image
  const videoWidth = 600;
  const videoHeight = 300;

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + videos.length) % videos.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % videos.length);
  };

  const currentVideo = videos[currentSlide];

  return (
    <div className="relative flex flex-col-reverse">
      <div className="flex items-center justify-center flex flex-col ">
        <button
          className="absolute top-1/2 bg-yellow-400/20 hover:bg-yellow-500/30 rounded-full border-2 border-yellow-500 transform -translate-y-1/2 left-60 z-10 bg-black bg-opacity-50 text-white p-2 rounded"
          onClick={prevSlide}
        >
          ←
        </button>
        <div
          style={{
            width: `${videoWidth}px`,
            height: `${videoHeight}px`,
          }}
          className="flex items-center justify-center flex-col"
        >
          <video
            className="w-full h-full object-cover"
            src={currentVideo.url}
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex items-left justify-left flex flex-col ">
          <button
            className="absolute top-1/2 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500 rounded-full transform -translate-y-1/2 right-60 z-10 bg-black bg-opacity-50 text-white p-2 rounded"
            onClick={nextSlide}
          >
            →
          </button>
          <p className="text-yellow-600 text-left text-balance">
            {currentVideo.country}
          </p>
          <h3 className="text-3xl font-bold font-large text-left text-yellow-800 mb-2 text-balance">
            {currentVideo.$}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
