import React from 'react'
import data from "./data"
import Cards from '../Cards'
export default function page() {
  return (
    <div className='overflow-x-hidden bg-slate-950 mt-20 mb-56'>
      <div className="container w-full flex">

        {/* <!-- LEFT SIDE  --> */}
        <div className="filter-section w-[30%] bg-cyan-800 bg-opacity-35 m-6 px-8 py-4 ">

          {/* <!-- Heading --> */}
          <div className="text-center text-white text-3xl mb-3 ">
            <i className="fa-solid fa-filter inline-block"></i>
            <h2 className="inline-block font-bold">Filters</h2>
          </div>

          <hr className="text-white m-4" />

          <div className="stick-elements sticky top-2">
            {/* <!-- Year  --> */}
            <div className="year space-y-3">
              <h2 className="text-white font-bold  text-2xl">Experience Level</h2>

              <div className="buttons space-y-3">

                <div className="flex items-center">
                  <input id="default-radio-1" type="radio" value="" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                </div>
                <div className="flex items-center">
                  <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">1st
                    Year</label>
                </div>
                <div className="flex items-center">
                  <input checked id="default-radio-3" type="radio" value="" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">2nd
                    Year</label>
                </div>
                <div className="flex items-center">
                  <input id="default-radio-4" type="radio" value="" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-radio-4" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3rd
                    Year</label>
                </div>
                <div className="flex items-center">
                  <input id="default-radio-5" type="radio" value="" name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-radio-5" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">4th
                    Year</label>
                </div>


              </div>



            </div>

            <hr className="text-white m-4" />
            {/* <!-- Branch --> */}
            <div className="branch space-y-3">
              <h2 className="text-white font-bold  text-2xl">Engineering Streams</h2>

              <div className="buttons space-y-3">

                <div className="flex items-center">
                  <input id="radio-1" type="radio" value="" name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Computer
                    Engineering</label>
                </div>
                <div className="flex items-center">
                  <input checked id="radio-2" type="radio" value="" name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">InhtmlFormation
                    Technology</label>
                </div>
                <div className="flex items-center">
                  <input checked id="radio-3" type="radio" value="" name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Electronics and
                    Communication</label>
                </div>
                <div className="flex items-center">
                  <input id="radio-4" type="radio" value="" name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="radio-4" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Electrical</label>
                </div>
                <div className="flex items-center">
                  <input id="radio-5" type="radio" value="" name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="radio-5" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mechanical</label>
                </div>
                <div className="flex items-center">
                  <input id="radio-6" type="radio" value="" name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="radio-6" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Civil</label>
                </div>
                <div className="flex items-center">
                  <input id="radio-7" type="radio" value="" name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="radio-7" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Production</label>
                </div>


              </div>

            </div>

            <hr className="text-white m-4" />

            {/* <!-- Tags --> */}
            <div className="tags">
              <h2 className="text-white font-bold  text-2xl">Tags</h2>

              <div className="tag-buttons m-4">
                <label
                  className="inline-flex items-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Remote" />
                  <span>Remote</span>
                </label>

                <label
                  className="inline-flex items-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                  <span>Part-Time</span>
                </label>

                <label
                  className="inline-flex items-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                  <span>XYZ</span>
                </label>

                <label
                  className="inline-flex items-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                  <span>Part-Time</span>
                </label>

                <label
                  className="inline-flex items-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                  <span>Have Stipend</span>
                </label>

                <label
                  className="inline-flex items-center bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                  <span>Part-Time</span>
                </label>

                {/* <!-- Add more checkboxes similarly htmlFor other options --> */}
              </div>
            </div>
          </div>

        </div>

        {/* <!-- RIGHT SIDE  --> */}
        <div className="cards-section w-[70%] m-6 ">

          {/* <!-- Heading --> */}
          <h1 className="text-white  font-extrabold text-4xl text-center mb-5">Latest Jobs and Internship
            Opportunities</h1>

          <hr className="text-white m-4" />
          {/* <!-- CARDS  --> */}
          <br />
          <div className="cards-holder flex flex-col space-y-8 items-center">
            <Cards />

          </div>


        </div>

      </div>
    </div>
  )
}
