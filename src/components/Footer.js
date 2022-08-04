import React from "react"
import { Link } from "gatsby"

const Footer = props => {
  return (
    <div className="w-full mx-auto bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-4 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 lg:px-16">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start">
          <div className="mx-auto my-6 text-center text-white lg:hidden">
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
              <img src="./icon-twitter.svg" alt="" className="h-6" />
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
          <div className="flex flex-col space-y-3 text-white">
            <Link to="/" className="hover:text-brightRed">
              Home
            </Link>
            <Link to="#" className="hover:text-brightRed">
              Pricing
            </Link>
            <Link to="#" className="hover:text-brightRed">
              Products
            </Link>
            <Link to="#" className="hover:text-brightRed">
              About
            </Link>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <Link to="#" className="hover:text-brightRed">
              Careers
            </Link>
            <Link to="#" className="hover:text-brightRed">
              Community
            </Link>
            <Link to="#" className="hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/*  Input Container  */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex max-w-md mx-auto space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white lg:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
