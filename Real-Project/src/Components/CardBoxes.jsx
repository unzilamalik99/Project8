import React from "react";
import { useState } from "react";

const LandscapeBox = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
    <div className="flex flex-col">
        <div>
        <p className="text-gray-600 text-center text-balance">EXCLUSIVE FEATURES</p>
        <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance">YOU WILL GET ACCESS TO</h3>
        </div>
  <div className="grid grid-row-3 gap-4 mt-8">
    <div className=" bg-gray-900 p-4 hover:border-2 hover:border-gray-400">
    <div className="w-90  flex flex-row justify-around">
      <img src="https://picsum.photos/id/1026/200/100" alt="Image" className="w-100 h-60 object-cover" />
        <div className="w-1/2">
            <h2 className="text-xl font-bold mb-2">STEP-BY-STEP LEARNING</h2><br />
            <p className="text-white-700 font-bold border rounded-full">&#10003;Easy to follow program for financial success</p><br />
            <p className="text-white-700  border rounded-full">&#10003;New high income skills constantly added</p><br />
            <p className="text-white-700  border rounded-full">&#10003;Learn with our hyper advanced application</p>
        </div>
    </div>
    </div>
    <div className=" bg-gray-900 p-4 hover:border-2 hover:border-gray-400">
    <div className="w-90  flex flex-row justify-around">
      <img src="https://picsum.photos/id/1026/200/100" alt="Image" className="w-100 h-60 object-cover" />
        <div className="w-1/2">
            <h2 className="text-xl font-bold mb-2">STEP-BY-STEP LEARNING</h2><br />
            <p className="text-white-700 font-bold border rounded-full">&#10003;Easy to follow program for financial success</p><br />
            <p className="text-white-700  border rounded-full">&#10003;New high income skills constantly added</p><br />
            <p className="text-white-700  border rounded-full">&#10003;Learn with our hyper advanced application</p>
        </div>
    </div>
    </div>
    <div className=" bg-gray-900 p-4 hover:border-2 hover:border-gray-400">
    <div className="w-90  flex flex-row justify-around">
      <img src="https://picsum.photos/id/1026/200/100" alt="Image" className="w-100 h-60 object-cover" />
        <div className="w-1/2">
            <h2 className="text-xl font-bold mb-2">STEP-BY-STEP LEARNING</h2><br />
            <p className="text-white-700 font-bold  border rounded-full">&#10003;Easy to follow program for financial success</p><br />
            <p className="text-white-700  border rounded-full">&#10003;New high income skills constantly added</p><br />
            <p className="text-white-700  border rounded-full">&#10003;Learn with our hyper advanced application</p>
        </div>
    </div>
    </div>
  </div>
</div>
<br />
    <button className=" py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">JOIN THE REAL WORLD</button>
    </div>
  );
};

export default LandscapeBox;