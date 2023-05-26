import React from 'react';
import fbiLogo from '../assets/fbi-logo.png';

const Main = () => (
  <div className="w-full p-6 flex items-center text-left justify-evenly md:justify-center bg-custom-blue-normal">
    <img alt="FBI Logo" src={fbiLogo} className="w-1/2 w-48" />
    <div className="flex flex-col">
      <span className="text-6xl font-extrabold text-white md:text-8xl">
        FBI
      </span>
      <span className="text-2xl md:text-4xl text-white">Most Wanted</span>
    </div>
  </div>
);

export default Main;
