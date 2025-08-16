import { useState, useEffect } from "react";
import ResHead from "./ResHead";
import { useParams } from "react-router-dom";
import RestaurantMenu from "./restaurantMenu";
import PageNotFound from "./PageNotFound";
const Restaurant = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.5057232&lng=80.049922&restaurantId=" +
            id +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const data = await response.json();
        setErr(true);
        setInfo(data);
      } catch (error) {
        console.log(error);
        setErr(false);
      }
    };

    fetchData();
  }, []);

  // if (info === null) {
  //   return <h1>Loading...</h1>;
  // }
  if (info) {
    menuData =
      info?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  }
  return (
    <>
      {err ? (
        <div className="pr-60 p-20 pl-60">
          <div id="resName" className="text-2xl tracking-tight font-bold">
            {info?.data?.cards[0]?.card?.card?.text}
          </div>
          <div id="resHead">
            <ResHead info={info?.data?.cards[2]?.card?.card?.info} />
          </div>
          <div className="mt-10 " id="resMenu">
            {menuData.map((menuCard) => (
              <RestaurantMenu
                key={menuCard?.card?.card?.title}
                menuCard={menuCard}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <PageNotFound />
        </>
      )}
    </>
  );
};

export default Restaurant;
