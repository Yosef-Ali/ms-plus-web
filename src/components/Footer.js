import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const Footer = props => {
  return (
    <div className="w-full mx-auto bg-secondary">
      <div className="container flex flex-col-reverse justify-between px-4 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 lg:px-16">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start">
          <div className="mx-auto my-6 text-center text-gray-400 lg:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/*  Logo */}
          <div>
            <Link to="/">
              <img src="./logo-white.svg" className="h-6" alt="" />
            </Link>
          </div>
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            {/*  Link 1 */}
            <a href="#">
              <img src="./icon-facebook.svg" alt="" className="h-6" />
            </a>
            {/* Link 2 */}
            <a href="#">
              <img src="./icon-youtube.svg" alt="" className="h-6" />
            </a>
            {/*  Link 3  */}
            <a href="#">
              <img src="./icon-twitter.svg" alt="" className="h-6 " />
            </a>
            {/*  Link 4 */}
            <a href="#">
              <img src="./icon-pinterest.svg" alt="" className="h-6" />
            </a>
            {/* Link 5 */}
            <a href="#">
              <img src="./icon-instagram.svg" alt="" className="h-8" />
            </a>
          </div>
        </div>
        {/*  List Container  */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-gray-400">
            <a
              onClick={() => scrollTo("#home")}
              className="hover:text-gray-200 hover:cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollTo("#about")}
              className="hover:text-gray-200 hover:cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollTo("#service")}
              className="hover:text-gray-200 hover:cursor-pointer"
            >
              Service
            </a>
            <a
              onClick={() => scrollTo("#contact")}
              className="hover:text-gray-200 hover:cursor-pointer"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-gray-400">
            <a to="#" className="hover:text-gray-200">
              Gallery
            </a>
            <a to="#" className="hover:text-gray-200">
              Resources
            </a>
            <a to="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
          </div>
        </div>

        {/*  Input Container  */}
        <div className="flex flex-col justify-between space-y-3 text-center lg:text-left">
          <p className="text-lg font-semibold text-white">
            MGSAMG Trading & Manufacturing PLC.
          </p>
          <p className="text-gray-400 ">St.Urael church on SHEGER Building </p>
          <p className="text-gray-400 ">Addis Ababa, Ethiopia </p>
          <div className="hidden text-gray-400 lg:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
