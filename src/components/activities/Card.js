import React from 'react';

const Card = ({ item: { title, des, subtitle } }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327]">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col justify-center items-center">
          <div className="w-10 h-8 flex flex-col justify-between">
          </div>
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-lg md:text-2xl font-titleFont text-gray-300">
              {subtitle}
            </p>
            <p className="base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
