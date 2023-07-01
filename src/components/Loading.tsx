/* eslint-disable tailwindcss/classnames-order */
import React from "react"

const Loading = () => {
  return (
    <div className="fixed inset-x-0 top-0 flex items-center justify-center w-screen h-screen bg-[#F8F8F8]">
      <div className="absolute inline-flex w-10 h-10 rounded-full opacity-75 animate-ping bg-mainBlue"></div>
    </div>
  )
}

export default Loading
