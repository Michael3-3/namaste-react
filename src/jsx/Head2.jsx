import { useState, useEffect } from "react";
import Head2Cards from "./Head2Cards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Head2 = () => {
  const data = useSelector((state) => state.data);
  const [swiggyData, setSwiggyData] = useState(null);
  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = () => {
    // Use fetch API to fetch data from SWIGFGY_URL
    // Set the fetched data to swiggyData state
    setSwiggyData(data?.data?.cards[1]?.card?.card);
  };
  if (swiggyData === null) {
    return <h1>loading...</h1>;
  }
  const cards = swiggyData.gridElements.infoWithStyle .restaurants;
  return (
    <div id="Head2" className="h-64 ml-6 static pl-36 pr-36 pt-28 ">
      <h2 className="font-extrabold text-2xl pb-4">
        {swiggyData.header?.title?.replace(/_/g, " ")}
      </h2>
      <div
        id="cards"
        className="flex items-center justify-evenl overflow-x-scroll snap-none hover:snap-start">
        {cards.map((card) => {
          return (
            <Link to={"/restaurant/" + card.info.id} key={card.info.id}>{" "}<Head2Cards card={card} /></Link>
          );
        })}
      </div>
    </div>
  );    
};
export default Head2;
