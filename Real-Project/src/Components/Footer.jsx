import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white p-8 size-full">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-left"> 
        <nav className="flex flex-wrap">
          <a href="#" className="mr-4 text-sm hover:underline">Terms & Conditions</a>
          <a href="#" className="mr-4 text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="mr-4 text-sm hover:underline">Manage Membership</a>
          <a href="#" className="text-sm hover:underline">Partner Site</a>
        </nav>
        <h2 className="text-lg font-semibold">The Real World</h2>
          <p className="text-sm">Everything taught within The Real World is for education purposes only.</p>
        </div>
        <div className='mt-4 md:mt-0 text-right'>
        <p className="text-gray-600 text-balance p-2">LOCK IN YOUR PRICE</p>
        <h3 className="text-xl font-bold font-large text-white-800 mb-2 text-balance">PRICE INCREASING SOON</h3>
        <a href="mailto:support@jointherealworld.com" className="mt-4 md:mt-0 text-sm bg-gray-500 py-2 px-4 rounded hover:bg-gray-600">SUPPORT</a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">Copyright © 2023 The Real World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;