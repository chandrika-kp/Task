import React from 'react'
import img from '../th.jpg'
const Home = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <img src={img} alt="" className="object-cover w-full h-full" />
      </div>

    </>
  )
}

export default Home