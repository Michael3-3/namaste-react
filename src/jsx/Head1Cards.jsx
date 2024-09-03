const Head1Cards = (prop) => {
  return (
    <div className="min-w-[144px] min-h-[180px] snap-start cursor-pointer flex  mr-8">
        <img className=" " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+prop.card.imageId} alt="" />
    </div>
  )
}

export default Head1Cards;