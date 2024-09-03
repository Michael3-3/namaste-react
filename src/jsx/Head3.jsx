import { useState, useEffect } from 'react';
import { SWIGGY_URL } from '../utils/data';
import Head3items from './Head3items';
import {Link} from 'react-router-dom'
const Head3 = () => {
    const [swiggyData, setSwiggyData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_URL);
            const jsonData = await response.json();
            // Log the fetched data
            setSwiggyData(jsonData?.data?.cards);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    if (swiggyData === null) {
        return <h1>Loading...</h1>;
    }

    const cards = swiggyData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    return (
        <div id="Head3" className="absolute top-[850px] h-64 ml-6 pl-36 pr-36 pt-12">
            <h2 className="font-bold text-2xl">{swiggyData[2]?.card?.card?.title}</h2>
            <div id="cards" className="flex  gap-7 justify-evenly flex-wrap snap-none hover:snap-start">
                {cards.map((card) => (
                   <Link to={'restaurant/'+card.info.id} key={card.info.id}> <Head3items  card={card} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Head3;
