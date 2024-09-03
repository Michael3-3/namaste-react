import React from "react";

const ResHead = ({ info }) => {
  console.log(info);
  return (
    <div className="w-full  mt-6 p-3 border-[.5px]  border-slate-600  shadow-xl shadow-zinc-500 rounded-3xl">
      <div id="rating" className="tracking-tight font-bold text-lg">
        <i className="text-green-600 ri-star-smile-fill"></i>
        {info.avgRatingString} ({info.totalRatingsString}) •{" "}
        {info.costForTwoMessage}
      </div>
      <div
        id="cuisines"
        className=" text-red-500 text-base tracking-tight font-bold underline">
        {info.cuisines.join(", ")}
      </div>
      <div id="outlet" className="pt-5">
        <i className="ri-guide-fill text-orange-700"></i>{" "}
        <span className="font-semibold tracking-tight">Outlet</span>{" "}
        {info.areaName}
        <div className="pt-5 font-semibold tracking-tight">
          <i className="font-normal ri-timer-line text-orange-600 "></i> 20-25 min
        </div>
      </div>
      <div id="offers" className="text-zinc-500 pt-5">
      <i className="ri-riding-line text-xl"></i> &nbsp; Order above 149 for discounted delivery fee
      </div>
    </div>
  );
};

export default ResHead;
