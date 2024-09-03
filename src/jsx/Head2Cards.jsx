const Head2Cards = (prop) => {
  const discount = prop.card.info.aggregatedDiscountInfoV3;
  
  return (
    <div className="snap-start w-96 cursor-pointer  gap-3 mr-2 flex hover:scale-95 ease-in-out duration-150">
      <div id="subcard" className="relative">
        <img
          className="h-44 min-w-72 rounded-xl overflow-hidden object-cover gap-3 mr-2"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            prop.card.info.cloudinaryImageId
          }
          alt=""
        />
        <div
          id="gradient"
          className="absolute top-0  w-72 h-44 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-transparent">
          <div
            id="discount"
            className=" text-xl absolute bottom-2 left-2 opacity-100 font-extrabold text-white ">
            {discount == null ? (
              " "
            ) : (
              <h2>{discount.header + " " + discount.subHeader}</h2>
            )}
          </div>
        </div>
        <div id="resName" className="p-3">
          <h3 className="text-lg tracking-tight font-bold">
            {prop.card.info.name.substring(0, 26)}{" "}
            {prop.card.info.name.length > 25 ? <>...</> : " "}
          </h3>
          <div
            id="rating"
            className="flex items-center font-medium gap-2 text-lg">
            <i className="text-green-600 ri-star-smile-fill"></i>
            <p>
              {prop.card.info.avgRating} • {prop.card.info.sla.slaString}
            </p>
          </div>
          <div id="cuisines" className="text-base text-zinc-500 font-normal">
            {String(prop.card.info.cuisines.join(" ")).length > 33
              ? String(prop.card.info.cuisines.join(" ")).substring(0, 33) +
                "..."
              : prop.card.info.cuisines.join(" ")}
          </div>
          <div id="location" className="text-base text-zinc-500 font-normal">
            {prop.card.info.areaName}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Head2Cards;
