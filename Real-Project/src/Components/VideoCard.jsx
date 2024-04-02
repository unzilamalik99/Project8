import React from 'react';

const MyComponent = () => {
  return (
    <div className="p-8">
      <div>
        <p className="text-gray-600 text-center text-balance">YOU MUST CHOOSE</p>
        <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance">TWO PATHS LIE BEFORE YOU</h3>
      </div>
      <div className="bg-slate-500 md:w-[1000px] md:h-[600px] my-10 rounded-md mx-auto border solid border-slate-600">
        <video controls className="object-contain w-full h-full">
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1108771627/preview/stock-footage-circle-countdown-timer-seconds-animation-from-to-seconds-seconds-countdown-countdown.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </div>
      <div className="flex justify-center mt-8">
        <div className="text-center">
        <p className="text-white-600 text-center text-balance">FAIL TO ACHIEVE</p>
        <h3 className="text-3xl font-bold font-large text-center text-white-800 mb-2 text-balance">Stay stagnant</h3>
          <p className="text-gray-600 mt-4 text-balance">
          Follow the conventional route, investing years into a job you don’t care about, for a boss you don’t like, for a mediocre payment, just so you can retire in 50 years.
          </p>
          <br />
          <div className="text-center">
            <button className="py-3 px-1 bg-gray-900 hover:bg-yellow-500/30   text-white">Remain an Employee </button> 
        </div>
        </div>
        <div className="text-center ml-8">
        <p className="text-yellow-600 text-center text-balance">PAY</p>
        <h3 className="text-3xl font-bold font-large text-center text-yellow-800 mb-2 text-balance"><sup>$</sup>49.99</h3>
          <p className="text-gray-600 mt-4 text-balance">
          Immediately tap into a reservoir of cutting-edge knowledge, positioning yourself at the vanguard of innovation and fast-tracking your path to wealth.
          </p><br />
          <div className="text-center">
            <button className="py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
             JOIN THE REAL WORLD
            </button> 
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default MyComponent;