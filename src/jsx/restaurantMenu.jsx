import React,{useState} from "react";
import SingleMenuItem from "./SingleMenuItem";

const RestaurantMenu = ({ menuCard }) => {
  const [toggle,setToggle] = useState(false);
  console.log(toggle)
  const { title, itemCards } = menuCard.card.card;
  return (
    <div className="w-full border-b-8 rounded-md border-slate-500">
   
      <div id="accordian"  onClick={() => setToggle(!toggle)} className="w-full h-16 bg-slate-300 flex justify-between px-5 text-xl font-bold items-center cursor-pointer mt-5 shadow-lg shadow-black rounded-md">
        <h1>{title} </h1>
        <i className={`ri-arrow-${toggle?"up":"down"}-s-line `}></i>
       
      </div>  
      <div id="menuList">   
        {toggle?itemCards.map((card)=><SingleMenuItem card={card?.card?.info} key={card.card.info.id}/>):" "}
      </div>
    </div>
  );
};

export default RestaurantMenu;
