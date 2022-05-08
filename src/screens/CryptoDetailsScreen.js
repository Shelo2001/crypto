import React, { useState } from "react"
import HTMLReactParser from "html-react-parser"
import { useParams } from "react-router-dom"
import millify from "millify"
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons"
import LineChart from "../components/LineChart"
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/CryptoApi"

const CryptoDetailsScreen = () => {
  const params = useParams()

  const coinId = params.id
  const [timePeriod, setTimePeriod] = useState("7d")

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const { data: coinHistory } = useGetCryptoHistoryQuery(coinId, timePeriod)

  if (isFetching) return "Loading..."

  const cryptoDetails = data?.data?.coin

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"]

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ]

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ]

  return (
    <>
      <h1 className="text-center text-blue-600 font-semibold text-4xl mt-6">
        {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
      </h1>
      <p className="text-center text-xl mt-3 font-md text-black">
        {cryptoDetails?.name} live price in US Dollar (USD). View value
        statistics, market cap and supply.
      </p>
      <hr class="my-6" />
      <div class="flex ml-10 mt-10">
        <div class="mb-3 xl:w-96">
          <select
            value={timePeriod}
            options={timePeriod}
            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            {time.map((date) => (
              <option key={date} value={timePeriod}>
                {date}
              </option>
            ))}
          </select>
        </div>
      </div>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={cryptoDetails?.price}
        coinName={cryptoDetails?.name}
      />
      <hr class="my-6" />

      <h1 className="text-center text-blue-600 font-semibold text-xl mt-6">
        {cryptoDetails?.name} Value Statistics
      </h1>
      <p className="text-center mt-3 font-sm text-black">
        An overview showing the statistics of {cryptoDetails?.name}, such as the
        base and quote currency, the rank, and trading volume.
      </p>

      <div>
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:space-x-4">
            {stats.map(({ title, value, icon }) => (
              <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-400">
                        {title}
                      </h3>
                      <h3 className="text-lg leading-6 my-1 font-medium text-blue-400">
                        {icon}
                      </h3>
                      <p className="text-3xl font-bold text-black">{value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-blue-600 font-semibold text-xl mt-6">
          Other Statistics
        </p>
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:space-x-4">
            {genericStats.map(({ title, value, icon }) => (
              <div className="inline-block align-bottom hover:shadow-md hover:shadow-blue-400 bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                <div className="bg-white p-5">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-400">
                        {title}
                      </h3>
                      <h3 className="text-lg leading-6 my-1 font-medium text-blue-400">
                        {icon}
                      </h3>
                      <p className="text-3xl font-bold text-black">{value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr class="my-6" />
        <h1 className="  text-center text-blue-600 font-semibold text-4xl mt-6">
          What is {cryptoDetails?.name}?
        </h1>
        <p className=" text-gray-800 font-lg text-xl mt-6">
          {cryptoDetails?.description}
        </p>

        <hr class="my-6" />
        <h1 className=" text-center text-blue-600 font-semibold text-4xl mt-6">
          {cryptoDetails?.name} Links
        </h1>
        <div class="main flex flex-col mt-5 mx-36">
          {cryptoDetails?.links.map((link) => (
            <a href={link?.url} target="_new">
              <div class="each flex hover:shadow-lg select-none p-10 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
                <div class="left">
                  <div class="header text-blue-600 font-semibold text-2xl">
                    {link?.name}
                  </div>
                  <div class="desc text-gray-600">{link?.type}</div>
                </div>
                <div class="right m-auto mr-0">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default CryptoDetailsScreen
