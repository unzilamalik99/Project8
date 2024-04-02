// Import React from 'react'
import React from 'react';
import image from '../assets/crd.jpg'

// Create a functional component called 'CustomCard'
const CustomCard = () => {
  return (
    <div className="card">
    <div className='flex flex-row items-center justify-center p-8'>
        <div className="flex flex-col items-left justify-left p-8  shadow-md rounded-lg w-100">
        <p className="text-gray-600 text-left">A STEP-BY-STEP PATH</p>
        <h3 className="text-xl font-medium text-left text-white-800 mb-2">2024 IS YOUR LAST CHANCE</h3>
        <br />
        <p className="text-gray-600 text-left">The world will change forever in 2024.</p>
        <p className="text-gray-600 text-left">They are developing more ways to trap you.</p>
        <br />
        <p className="text-gray-600 text-left">AI is taking jobs, and Central Bank Digital Currencies <n/> are just around the corner.</p>
        <br />
        <p className="text-gray-600 text-left">What have you been doing to prepare?</p>
        <br />
        <p className="text-gray-600 text-left">You must understand, it’s now or never.</p>
        </div>
        <img className="w-100 h-100 mb-4" src={image} alt="Card Image" />
    </div>
     <div className='flex flex-row items-center justify-center p-8'>
     <img className="w-100 h-100 mb-4" src={image} alt="Card Image" />
        <div className="flex flex-col items-left justify-left p-8  shadow-md rounded-lg w-100">
        <p className="text-gray-600 text-left">ONE YEAR IS ALL YOU NEED</p>
        <h3 className="text-xl font-medium text-left text-white-800 mb-2">IT DOESN’T TAKE 10 YEARS</h3>
        <br />
        <p className="text-gray-600 text-left">You can get rich with just one year of focus...</p>
        <br />
        <p className="text-gray-600 text-left">But only if you invest focus in the right business <br /> models using the right information.</p>
        <br />
        <p className="text-gray-600 text-left">In The Real World you will get access to <br /> multimillionaire professors who will give you a step-by- <br /> step path to reach your goals as fast as humanly <br /> possible.</p>
        <br />
        <button className=" py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">JOIN THE REAL WORLD</button>
        </div>
    </div>
</div>
  );
};

// Export the 'CustomCard' component
export default CustomCard;