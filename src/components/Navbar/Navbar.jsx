/** @format */

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useWindowScroll } from "react-use";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const { y } = useWindowScroll();
  useEffect(() => {
    if (y > 0) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [y]);

  return (
    <Transition
      show={showNavbar}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <nav className="w-full z-50  bg-white fixed top-0 left-0  shadow-md">
        <div className="pt-2  border lg:py-5 justify-center space-x-10 font-[Poppins] px-4 mx-auto  md:items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-2 md:py-4 md:block">
              {/* <a href="javascript:void(0)">
              <img src={Logo} alt="" />
            </a> */}
              <div className="md:hidden ">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex  pb-3  mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-7 md:flex md:space-x-10 md:space-y-0">
                <li className="text-black hover:text-[#76CA71] nav-item cursor-pointer">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="/"
                  >
                    <NavLink to="/">Beranda</NavLink>
                  </Link>
                </li>
                <li className="text-black hover:text-[#76CA71] nav-item cursor-pointer">
                  <Link
                    to="#hubungi"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <NavLink to="/">Hubungi Kami</NavLink>
                  </Link>
                </li>
                {/* <li className="text-black hover:text-[#76CA71] nav-item cursor-pointer">
                  <Link
                    to="#tentang"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <NavLink to="/Wisata">Wisata</NavLink>
                  </Link>
                </li> */}

                <li className="text-black hover:text-[#76CA71] nav-item">
                  <NavLink to="/belanja" activeClassName="active">
                    UMKM
                  </NavLink>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Transition>
  );
}
