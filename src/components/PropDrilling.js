import React from "react"
import { useState } from "react"

const PropDrilling = () => {
  const [weather, setWeather] = useState("☼")

  return <Europe weather={weather} />
}

const Europe = ({ weather }) => {
  return <Europe weather={weather} />
}

const Estonia = ({ weather }) => {
  return <Estonia weather={weather} />
}

const Tallinn = ({ weather }) => {
  return <Tallinn weather={weather} />
}

export default PropDrilling
