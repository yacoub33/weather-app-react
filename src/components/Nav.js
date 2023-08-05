import React from "react";

const Nav = () => {
  const cities = [
    {
      id: 1,
      title: "NY",
    },
    {
      id: 2,
      title: "TYO",
    },
    {
      id: 3,
      title: "SYD",
    },
    {
      id: 4,
      title: "PR",
    },
    {
      id: 5,
      title: "LDN",
    },
  ];

  return (
    <div className="flex mx-auto items-center max-w-screen-sm justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-sm mx-2 font-light">
          {city.title}
        </button>
      ))}
      <div className="flex flex-row items-center justify-center ml-2">
        <button name="metric" className="text-xl text-white font-light">
          °C
        </button>
        <p className="text-white font-extralight mx-2">|</p>
        <button name="metric" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
};

export default Nav;
