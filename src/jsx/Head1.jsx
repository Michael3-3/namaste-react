import { useState, useEffect } from "react";
import HeaderCards from "./Head1Cards";
import { useSelector } from "react-redux";

const Head1 = () => {
  // Fetch data from API here
  const data = useSelector((state) => state.data);
  const [swiggyData, setSwiggyData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Use fetch API to fetch data from SWIGFGY_URL
    // Set the fetched data to swiggyData state
    setSwiggyData(data?.data?.cards[0]?.card?.card)
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
