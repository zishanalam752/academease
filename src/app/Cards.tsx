import React from 'react'

export default function cards() {
  return (
    <div className="card1 google relative flex w-[95%] bg-slate-900 border-gray-600 p-5 rounded-md gap-6 group hover:border-gray-500 border-[1.5px] border-transparent duration-300">
              {/* <!-- EMPTY DIV  --> */}
              <div className="absolute rounded-md h-full w-0 bg-black opacity-25 top-0 left-0
      group-hover:w-full duration-500 ease-in-out"></div>
              {/* <!-- Logo --> */}
              <div className="h-20 w-20 logo1 relative z-40 group-hover:scale-105 duration-500">
                <img src="google.jpg" alt="" className=" object-cover rounded-md" />
              </div>

              {/* <!-- Content  --> */}
              <div className="description flex flex-col space-y-2">
                {/* <!-- ROLE / --> */}
                <h2 className="role relative z-40  text-white font-bold text-2xl">Software Engineer (Android)</h2>
                {/* <!-- Description  --> */}
                <div className="description flex space-x-6">

                  <div className="company flex items-center gap-2">
                    <img src="company.png" alt="" className="w-6 h-6" />
                    <div className="text1 text-lg text-gray-400  inline font-bold">Google</div>
                  </div>
                  <div className="location flex items-center gap-2">
                    <img src="location.png" alt="" className="w-6 h-6" />
                    <div className="text1 text-lg text-gray-400  inline">Gurgaon</div>
                  </div>

                  <div className="time flex items-center gap-2">
                    <img src="clock.png" alt="" className="w-6 h-6" />
                    <div className="text1 text-lg text-gray-400  inline">1 day ago</div>
                  </div>

                  <div className="stipend flex items-center gap-2">
                    <img src="money.png" alt="" className="w-6 h-6" />
                    <div className="text1 text-lg text-gray-400  inline">$30k - $35k</div>
                  </div>

                </div>
                <div className="para text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe deleniti eos amet error
                  delectus rerum natus architecto officiis quo?
                </div>
                <button
                  className="w-36 relative z-40 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 group-hover:border-sky-500 duration-300">
                  <p>Apply Now</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
  )
}
