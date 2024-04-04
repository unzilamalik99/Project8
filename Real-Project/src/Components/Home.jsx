const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-slate-300 uppercase">The Real World</h1>

      <div className="mx-auto w-[140px] rounded-md">
        <img
          src="https://www.jointherealworld.com/revamp/images/the-real-world-logo_1the-real-world-logo.webp"
          alt="Logo"
          className="h-40 object-contain"
        />
      </div>
      <h1 className="text-slate-300 text-4xl px-5 md:text-5xl font-bold">
        MONEY MAKING IS A SKILL{" "}
      </h1>
      <h2 className="text-slate-300 text-2xl font-semibold">
        We will teach you how to master it.
      </h2>

      <div className="bg-slate-500 md:w-[1000px] md:h-[600px] my-10 rounded-md mx-auto border solid border-slate-600">
        <video controls className="object-contain w-full h-full">
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1108771627/preview/stock-footage-circle-countdown-timer-seconds-animation-from-to-seconds-seconds-countdown-countdown.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center">
        <button className="py-4 px-6 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
          JOIN THE REAL WORLD
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-10 h-30 relative overflow-hidden rounded-full">
          <img
            src="https://picsum.photos/id/1025/200/100"
            alt="thumbnail"
            className="absolute inset-0 object-cover"
          />
        </div>
        <div className="w-10 h-16 relative overflow-hidden rounded-full">
          <img
            src="https://picsum.photos/id/1026/200/100"
            alt="thumbnail"
            className="absolute inset-0 object-cover"
          />
        </div>
        <div className="w-10 h-30 relative overflow-hidden rounded-full">
          <img
            src="https://picsum.photos/id/1027/200/100"
            alt="thumbnail"
            className="absolute inset-0 object-cover"
          />
        </div>
        <p className="text-sm mb-8">
          <strong>113,000+</strong>like-minded students
        </p>
      </div>
    </div>
  );
};

export default Home;
