import React from "react"
import millify from "millify"
import CountUp from "react-countup"
import { Link } from "react-router-dom"
import { useGetCryptosQuery } from "../services/CryptoApi"
import CryptocurrenciesScreen from "../screens/CryptocurrenciesScreen"
import NewsScreen from "../screens/NewsScreen"

const HomeScreen = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  console.log(globalStats)
  if (isFetching) return "Loading..."

  return (
    <div>
      <h1 className="text-center text-4xl mt-6">
        {" "}
        Global{" "}
        <span className="text-center text-blue-600 text-4xl my-3">
          {" "}
          Statistics
        </span>{" "}
      </h1>
      <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:space-x-4">
          <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total
                  </h3>
                  <p className="text-3xl font-bold text-black">
                    <CountUp
                      start={globalStats.total - 40}
                      end={globalStats.total}
                      duration={3}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total 24h Volume
                  </h3>
                  <p className="text-3xl font-bold text-black">
                    {millify(globalStats.total24hVolume)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total Coins
                  </h3>
                  <p className="text-3xl font-bold text-black">
                    {millify(globalStats.totalCoins)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total Exchanges
                  </h3>
                  <p className="text-3xl font-bold text-black">
                    <CountUp
                      start={globalStats.totalExchanges - 40}
                      end={globalStats.totalExchanges}
                      duration={3}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total Market Capital
                  </h3>
                  <p className="text-3xl font-bold text-black">
                    {millify(globalStats.totalMarketCap)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
            <div className="bg-white p-5">
              <div className="sm:flex sm:items-start">
                <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <h3 className="text-sm leading-6 font-medium text-gray-400">
                    Total Markets
                  </h3>
                  <p className="text-3xl font-bold text-black">
                    {millify(globalStats.totalMarkets)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-10">
        <h1 className="text-center text-4xl mt-6 inline-block mx-10 ">
          Top 10
          <span className="text-center text-blue-600 text-4xl my-3">
            {" "}
            Crypto Currencies
          </span>{" "}
          In The World
        </h1>
        <Link to="/cryptocurrencies">
          <button class="relative inline-flex items-center justify-center p-0.5 mt-6 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Show More...
            </span>
          </button>
        </Link>
      </div>
      <CryptocurrenciesScreen simplified />

      <div className="flex justify-between items-center px-10">
        <h1 className="text-center text-4xl mt-6 inline-block mx-10 ">
          Latest
          <span className="text-center text-blue-600 text-4xl my-3">
            {" "}
            Crypto
          </span>{" "}
          News
        </h1>
        <Link to="/news">
          <button class="relative inline-flex items-center justify-center p-0.5 mt-6 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Show More...
            </span>
          </button>
        </Link>
      </div>
      <NewsScreen simplified />
    </div>
  )
}

export default HomeScreen
