import React from 'react'
import loader from "../assets/loader.gif"
export default function Loader() {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center"><img src={loader} alt="loader"/></div>
  )
}
