import React from "react";
import image from "../TTRUONG-black.png";
const Header = () => {
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
          <ul className="invisible flex gap-4 py-4 md:visible">
            <a href="#aboutMe" className="hover:text-blue-900 tracking-wide">
              <li>About me</li>
            </a>
            <a
              href="#personalProjects"
              className="hover:text-blue-900 tracking-wide"
            >
              <li>Projects</li>
            </a>
            <a href="#blogs" className="hover:text-blue-900 tracking-wide">
              <li>Blog</li>
            </a>
            <a href="#contactMe" className="hover:text-blue-900 tracking-wide">
              <li>Contact me</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
