import React, { useState } from "react"
import moment from "moment"

import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi"
import { useGetCryptosQuery } from "../services/CryptoApi"

const NewsScreen = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
  const { data } = useGetCryptosQuery(100)
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  })

  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"

  if (!cryptoNews?.value) return "Loading..."
  return (
    <>
      {!simplified && (
        <div class="flex ml-10 mt-10">
          <div class="mb-3 xl:w-96">
            <select
              value={newsCategory}
              options={newsCategory}
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
              onChange={(e) => setNewsCategory(e.target.value)}
            >
              <option value="Cryptocurrency">Cryptocurrencies</option>
              {data?.data?.coins.map((currency) => (
                <option value={currency.name}>{currency.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {cryptoNews.value.map((news) => (
          <a href={news.url}>
            <div
              class="rounded overflow-hidden shadow-lg hover:shadow-lg cursor-pointer hover:shadow-blue-400"
              key={news.id}
            >
              <div class="px-6 py-4">
                <div class="flex justify-between">
                  <div class="font-bold inline-block text-xl mb-2">
                    {news.name}
                  </div>
                  <div>
                    <img
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      className="inline-block h-20 w-56"
                      alt={news.name}
                    ></img>
                  </div>
                </div>
                <hr class="my-6" />
                <p class="text-gray-700 text-base font-medium">
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="relative bottom-0 left-0">
                  <div className="flex mt-10">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="news"
                    />
                    <p className="inline-block ml-2 text-gray-700 text-base font-medium">
                      {news.provider[0]?.name}
                    </p>
                  </div>
                  <p className="text-gray-700 mt-10 text-base font-medium">
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export default NewsScreen
