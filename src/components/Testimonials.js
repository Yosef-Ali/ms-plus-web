import * as React from "react"

const Testimonials = () => {
  return (
    <div className="w-full px-5 mx-auto my-32 text-center">
      {/* <!-- Heading --> */}
      <h2 className="text-4xl font-bold text-center">
        What are customers say about us?
      </h2>
      {/* <!-- Testimonials Container --> */}
      <div className="flex flex-col my-24 md:flex-row md:space-x-6">
        {/* <!-- Testimonial 1 --> */}
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-quaternary md:w-1/3">
          <img
            src="./medtechlogo.png"
            className="w-20 bg-white border-2 rounded-full -mt-14"
            alt=""
          />
          <h5 className="text-lg font-bold">MEDTECH Ethiopia PLC</h5>
          <p className="text-sm text-darkGrayishBlue">
            “MGSAMG has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>

        {/* <!-- Testimonial 2 --> */}
        <div className="flex-col items-center hidden p-6 space-y-6 rounded-lg bg-quaternary md:flex md:w-1/3">
          <img
            src="./ECAE-300x214.png"
            className="w-20 bg-white border-2 rounded-full -mt-14"
            alt=""
          />
          <h5 className="text-lg font-bold">
            Ethiopian Conformity Assessment Enterprise
          </h5>
          <p className="text-sm text-darkGrayishBlue">
            “We have been able to cancel so many other Companies since using
            MGSAMG. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>

        {/* <!-- Testimonial 3 --> */}
        <div className="flex-col items-center hidden p-6 space-y-6 rounded-lg bg-quaternary md:flex md:w-1/3">
          <img
            src="./Julphar-logo.jpeg"
            className="w-20 bg-white border-2 rounded-full -mt-14"
            alt=""
          />
          <h5 className="text-lg font-bold">
            JULPHAR Ethiopia Pharmaceutical PLC
          </h5>
          <p className="text-sm text-darkGrayishBlue">
            “MGSAMG has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
