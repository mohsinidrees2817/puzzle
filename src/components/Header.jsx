import React, { useState } from 'react'



const Header = ({state,setState,settingValue,setValue,value}) => {
  return (
    <div>
        <div className="flex justify-center items-center bg-red-300 h-12">
        <form onSubmit={settingValue}
    >
          <input
            type="number"
            name="input"
            placeholder="3"
            className="outline-none h-8 w-40 "
            min="2"
            max="8"
            value={state}
            onChange={(e)=>setState(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-800 h-8 w-20 ml-4 rounded-md"
            onClick={()=>{state < 9 && state > 1 ? setValue(state) : setValue(value)}}
          >
            Submit 
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header