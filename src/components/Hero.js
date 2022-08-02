import React from "react"

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between w-full mt-14 lg:space-y-0 lg:flex-row">
      {/* <!-- Left item --> */}
      <div className="flex flex-col space-y-6 text-center lg:w-1/2 mt-28 lg:mt-0 lg:space-y-10">
        <h1 className="text-3xl font-bold tracking-wide text-center lg:text-left md:text-6xl">
          Bring everyone together to build better products
        </h1>
        <p className="text-center text-darkGrayishBlue lg:text-left lg:max-w-md">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center lg:justify-start">
          <a
            href="#"
            className="px-8 py-3 text-white rounded-full bg-brightRed hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
      {/* <!-- Image --> */}
      <div className="lg:w-1/2">
        <img src="./illustration-intro.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero
