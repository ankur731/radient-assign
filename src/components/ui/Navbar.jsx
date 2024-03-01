import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex  bg-[#212731] items-center justify-between flex-wrap p-5">
      <div className="flex  items-center flex-shrink-0 text-white mr-6  justify-end">
        <input
          className="p-1 rounded-sm px-2 outline-none"
          type="text"
          placeholder="search"
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <MenuIcon style={{ color: "#f5f5f7" }} />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex justify-center lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow  justify-center  ">
          <a
            href="#"
            className="block text-white mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            First Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Second Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8"
          >
            Third Link
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
