import React from "react"

const CTA = () => {
  return (
    <section className="w-full mx-auto bg-brightRed " id="cta">
      <div className="container flex flex-col items-center justify-between px-4 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 md:px-24">
        {/*  Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today.
        </h2>
        {/*  Button */}
        <div>
          <a
            href="#"
            className="p-3 px-8 bg-white rounded-full shadow-2xl text-brightRed baseline hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
