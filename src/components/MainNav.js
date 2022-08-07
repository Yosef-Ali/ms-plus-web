import React, { useState } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const MainNav = ({ menuLinks }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      {/* <div className="hidden background-container md:flex">
        <div className="bg-pattern bg1 "></div>
        <div className="bg-pattern bg2 "></div>
      </div> */}
      <div className="sticky top-0 z-20 w-screen bg-white/90">
        <nav className="container p-5 px-4 py-6 mx-auto md:px-24 ">
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
                  <a
                    onClick={() => {
                      scrollTo(`#${props.link}`)
                      console.log(props.link)
                    }}
                    className="hover:text-darkGrayishBlue hover:cursor-pointer"
                  >
                    {props.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Button */}
            <a
              onClick={() => scrollTo("#contact")}
              className="hidden p-3 px-8 text-white rounded-full bg-primary hover:bg-primary/90 lg:block hover:cursor-pointer"
            >
              Get in touch
            </a>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="40"
                  y1="64"
                  x2="216"
                  y2="64"
                  stroke="stroke-inherit"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="40"
                  y1="192"
                  x2="216"
                  y2="192"
                  stroke="stroke-inherit"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu  */}
          <div
            className={
              isNavOpen
                ? "flex flex-col max-w-md mx-auto items-center  bg-primary/90 absolute drop-shadow-md left-6 right-6 mt-3 transition duration-700  z-10"
                : "hidden"
            }
          >
            <ul
              id="menu"
              className="py-8 mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
              {menuLinks.map(props => (
                <li
                  key={props.name}
                  className="text-center text-secondary hover:text-secondary/75"
                >
                  <Link to={props.link}>{props.name}</Link>
                </li>
              ))}
            </ul>

            <a
              onClick={() => scrollTo("#contact")}
              className="flex items-center justify-center p-3 px-8 my-8 text-white rounded-full bg-secondary hover:bg-secondary/90 lg:block hover:cursor-pointer"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MainNav
