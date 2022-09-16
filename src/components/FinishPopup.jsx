import React from 'react'

const FinishPopup = ({setIsFinished}) => {
  return (
    <div className="flex flex-col justify-center items-center absolute w-2/4 h-2/4 bg-red-300 mx-[450px] mt-[150px]">
    <p className="text-white text-2xl">Congratulations! You have done it.</p>
    <button className=" w-[100px] h-[50px] bg-white mt-4" onClick={(e)=>setIsFinished(false)}>OK</button>
  </div>
  )
}

export default FinishPopup