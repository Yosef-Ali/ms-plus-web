import React from "react"

const Service = () => {
  return (
    <div
      id="service"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 "
    >
      <div className="flex flex-col mb-6 lg:flex-row md:mb-14">
        <div className="flex flex-col space-y-12 lg:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Some of our services are:
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            MGSAMG prides itself on providing quality service to the generation
            of potential customers at competitive prices through creative
            marketing techniques in Addis Ababa and the surrounding cities.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="./illustration-service.svg" alt="" />
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col flex-1 max-w-md ">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-tertiary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <rect
                x="40"
                y="40"
                width="176"
                height="176"
                rx="8"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></rect>
              <line
                x1="176"
                y1="24"
                x2="176"
                y2="56"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="80"
                y1="24"
                x2="80"
                y2="56"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="40"
                y1="88"
                x2="216"
                y2="88"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <path
                d="M92,128h28l-16,20a16,16,0,1,1-11.3,27.3"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
              <polyline
                points="144 140 160 128 160 180"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Event organizing</h6>
          <div className="flex flex-col flex-1">
            <div className="flex-1 space-y-3 ">
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">
                  Exhibition and fairs
                </span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">Conference</span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">
                  Symposium and Workshop
                </span>
              </div>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center mt-2 font-semibold transition-colors duration-200 text-primary hover:text-primary/75"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 max-w-md ">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-tertiary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
              <line
                x1="136"
                y1="64"
                x2="192"
                y2="120"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <polyline
                points="160 192 200 152 192 120"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <line
                x1="40.5"
                y1="160.5"
                x2="95.5"
                y2="215.5"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5 ">
            Promotion & products launches
          </h6>
          <div className="flex flex-col flex-1 ">
            <div className="flex-1 space-y-3 ">
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">Festivals</span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">Fundraising</span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">Social events</span>
              </div>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center mt-2 font-semibold transition-colors duration-200 text-primary hover:text-primary/75"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 max-w-md ">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-tertiary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
              <circle
                cx="80"
                cy="204"
                r="20"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></circle>
              <circle
                cx="184"
                cy="204"
                r="20"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></circle>
              <path
                d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Sales & Marketing</h6>
          <div className="flex flex-col flex-1 ">
            <div className="flex-1 space-y-3 ">
              <div class="flex items-center  text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">
                  Preparing marketing strategy
                </span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">Customer handling</span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">
                  Training and development
                </span>
              </div>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center mt-2 font-semibold transition-colors duration-200 text-primary hover:text-primary/75 "
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 max-w-md ">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-tertiary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <polyline
                points="64 80 64 40 192 40 192 80"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <rect
                x="64"
                y="152"
                width="128"
                height="68"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></rect>
              <path
                d="M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
              <circle cx="188" cy="116" r="12"></circle>
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            Advertising & printing
          </h6>
          <div className="flex flex-col flex-1 ">
            <div className="flex-1 space-y-3 ">
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">
                  Import inputs for printing
                </span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">
                  Distributing stationary items
                </span>
              </div>
              <div class="flex items-center text-primary -px-3">
                <svg
                  class="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span class="mx-3 text-darkGrayishBlue">
                  Graphic art design and Printing
                </span>
              </div>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center mt-2 font-semibold transition-colors duration-200 text-primary hover:text-primary/75"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
