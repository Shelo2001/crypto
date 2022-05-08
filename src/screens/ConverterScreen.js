import React, { useState, useEffect } from "react"
import { useGetCryptosQuery } from "../services/CryptoApi"
import millify from "millify"

const ConverterScreen = () => {
  const { data } = useGetCryptosQuery(100)
  const [cryptoName, setCryptoName] = useState("Cryptocurrencies")
  const [cryptoValue, setCryptoValue] = useState(0)
  const [cryptoResult, setCryptoResult] = useState(0)

  useEffect(() => {
    data?.data?.coins?.map((coin) => {
      if (coin.name === cryptoName) {
        setCryptoResult(coin.price * cryptoValue)
      }
    })
  })
  return (
    <div>
      <div class="min-w-screen min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div class="w-5/6 lg:w-4/6 rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
          <div class="flex flex-col">
            <div
              id="header"
              class="flex flex-col items-center justify-center text-white py-4 bg-blue-800"
            >
              <div class="text-center  text-2xl">
                Convert Cryptocurrency Into USD !
              </div>
            </div>

            <div id="converters-area" class="px-4 py-5">
              <div class="flex flex-col text-white">
                <div class="flex items-center justify-between mb-5">
                  <div class="flex ml-6 mt-10">
                    <div class="mb-3 xl:w-96">
                      <select
                        value={cryptoName}
                        options={cryptoName}
                        class="form-select appearance-none
                        py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600
      block
      w-full
      text-base
      font-normal
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      transition
      ease-in-out
      m-0
       focus:bg-white focus:border-blue-600 "
                        onChange={(e) => setCryptoName(e.target.value)}
                      >
                        <option value="Cryptocurrency">Cryptocurrencies</option>
                        {data?.data?.coins.map((currency) => (
                          <option value={currency.name}>{currency.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {console.log(cryptoName)}
                  {console.log(cryptoValue)}
                  <div class="flex flex-col text-center w-3/6 px-2">
                    <label class="mb-1" for="weight-pounds">
                      Enter Value
                    </label>
                    <input
                      type="number"
                      id="weight-pounds"
                      value={cryptoValue}
                      onChange={(e) => setCryptoValue(e.target.value)}
                      class="py-3 px-5 rounded  focus:outline-none text-gray-600 focus:text-gray-600"
                    />
                  </div>

                  <div class="flex flex-col text-center w-3/6 px-2">
                    <label class="mb-1" for="weight-kilograms">
                      Current Price In USD
                    </label>
                    <p class="py-3 px-5 rounded focus:outline-none text-black bg-white focus:text-gray-600">
                      {millify(cryptoResult)} $
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConverterScreen
