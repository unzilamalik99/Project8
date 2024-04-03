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
    </div>
  );
};

export default Home;
