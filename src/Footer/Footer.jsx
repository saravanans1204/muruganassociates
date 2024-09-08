import React from "react";
import { FooterData1 } from "../DataForPage/dummyData";
import { FooterData2 } from "../DataForPage/dummyData";
import { FooterData3 } from "../DataForPage/dummyData";
import logo from "../assets/logo2.svg";
import googlePlay from "../assets/images/google-play.svg";
import appleStore from "../assets/images/apple-store.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="  flex justify-center gap-60 pt-20  ">
      
      <div className="flex justify-around items-center py-6">
        <div>
            {/* <img className="h-10 cursor-pointer" src={logo} alt="logo"></img> */}

          <p className="sm:text-sm text-dark pb-2 font-inter font-medium cursor-pointer no-underline align-middle tracking-wide normal-case">
            Murugan Associates
          </p>
        </div>
        <div>
          <p className="sm:text-xs text-dark pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case">
            Copyright {year} page by Marko Web Dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
