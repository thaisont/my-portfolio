import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="">
      <div className="flex p-4 justify-center">
        <SocialIcon
          url="https://github.com/thaisont"
          className="mr-2"
          target="_blank"
          fgColor="#fff"
          bgColor="#506370"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="mailto:sontruong@hotmail.co.uk"
          className="mr-2"
          target="_blank"
          fgColor="#fff"
          bgColor="#506370"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/thaisontruong/"
          className="mr-2"
          target="_blank"
          fgColor="#fff"
          bgColor="#506370"
          style={{ height: 35, width: 35 }}
        />
      </div>
      <div className="text-secondary text-center py-4">
        {" "}
        &copy; 2021 Thai Truong
      </div>
    </footer>
  );
}

export default Footer;
