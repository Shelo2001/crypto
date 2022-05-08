import React from "react"
import { Link } from "react-router-dom"
const LandingScreen = () => {
  return (
    <div className="my-4">
      <div className="flex bg-white" style={{ height: "600px" }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Learn more about{" "}
              <span className="text-blue-600">Crypto World</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              We are building the most influential, trusted information platform
              for a global community engaged in the transformation of the
              financial system and the emerging crypto economy.This website is
              an integrated platform for media, events, data & indices for the
              next generation of investing and the future of money.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link to="/home">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Explore Crypto World
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full object-cover bg-no-repeat	"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1536411243582-2481fd5bc69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingScreen
