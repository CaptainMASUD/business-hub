import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaHome,
  FaCogs,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import logo from "../../logo/N.png";
import asia from "../../images/work permit/asia.png"

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const NavItem = ({ to, icon: Icon, children, hasDropdown }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "text-[#BE3144] bg-gray-900"
            : "text-white hover:text-[#BE3144] hover:bg-gray-700"
        }`
      }
      onClick={hasDropdown ? (e) => e.preventDefault() : undefined}
    >
      <Icon className="mr-2 h-5 w-5" />
      {children}
      {hasDropdown && <FaChevronDown className="ml-1 h-4 w-4" />}
    </NavLink>
  );

  const ServicesDropdown = () => (
    <div className="relative group">
      <button
        onClick={toggleServices}
        className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-[#BE3144] hover:bg-gray-700"
      >
        <FaCogs className="mr-2 h-5 w-5" />
        Work Permits
        <FaChevronDown className="ml-1 h-4 w-4" />
      </button>
      {isServicesOpen && (
        <div className="absolute left-0 mt-2 w-56 z-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="/europe"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <img
                src="https://flagcdn.com/w40/eu.png"
                alt="Europe Flag"
                className="w-5 h-5 mr-3 rounded-sm"
              />
              Europe work permit
            </Link>
            <Link
              to="/asia"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <img
                src={asia}
                alt="Asia Flag"
                className="w-5 h-5 mr-3 rounded-sm"
              />
              Asia work permit
            </Link>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-[#1c1b1b] h-auto">
      <div className="max-w-7xl mx-auto px-4 sm:h-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                className="h-8 w-8 rounded-full mr-2"
                alt="NAJ Logo"
              />
              <span
                className="text-white text-xl font-semibold"
                style={{ fontFamily: "Playwrite HR Lijeva" }}
              >
                Naj International
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center mt-16 justify-center flex-1">
            <div className="flex items-baseline space-x-4">
              <NavItem to="/" icon={FaHome}>
                Home
              </NavItem>
              <ServicesDropdown />
              <NavItem to="/about" icon={FaInfoCircle}>
                About
              </NavItem>
              <NavItem to="/contact" icon={RiContactsLine}>
                Contact us
              </NavItem>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center hover:underline hover:text-[#e64e63] duration-500 cursor-pointer">
                <FaEnvelope className="mr-2 mt-1" />
                <a href="mailto:info@naj.com" className="hover:underline">
                  <span>najint@hotmail.com</span>
                </a>
              </div>
              <div className="flex items-center hover:underline hover:text-[#e64e63] duration-500 cursor-pointer">
                <FaPhone className="mr-1 mt-1" />
                <a href="tel:+8801744416607" className="hover:underline">
                  <span>+880 1744 416607</span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/" icon={FaHome}>
              Home
            </NavItem>
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-white hover:text-[#BE3144] hover:bg-gray-700"
              >
                <FaCogs className="mr-2 h-5 w-5" />
                Work Permits
                <FaChevronDown className="ml-auto h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="mt-2 space-y-2">
                  <Link
                    to="/europe"
                    className="flex items-center pl-10 pr-3 py-2 rounded-md text-base font-medium text-white hover:text-[#BE3144] hover:bg-gray-700"
                  >
                    <img
                      src="https://flagcdn.com/w40/eu.png"
                      alt="Europe Flag"
                      className="w-5 h-5 mr-3 rounded-sm"
                    />
                    Europe work visa
                  </Link>
                  <Link
                    to="/asia"
                    className="flex items-center pl-10 pr-3 py-2 rounded-md text-base font-medium text-white hover:text-[#BE3144] hover:bg-gray-700"
                  >
                    <img
                      src={asia}
                      alt="Asia Flag"
                      className="w-5 h-5 mr-3 rounded-sm"
                    />
                    Asia work visa
                  </Link>
                </div>
              )}
            </div>
            <NavItem to="/about" icon={FaInfoCircle}>
              About
            </NavItem>
            <NavItem to="/contact" icon={RiContactsLine}>
              Contact us
            </NavItem>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  className="h-10 w-10 rounded-full"
                  alt="NAJ Logo"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  NAJ
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  <a href="mailto:info@naj.com" className="hover:underline">
                    <span>info@naj.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="tel:+8801744416607"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <FaPhone className="inline-block mr-2" />
                +8801744416607
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
