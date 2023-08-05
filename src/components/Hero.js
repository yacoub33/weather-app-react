import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col mx-auto items-center max-w-screen-sm justify-around pt-2 px-1">
      <div className="text-center">
        <h2 className="text-white font-thin text-xl">Tuesday, 31 May 2022</h2>
        <h2 className="text-white font-thin text-xl">Local Time: 12:46 PM</h2>
      </div>

      <div className="text-center">
        <h1 className="text-white font-semibold text-3xl pt-2">London, UK</h1>
        <h1 className="text-white font-extralight text-7xl pt-2">25°</h1>
      </div>
    </div>
  );
};

export default Hero;
