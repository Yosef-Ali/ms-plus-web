import React, { useState } from "react"
import { Link } from "gatsby"

const MainNav = ({ menuLinks }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <div className="hidden background-container md:flex">
        <div className="bg-pattern bg1 "></div>
        <div className="bg-pattern bg2 "></div>
      </div>
      <nav className="container relative px-4 py-6 mx-auto md:px-24">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <Link to="/">
              <img src="./logo.svg" alt="logo" className="h-8" />
            </Link>
          </div>
          {/*  ---Menu Items --- */}
          <ul className="hidden space-x-6 lg:flex">
            {menuLinks.map(props => (
              <li key={props.name}>
                <Link to={props.link} className="hover:text-darkGrayishBlue">
                  {props.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Button */}
          <Link
            to="#"
            className="hidden p-3 px-8 text-white rounded-full bg-brightRed baseline hover:bg-brightRedLight lg:block"
          >
            Get Started
          </Link>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="lg:hidden"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
              className="stroke-cyan-500 hover:stroke-cyan-700"
            >
              <line
                x1="40"
                y1="128"
                x2="216"
                y2="128"
                className="stroke-inherit"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="40"
                y1="64"
                x2="216"
                y2="64"
                stroke="stroke-inherit"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="40"
                y1="192"
                x2="216"
                y2="192"
                stroke="stroke-inherit"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu  */}
        <div className={isNavOpen ? "flex flex-col  md:hidden" : "hidden"}>
          <ul
            id="menu"
            className="absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            {menuLinks.map(props => (
              <li
                key={props.name}
                className="text-center hover:text-darkGrayishBlue"
              >
                <Link to={props.link}>{props.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MainNav
