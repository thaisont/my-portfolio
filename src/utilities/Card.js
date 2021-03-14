import React from "react";
import inn from "../logo_INN.jpg";

const Card = ({ children, link, image }) => {
  //
  return (
    <div className="box shadow rounded-md bg-white p-8 border border-gray-100 flex-1">
      <img src={inn} alt="Logo of Inn" className="w-3/12 m-auto" />
      {children}
      <a href={link}>
        <button className="py-2 px-8 bg-primary rounded-md text-white hover:bg-green-700 transition ease-in">
          Live site
        </button>
      </a>
    </div>
  );
};

export default Card;
