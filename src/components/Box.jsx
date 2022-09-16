import React from 'react'

const Box = ({onDragStart, onDragEnter, onDragEnd, value}) => {
  return (
    <div  className="bg-red-300 h-24 w-24 text-center text-black text-lg px-8 py-8" draggable onDragStart={(e)=>onDragStart(e,value)}
            onDragEnter={(e)=> onDragEnter(e,value)}
            onDragEnd={onDragEnd}
          >
                <p>{value}</p>
            </div>
  )
}

export default Box