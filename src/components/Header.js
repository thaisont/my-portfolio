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
      <div className="fixed top-0 left-0 w-4/5 h-full z-50 bg-white shadow">
        The menu
      </div>
    );
  }

  return (
    <header className="shadow-md p-2 mb-8">
      <div className=" max-w-screen-xlnpm container mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src={image}
            alt="Logo of ttruong"
            className="w-auto h-8 cursor-pointer"
          />
        </a>

        <nav>
          <ul className="flex gap-4 py-4 invisible md:visible  ">
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
        <div className=" flex text-2xl md:hidden cursor-pointer">
          <FontAwesomeIcon
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
