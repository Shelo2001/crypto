import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingScreen from "./screens/LandingScreen"
import HomeScreen from "./screens/HomeScreen"
import CryptocurrenciesScreen from "./screens/CryptocurrenciesScreen"
import NewsScreen from "./screens/NewsScreen"
import ConverterScreen from "./screens/ConverterScreen"
import CryptoDetailsScreen from "./screens/CryptoDetailsScreen"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cryptocurrencies" element={<CryptocurrenciesScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/converter" element={<ConverterScreen />} />
        <Route path="/crypto/:id" element={<CryptoDetailsScreen />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
