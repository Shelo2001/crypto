import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" bottom-0 w-full ">
      <footer className="p-4 bg-white rounded-lg text-center shadow md:flex  md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 Akaki Shelia™ All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/home" className="mr-4 hover:text-blue-600 md:mr-6 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/converter" className="mr-4 hover:text-blue-600 md:mr-6">
              Converter
            </Link>
          </li>
          <li>
            <Link to="/news" className="mr-4 hover:text-blue-600 md:mr-6">
              News
            </Link>
          </li>
          <li>
            <Link
              to="/cryptocurrencies"
              className="mr-4 hover:text-blue-600 md:mr-6"
            >
              Cryptocurrencies
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
