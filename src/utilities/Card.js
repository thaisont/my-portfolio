import React from "react";

const Card = ({ children, link, img, button }) => {
  //
  return (
    <div className="box shadow rounded-md bg-white p-8 border border-gray-100 flex-1">
      <img src={img} alt="" className="w-auto h-8 m-auto" />
      {children}
      <a href={link} rel="noreferrer" target="_blank">
        <button className="py-2 px-8 font-medium bg-primary rounded-md text-white hover:bg-blue-600 transition ease-in">
          Live site
        </button>
      </a>
    </div>
  );
};

export default Card;
