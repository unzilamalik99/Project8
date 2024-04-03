import React from 'react';

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
      <p className="text-gray-600 text-center text-balance">WE CAN ONLY SHOW YOU THE DOOR</p>
        <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance">THE CHOICE IS YOURS</h3>
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-4">
          <div className="flex flex-col w-full lg:w-1/2 bg-custom-color shadow-md rounded-lg p-8 leading-8 hover:border-2 hover:border-gray-400">
            <h2 className="text-2xl text-gray-500 font-semibold mb-1">DO NOTHING</h2>
            <p className="text-gray-600 text-center text-balance">Watch Netflix</p>
            <div class="border-b border-gray-500 my-4 item-left "></div>
            <h3 className="text-2xl text-gray-500 font-semibold mb-1">Lose 8 hours a day</h3>
            <div class="list-disc list-inside text-gray-600 text-left p-2">
                <p>&#10003; Work for someone else (8h a day)</p>
                <p>&#10003; Stay stagnant</p>
                <p>&#10003; Work a 9-5</p>
                <p>&#10003; Pay $35,000 for University</p>
                <p>&#10003; Stay unfulfilled</p>
                <p>&#10003; Hang around losers</p>
            </div>
            <br /><br />
            <div className="text-center">
            <button className="py-3 px-1 bg-gray-900 hover:bg-gray-500/30   text-white">Remain an Employee </button> 
        </div>
          </div>


          <div className="flex flex-col w-full lg:w-1/2 bg-custom-color shadow-md rounded-lg p-8 mt-8 lg:mt-0 leading-7 hover:border-2 hover:border-gray-400">
            <h2 className="text-4xl text-white-100 font-bold mb-2">TAKE ACTION</h2>
            <p className="text-gray-600 text-center text-balance">Start Earning Today</p>
            <div class="border-b border-gray-500 my-4 item-left "></div>
            <p className="text-gray-600 mb-8">
              <strike>$147</strike> <span className="text-yellow-500">$49.99</span>
            </p>
            <div class="list-disc list-inside text-gray-600 text-left p-2">
                <p>&#10003; Work for someone else (8h a day)</p>
                <p>&#10003; Stay stagnant</p>
                <p>&#10003; Work a 9-5</p>
                <p>&#10003; Pay $35,000 for University</p>
                <p>&#10003; Stay unfulfilled</p>
                <p>&#10003; Hang around losers</p>
            </div>
            <div class="border-b border-gray-500 my-4 item-left "></div>
            <p className="text-gray-400 text-center text-balance">&times; Cancel anytime, risk-free</p>
            <a className="text-yellow-600 text-center text-balance" href="/"><span class="text-yellow-500 text-xl">&#36;</span>49.99/month forever</a>
            <p className="text-gray-400 text-center text-balance">Lock in your price before it increases</p>
            <br />
            <div className="text-center">
              <button className="py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
              JOIN THE REAL WORLD
              </button> 
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;