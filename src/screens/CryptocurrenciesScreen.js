import React, { useEffect, useState } from "react"
import millify from "millify"
import { Link } from "react-router-dom"

import { useGetCryptosQuery } from "../services/CryptoApi"

const CryptocurrenciesScreen = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setCryptos(filteredData)
  }, [searchTerm, cryptosList])

  if (isFetching) return "Loading..."

  return (
    <>
      {!simplified && (
        <div class="flex items-center my-3 mx-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-2 text-blue-600 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            name="name"
            placeholder="Search Cryptocurrencies"
            onChange={(e) => setSearchTerm(e.target.value)}
            class="w-1/3 py-2 border-b-2 border-blue-600 outline-none "
          ></input>
        </div>
      )}

      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-5">
        {cryptos?.map((currency) => (
          <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
            <div
              class="rounded overflow-hidden shadow-lg hover:shadow-lg cursor-pointer hover:shadow-blue-400"
              key={currency.id}
            >
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  {currency.rank}. {currency.name}
                </div>
                <div>
                  <img
                    src={currency.iconUrl}
                    className="object-cover h-40 w-96"
                    alt={currency.name}
                  ></img>
                </div>
                <hr class="my-6" />
                <p class="text-gray-700 text-base font-medium">
                  Price: {millify(currency.price)} $
                </p>
                <p class="text-gray-700 text-base font-medium">
                  Market Cap: {millify(currency.marketCap)}
                </p>
                <p class="text-gray-700 text-base font-medium">
                  Daily Change: {currency.change} %
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default CryptocurrenciesScreen
