import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div>
        <div className="top-0 z-50 fixed justify-between w-full bg-[#7363831f]">
          <div className="flex justify-between p-4">
            <div className="flex pl-10 hover:border solid py-3 px-6 border-gray-500 hover:rounded-md ">
              <button onClick={toggleNavbar} className="text-white text-2xl">
                {navbar ? <IoMdClose /> : <FiMenu />}
              </button>
              <h1 className="text-white ml-2 text-lg">MENU</h1>
            </div>
            <div>
              <Link to="/Login">
                <button className="ml-4 border solid border-gray-500 hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded md:text-[20px]">
                  LOG IN
                </button>
              </Link>
            </div>
          </div>
        </div>

        <header className="text-white pt-[100px] pl-10 b flex">
          <nav
            className={`ml-10 absolute bg-slate-900 border solid border-slate-700 ${
              navbar ? "slide-in" : "hidden"
            }`}
          >
            <div className="font-semibold  m-[35px] md:text-xl  w-[200px] md:w-[280px] flex flex-col gap-4 text-white border-slate-700">
              <Link
                to="/interviews"
                className="hover:text-gray-600 focus:outline-none border-b border-slate-700 text-left pb-5 "
              >
                <button>Interviews</button>
              </Link>
              <Link
                to="/feature"
                className="hover:text-gray-600 focus:outline-none border-b text-left pb-5 border-slate-700"
              >
                <button>Feature</button>
              </Link>
              <Link
                to="/student-wins"
                className="hover:text-gray-600 focus:outline-none border-b text-left pb-5 border-slate-700"
              >
                <button>Student Wins</button>
              </Link>
              <Link
                to="/trw-campuses"
                className="hover:text-gray-600 focus:outline-none border-b text-left pb-5 border-slate-700"
              >
                <button>TRW Campuses</button>
              </Link>
              <Link
                to="/faq"
                className="hover:text-gray-600 focus:outline-none border-b text-left pb-5 border-slate-700"
              >
                <button>FAQ</button>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
