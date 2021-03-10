import React from "react";
import profile from "../profile.jpeg";

const About = () => {
  return (
    <main>
      <img
        src={profile}
        alt="Portait of myself"
        className="m-auto  rounded-full   "
      />
      <section className="flex flex-col text-center">
        <h1 className="text-5xl font-bold py-4  ">Hi, I'm Thai Truong</h1>
        <h2 className="text-xl font-medium">
          A self-taught front end developer
        </h2>
      </section>
    </main>
  );
};

export default About;
