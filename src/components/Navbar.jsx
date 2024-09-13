import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-15 h-15 object-contain' /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Murugan &nbsp;
            <span className="sm:block hidden"> | Associates</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-black" : "text-secondary"
              } hover:text-black duration-200 ease-in-out text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`${"text-black"} hover:opacity-70 transition-opacity
            duration-200 ease-in-out font-medium 
            cursor-pointer relative bg-green-100 rounded-lg px-2 py-1 transition-all
            duration-200 ease-in-out text-[14px] font-medium cursor-pointer relative ml-10 flex items-center justify-center`}
            onClick={() => {
              // Function to handle opacity change and download
              const listItem = document.querySelector(
                "#download-brochure-link"
              );
              listItem.style.opacity = "0.7"; // Change opacity on click
              setTimeout(() => {
                listItem.style.opacity = "1"; // Reset opacity after a short delay
              }, 200);

              // Create a link to trigger the PDF download
              const link = document.createElement("a");
              link.href = "Murugan Associates Brochure.pdf"; // Replace with your actual PDF path
              link.download = "Murugan Associates Brochure.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <a
              id="download-brochure-link"
              href="#download-brochure"
              className="text-center w-full"
            >
              {"Download Brochure"}
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* New list item for Download Brochure */}
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-secondary mt-4"
                onClick={() => {
                  // Function to handle opacity change and download
                  const listItem = document.querySelector(
                    "#download-brochure-link"
                  );
                  listItem.style.opacity = "0.7"; // Change opacity on click
                  setTimeout(() => {
                    listItem.style.opacity = "1"; // Reset opacity after a short delay
                  }, 200);

                  // Create a link to trigger the PDF download
                  const link = document.createElement("a");
                  link.href = "Murugan Associates Brochure.pdf"; // Replace with your actual PDF path
                  link.download = "Murugan Associates Brochure.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }} // Optional: Toggle the menu on click
              >
                <a href="#download-brochure">Download Brochure</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
