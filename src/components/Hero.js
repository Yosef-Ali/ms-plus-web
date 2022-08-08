import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse items-center justify-between w-full mt-14 lg:space-y-0 lg:flex-row lg:pt-48"
    >
      {/* <!-- Left item --> */}
      <div className="flex flex-col space-y-6 text-center lg:w-1/2 mt-28 lg:mt-0 lg:space-y-10">
        <h1 className="text-3xl font-bold tracking-wide text-center lg:text-left md:text-6xl">
          Bring everyone together to build better products
        </h1>
        <p className="text-center text-darkGrayishBlue lg:text-left lg:max-w-md">
          MGSAMG is legally registered company established with a vision of
          rendering different services for companies which are in need of fast,
          reliable and immaculate services here in Ethiopia and abroad.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 text-white rounded-full shadow-md bg-primary hover:shadow-none hover:cursor-pointer"
          >
            Get in touch
          </Link>
        </div>
      </div>
      {/* <!-- Image --> */}
      <div className="lg:w-1/2">
        <StaticImage
          src="../images/illustration-intro.svg"
          alt="hero image"
          placeholder="blurred"
        />
      </div>
    </div>
  )
}

export default Hero
