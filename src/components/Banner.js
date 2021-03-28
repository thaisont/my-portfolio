import React from "react";
import profile from "../img-thai.png";

const Banner = () => {
  return (
    <div>
      <img
        src={profile}
        alt="Portait of myself"
        className="m-auto  max-w-xs "
      />
      <section className="flex flex-col text-center mb-6">
        <h1 className="text-5xl font-medium pt-8 pb-2 text-secondary  ">
          Hi, I'm Thai Truong
        </h1>
        <h2 className="text-xl text-secondary">
          A self-taught front end developer
        </h2>
      </section>
    </div>
  );
};

export default Banner;
