import React from "react";
import { BiSearchAlt2, BiLocationPlus } from "react-icons/bi";

const Inputs = () => {
  return (
    <div className="flex mx-auto items-center max-w-screen-sm justify-around my-6">
      <div className="flex relative items-center justify-center w-full">
        <input
          type="text"
          placeholder="Search city"
          className="placeholder:lowercase text-xl shadow-xl font-light p-2 focus:outline-none capitalize rounded-xl py-3 px-3 w-full"
        />
        <BiSearchAlt2
          size={25}
          className="text-grey absolute right-2 hover:cursor-pointer hover:scale-110 transition ease-out"
        />
      </div>
      <BiLocationPlus
        size={27}
        className="text-white ml-2 hover:cursor-pointer hover:scale-110 transition ease-out"
      />
    </div>
  );
};

export default Inputs;
