

const Head3items = ({ card }) => {
  const discount = card.info.aggregatedDiscountInfoV3;
  return (
    <div className="snap-start w-52  cursor-pointer  mr-2 flex hover:scale-95 ease-in-out duration-150">
      <div className="relative">
        <img
          className="h-32 min-w-52 rounded-xl overflow-hidden object-cover gap-3 mr-2"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            card.info.cloudinaryImageId
          }
          alt={card.info.name || "Restaurant Image"}
        />
        <div
          id="gradient"
          className="absolute top-0  w-52 h-32 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-transparent">
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
            {card?.info?.name?.substring(0, 26)}{" "}
            {card?.info?.name?.length > 25 ? <>...</> : " "}
          </h3>
          <div
            id="rating"
            className="flex items-center font-medium gap-2 text-lg">
            <i className="text-green-600 ri-star-smile-fill"></i>
            <p>
              {card?.info?.avgRating} • {card?.info?.sla?.slaString}
            </p>
          </div>
          <div id="cuisines" className="text-base text-zinc-500 font-normal">
            {String(card?.info?.cuisines.join(" ")).length > 33
              ? String(card?.info?.cuisines.join(" ")).substring(0, 33) +
                "..."
              : card?.info?.cuisines?.join(" ")}
          </div>
          <div id="location" className="text-base text-zinc-500 font-normal">
            {card.info.areaName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head3items;
