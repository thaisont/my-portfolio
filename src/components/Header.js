import React, { useState } from "react";
import image from "../TTRUONG-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const handleBlogClick = (e) => {
  console.log("clicked button");
  document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
};

const handleContactClick = (e) => {
  console.log("clicked button");
  document.getElementById("contactMe").scrollIntoView({ behavior: "smooth" });
};

const handleAboutClick = (e) => {
  console.log("clicked button");
  document.getElementById("aboutMe").scrollIntoView({ behavior: "smooth" });
};

const handleProjectClick = (e) => {
  console.log("clicked button");
  document
    .getElementById("personalProjects")
    .scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div className="absolute top-16 right-0 w-full h-1/5 z-50 bg-white shadow">
        <ul className="text-base flex flex-col items-center p-4 gap-4 ">
          <a href="#aboutMe">
            <button className="hover:text-blue-900 tracking-wide">
              About me
            </button>
          </a>
          <a href="#personalProjects">
            <button className="hover:text-blue-900 tracking-wide">
              Project
            </button>
          </a>
          <a href="#blogs">
            <button className="hover:text-blue-900 tracking-wide">Blog</button>
          </a>
          <a href="#contactMe">
            <button className="hover:text-blue-900 tracking-wide">
              Contact me
            </button>
          </a>
        </ul>
      </div>
    );
  }

  return (
    <header className="shadow-md p-4 mb-8">
      <div className=" max-w-screen-xlnpm container mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src={image}
            alt="Logo of ttruong"
            className="w-auto h-8 cursor-pointer"
          />
        </a>

        <nav>
          <ul className="hidden md:flex gap-4    ">
            <button
              className="hover:text-blue-900 tracking-wide"
              onClick={handleAboutClick}
            >
              About me
            </button>
            <button
              className="hover:text-blue-900 tracking-wide"
              onClick={handleProjectClick}
            >
              Project
            </button>

            <button
              className="hover:text-blue-900 tracking-wide"
              onClick={handleBlogClick}
            >
              Blog
            </button>
            <button
              className="hover:text-blue-900 tracking-wide"
              onClick={handleContactClick}
            >
              Contact me
            </button>
          </ul>
        </nav>
        <div className=" flex text-2xl md:hidden ">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />

          {menu}
        </div>
      </div>
    </header>
  );
};

export default Header;
