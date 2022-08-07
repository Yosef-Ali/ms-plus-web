import * as React from "react"

const CTA = () => {
  return (
    <section id="contact" className="w-full mx-auto bg-primary ">
      <div className="container flex flex-col items-center justify-between px-4 py-24 mx-auto space-y-12 lg:py-40 lg:flex-row md:space-y-0 lg:px-24 lg:mt-56 ">
        {/*  Heading */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:mb-12 md:max-w-xl lg:text-left lg:mb-0">
            We focus our attention in :
          </h2>
          <ul className="max-w-md ml-6 space-y-4">
            <li className="flex items-center">
              <svg
                className="flex-none w-6 h-6 stroke-2 fill-sky-100 stroke-secondary/75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4 text-white">
                Organizing your event / conference to suite your requirements.
              </p>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-none w-6 h-6 stroke-2 fill-sky-100 stroke-secondary/75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4 text-white">
                Supplying a number of quality promotional items timely with
                reasonable price.
              </p>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-none w-6 h-6 stroke-2 fill-sky-100 stroke-secondary/75"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4 text-white">
                Managing and boosting your business through conducting marketing
                and sales strategy.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
          <div className="relative z-0">
            <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Contact Us
              </h3>
              <form className="space-y-6">
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="name"
                    className="inline-block mb-1 font-medium"
                  >
                    Name
                  </label>
                  <input
                    placeholder="John Doe"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    placeholder="john.doe@example.org"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <textarea
                    placeholder="Message"
                    rows="5"
                    className="w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <a
                    href="/"
                    className="inline-flex items-center p-3 px-8 text-white transition duration-700 rounded-full shadow-2xl bg-primary baseline hover:bg-secondary"
                  >
                    SEND
                    <span className="ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <path
                          d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z"
                          fill="none"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></path>
                        <line
                          x1="110.9"
                          y1="145.1"
                          x2="156.1"
                          y2="99.9"
                          fill="none"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></line>
                      </svg>
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
