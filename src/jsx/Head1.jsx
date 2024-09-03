import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/data";
import HeaderCards from "./Head1Cards";


const Head1 = () => {
  // Fetch data from API here
  const [swiggyData, setSwiggyData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Use fetch API to fetch data from SWIGFGY_URL
    // Set the fetched data to swiggyData state
    const data = await fetch(SWIGGY_URL);
    const jsonData = await data.json();
    setSwiggyData(jsonData?.data?.cards[0]?.card?.card)
  };
  if (swiggyData === null) {
    return <h1>loading...</h1>;
  }

  const cards = swiggyData.imageGridCards?.info;
  return (
    <div id="head1" className="h-64 ml-6 pl-36 pr-36 pt-2 ">
      <h2 className="font-extrabold text-2xl pb-4">
        {swiggyData.id.replace(/_/g, " ")}?
      </h2>
      <div id="cards" className="flex items-center justify-evenly overflow-x-scroll snap-none hover:snap-start">
        {cards.map((card)=>(
          
          <HeaderCards key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
};

export default Head1;
