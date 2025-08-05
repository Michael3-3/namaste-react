import React from 'react'

const SingleMenuItem = ({card}) => {
console.log(card)   
  return (
    <div className="w-full h-36 p-3 flex justify-between border-b-[1px] border-slate-500 items-center">
        <div id="dataPart" className="">
            <div id="menuTitle" className="text-xl font-bold">{card.name}</div>
            <div id="menuDesc" className="text-xl font-bold">₹{card.price/100}</div>
            {/* // is the card.description available? and if it is length more then 100char  */}
            {card.description && card.description.length > 100 ? (
              <div id="menuDesc" className="text-sm text-gray-600">{card.description.slice(0, 100)}...</div>
            ) : (
              <div id="menuDesc" className="text-sm text-gray-600">{card.description}</div>
              // add more button at the end of discription to see all the text

            )}

            
        </div>
        <div id="add">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Add</button>
        </div>
    </div>
  )
}

export default SingleMenuItem