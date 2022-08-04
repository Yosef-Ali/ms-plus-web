import React from "react"

const CTA = () => {
  return (
    <section className="w-full mx-auto bg-brightRed " id="cta">
      <div className="container flex flex-col items-center justify-between px-4 py-24 mx-auto space-y-12 lg:py-12 lg:flex-row md:space-y-0 lg:px-24 ">
        {/*  Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:mb-12 md:max-w-xl lg:text-left lg:mb-0">
          Simplify how your team works today.
        </h2>
        {/*  Button */}
        <a
          href="#"
          className="p-3 px-8 bg-white rounded-full shadow-2xl text-brightRed baseline hover:bg-gray-900"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default CTA
