"use client"
import React from 'react'
import { filterData } from './filterdata'
import { updates } from "./data"
// import Cards from '../Cards'
import Cards from './Cards'
import { useState } from 'react'
import Filter from './Filter'
export default function page() {
  const [category, setCategory] = useState("All")
  // console.log(category)
  return (
    <div className='min-h-screen flex gap-16 mt-20 mb-56 bg-slate-950'>
      {/* <!-- LEFT SIDE  -->  w-[30%] h-[70rem]   sticky top-8    rounded-lg */}
      <div className=" w-[30%] h-[70rem] mt-6 mb-6 px-8 py-4 sticky top-20 rounded-lg bg-sky-900 bg-opacity-35 ">

        {/* <!-- Heading --> */}
        <div className="text-center text-white text-3xl mb-3 ">
          <i className="fa-solid fa-filter inline-block"></i>
          <h2 className="inline-block font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">Filters</h2>
        </div>

        <hr className="text-white m-4" />

        <div className="stick-elements flex flex-col justify-start">
          {/* <!-- Year  --> */}
          <h1 className='text-2xl text-center'>Batches</h1>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>

          <hr className="text-white m-4" />
          {/* <!-- Branch --> */}
          <div className="branch space-y-3">
            <h2 className="text-white font-bold  text-2xl mb-6">Engineering Streams</h2>

            <div className="buttons space-y-3">

              <div className="flex items-center">
                <input id="radio-1" type="radio" value="" name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-1" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Computer
                  Engineering</label>
              </div>
              <div className="flex items-center">
                <input checked id="radio-2" type="radio" value="" name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-2" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Information
                  Technology</label>
              </div>
              <div className="flex items-center">
                <input checked id="radio-3" type="radio" value="" name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-3" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Electronics and
                  Communication</label>
              </div>
              <div className="flex items-center">
                <input id="radio-4" type="radio" value="" name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-4" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Electrical</label>
              </div>
              <div className="flex items-center">
                <input id="radio-5" type="radio" value="" name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-5" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Mechanical</label>
              </div>
              <div className="flex items-center">
                <input id="radio-6" type="radio" value="" name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-6" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Civil</label>
              </div>
              <div className="flex items-center">
                <input id="radio-7" type="radio" value="" name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="radio-7" className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Production</label>
              </div>


            </div>

          </div>

          <hr className="text-white m-4" />

          {/* <!-- Tags --> */}
          <div className="tags">
            <h2 className="text-white font-bold  text-2xl">Tags</h2>

            <div className="tag-buttons m-4 flex flex-wrap gap-6 ">
              <label
                className="w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 hover:border-sky-500 duration-300 ">
                <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Remote" />
                <span>Remote</span>
              </label>

              <label
                className="w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 hover:border-sky-500 duration-300">
                <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                <span>Part-Time</span>
              </label>

              <label
                className="w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 hover:border-sky-500 duration-300">
                <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                <span>XYZ</span>
              </label>

              <label
                className="w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 hover:border-sky-500 duration-300">
                <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                <span>Part-Time</span>
              </label>

              <label
                className="w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 hover:border-sky-500 duration-300">
                <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                <span>Have Stipend</span>
              </label>

              <label
                className="w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 hover:border-sky-500 duration-300">
                <input type="checkbox" className="htmlForm-checkbox h-5 w-5 rounded-full mr-2" name="tags" value="Part-Time" />
                <span>Part-Time</span>
              </label>

              {/* <!-- Add more checkboxes similarly htmlFor other options --> */}
            </div>
          </div>
        </div>

      </div>

      {/* <!-- RIGHT SIDE  --> */}
      <div className="cards-section w-[70%] h-full">

        {/* <!-- Heading --> */}
        <h1 className="bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent  font-extrabold text-4xl text-center mb-5">Latest Jobs and Internship
          Opportunities</h1>

        <hr className="text-white m-4" />
        {/* <!-- CARDS  --> */}
        <br />
        <div className="cards-holder flex flex-col space-y-8 items-center">
          <Cards data={updates.data} category={category} />

        </div>


      </div>
    </div>
  )
}
