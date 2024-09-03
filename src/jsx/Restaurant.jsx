import { useState, useEffect } from "react";
import ResHead from "./ResHead";
import { useParams } from "react-router-dom";

const Restaurant = () => {
    const { id } = useParams();
    console.log(id);
   
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.5057232&lng=80.049922&restaurantId='+id+'&catalog_qa=undefined&submitAction=ENTER');
            const data = await response.json();
            setInfo(data);
        };

        fetchData();
    }, []);

    if (info === null) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="pr-60 p-20 pl-60">

        <div id="resName" className="text-2xl tracking-tight font-bold">
        { info?.data?.cards[0]?.card?.card?.text}
        </div>
        <div id="resHead">
            <ResHead info={info?.data?.cards[2]?.card?.card?.info } />
        </div>
        

            </div>
        </>
    );
}

export default Restaurant;
