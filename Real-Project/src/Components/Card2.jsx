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
</div>
  );
};

// Export the 'CustomCard' component
export default CustomCard;