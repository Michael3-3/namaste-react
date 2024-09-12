import React from 'react'

const SingleMenuItem = ({card}) => {
console.log(card)   
  return (
    <div className="w-full h-36 p-3 flex justify-between border-b-[1px] border-slate-500 items-center">
        <div id="dataPart" className="">
            <div id="menuTitle" className="text-xl font-bold">{card.name}</div>
            <div id="menuDesc" className="text-xl font-bold">₹{card.price/100}</div>
            <div id="menuPrice">{card.description}</div>
            
        </div>
        <div id="add">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Add</button>
        </div>
    </div>
  )
}

export default SingleMenuItem