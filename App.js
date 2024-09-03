var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$reactdomclient = require("react-dom/client");
require("remixicon/fonts/remixicon.css");
var $9WItx$reactrouterdom = require("react-router-dom");
var $9WItx$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





const $cbf7bd982ca3e6d7$var$rawdata = {
    logo: "https://play-lh.googleusercontent.com/4OOU73CI8knF4TByikeCEA1IOj3hb_AyXdV0Y2_XNikAoVan257QCO0ppXK9e3Z1ncY=w240-h480-rw",
    states: [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "UttaPradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"
    ]
};
const $cbf7bd982ca3e6d7$export$264478b3855cb34e = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5057232&lng=80.049922&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
var $cbf7bd982ca3e6d7$export$2e2bcd8739ae039 = $cbf7bd982ca3e6d7$var$rawdata;




const $0240b0948235e1da$var$SlideBar = ({ handleToggle: handleToggle })=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "h-screen top-0 left-0 w-1/3 bg-white z-50 fixed",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                id: "close",
                onClick: ()=>{
                    handleToggle(false);
                },
                className: "fixed top-7 left-7",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                    class: "ri-close-large-line"
                })
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                id: "location",
                className: "mt-24 m-10",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    id: "locSearch",
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                        type: "text",
                        name: "location",
                        id: "",
                        placeHolder: "Search for area, street name..",
                        className: "border-[1px] p-5 border-zinc-400 w-80 h-10 rounded-md shadow-lg appearance-none focus:shadow-slate-600 "
                    })
                })
            })
        ]
    });
};
var $0240b0948235e1da$export$2e2bcd8739ae039 = $0240b0948235e1da$var$SlideBar;



const $e09cfe1914e4728f$var$Nav = ()=>{
    const [openSidebar, setSidebar] = (0, $9WItx$react.useState)(false);
    const handleToggle = ()=>{
        setSidebar(!openSidebar);
    };
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "w-full h-20 pl-20 pr-28 bg-slate-50 flex justify-between items-center gap-10",
        children: [
            openSidebar ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $0240b0948235e1da$export$2e2bcd8739ae039), {
                handleToggle: handleToggle
            }) : null,
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                id: "logo",
                className: "h-20 flex items-center hover:scale-125 ease-in-out duration-200 justify-center",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("svg", {
                    height: "80",
                    viewBox: "-7.3 3.6 2520.1 3702.8",
                    width: "35",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("path", {
                        d: "m1255.2 3706.3c-2.4-1.7-5-4-7.8-6.3-44.6-55.3-320.5-400.9-601.6-844.2-84.4-141.2-139.1-251.4-128.5-279.9 27.5-74.1 517.6-114.7 668.5-47.5 45.9 20.4 44.7 47.3 44.7 63.1 0 67.8-3.3 249.8-3.3 249.8 0 37.6 30.5 68.1 68.2 68 37.7 0 68.1-30.7 68-68.4l-.7-453.3h-.1c0-39.4-43-49.2-51-50.8-78.8-.5-238.7-.9-410.5-.9-379 0-463.8 15.6-528-26.6-139.5-91.2-367.6-706-372.9-1052-7.5-488 281.5-910.5 688.7-1119.8 170-85.6 362-133.9 565-133.9 644.4 0 1175.2 486.4 1245.8 1112.3 0 .5 0 1.2.1 1.7 13 151.3-820.9 183.4-985.8 139.4-25.3-6.7-31.7-32.7-31.7-43.8-.1-115-.9-438.8-.9-438.8-.1-37.7-30.7-68.1-68.4-68.1-37.6 0-68.1 30.7-68.1 68.4l1.5 596.4c1.2 37.6 32.7 47.7 41.4 49.5 93.8 0 313.1-.1 517.4-.1 276.1 0 392.1 32 469.3 90.7 51.3 39.1 71.1 114 53.8 211.4-154.9 866-1135.9 1939.1-1172.8 1983.8z",
                        fill: "#fc8019"
                    })
                })
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                id: "loc-holder",
                onClick: ()=>{
                    handleToggle(true);
                },
                className: "flex gap-3 cursor-pointer items-center",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        id: "loc-link",
                        className: "border-b-2 border-black font-medium text-sm",
                        children: "Others"
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        id: "location",
                        className: "text-xs font-normal",
                        children: [
                            (0, $cbf7bd982ca3e6d7$export$2e2bcd8739ae039).states[0],
                            "... ",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "ri-arrow-down-s-line"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                id: "links",
                className: "flex  gap-12 justify-between",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "cursor-pointer hover:border-black border-b-2 ease-in-out duration-200 hover:text-orange-600 hover:scale-110",
                        id: "corporate",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "ri-shopping-bag-line"
                            }),
                            "Swiggy Corporate"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "cursor-pointer hover:border-black border-b-2 ease-in-out duration-150 hover:text-orange-600 hover:scale-110",
                        id: "nav-search",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "ri-search-line"
                            }),
                            "Search"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "cursor-pointer hover:border-black border-b-2 ease-in-out duration-150 hover:text-orange-600 hover:scale-110",
                        id: "nav-offers",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "ri-discount-percent-line"
                            }),
                            "Offers"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "cursor-pointer hover:border-black border-b-2 ease-in-out duration-150 hover:text-orange-600 hover:scale-110",
                        id: "nav-help",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "ri-question-line"
                            }),
                            "Help"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "cursor-pointer hover:border-black border-b-2 ease-in-out duration-150 hover:text-orange-600 hover:scale-110",
                        id: "sign-in",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "ri-user-line"
                            }),
                            "Sign In"
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "cursor-pointer hover:border-black border-b-2 ease-in-out duration-150 hover:text-orange-600 hover:scale-110",
                        id: "cart",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "ri-shopping-cart-line"
                            }),
                            "Cart"
                        ]
                    })
                ]
            })
        ]
    });
};
var $e09cfe1914e4728f$export$2e2bcd8739ae039 = $e09cfe1914e4728f$var$Nav;






const $8727324251db2ef8$var$ResHead = ({ info: info })=>{
    console.log(info);
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "w-full  mt-6 p-3 border-[.5px]  border-slate-600  shadow-xl shadow-zinc-500 rounded-3xl",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                id: "rating",
                className: "tracking-tight font-bold text-lg",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                        className: "text-green-600 ri-star-smile-fill"
                    }),
                    info.avgRatingString,
                    " (",
                    info.totalRatingsString,
                    ") \u2022",
                    " ",
                    info.costForTwoMessage
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                id: "cuisines",
                className: " text-red-500 text-base tracking-tight font-bold underline",
                children: info.cuisines.join(", ")
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                id: "outlet",
                className: "pt-5",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                        className: "ri-guide-fill text-orange-700"
                    }),
                    " ",
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                        className: "font-semibold tracking-tight",
                        children: "Outlet"
                    }),
                    " ",
                    info.areaName,
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "pt-5 font-semibold tracking-tight",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                className: "font-normal ri-timer-line text-orange-600 "
                            }),
                            " 20-25 min"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                id: "offers",
                className: "text-zinc-500 pt-5",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                        className: "ri-riding-line text-xl"
                    }),
                    " \xa0 Order above 149 for discounted delivery fee"
                ]
            })
        ]
    });
};
var $8727324251db2ef8$export$2e2bcd8739ae039 = $8727324251db2ef8$var$ResHead;



const $8c37999a51b7a4cf$var$Restaurant = ()=>{
    const { id: id } = (0, $9WItx$reactrouterdom.useParams)();
    console.log(id);
    const [info, setInfo] = (0, $9WItx$react.useState)(null);
    (0, $9WItx$react.useEffect)(()=>{
        const fetchData = async ()=>{
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.5057232&lng=80.049922&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER");
            const data = await response.json();
            setInfo(data);
        };
        fetchData();
    }, []);
    if (info === null) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
        children: "Loading..."
    });
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "pr-60 p-20 pl-60",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    id: "resName",
                    className: "text-2xl tracking-tight font-bold",
                    children: info?.data?.cards[0]?.card?.card?.text
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    id: "resHead",
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $8727324251db2ef8$export$2e2bcd8739ae039), {
                        info: info?.data?.cards[2]?.card?.card?.info
                    })
                })
            ]
        })
    });
};
var $8c37999a51b7a4cf$export$2e2bcd8739ae039 = $8c37999a51b7a4cf$var$Restaurant;







const $4a86f6f99749d330$var$Head1Cards = (prop)=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        className: "min-w-[144px] min-h-[180px] snap-start cursor-pointer flex  mr-8",
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
            className: " ",
            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + prop.card.imageId,
            alt: ""
        })
    });
};
var $4a86f6f99749d330$export$2e2bcd8739ae039 = $4a86f6f99749d330$var$Head1Cards;


const $a4fab723d57d7ac2$var$Head1 = ()=>{
    // Fetch data from API here
    const [swiggyData, setSwiggyData] = (0, $9WItx$react.useState)(null);
    (0, $9WItx$react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        // Use fetch API to fetch data from SWIGFGY_URL
        // Set the fetched data to swiggyData state
        const data = await fetch((0, $cbf7bd982ca3e6d7$export$264478b3855cb34e));
        const jsonData = await data.json();
        setSwiggyData(jsonData?.data?.cards[0]?.card?.card);
    };
    if (swiggyData === null) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
        children: "loading..."
    });
    const cards = swiggyData.imageGridCards?.info;
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        id: "head1",
        className: "h-64 ml-6 pl-36 pr-36 pt-2 ",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h2", {
                className: "font-extrabold text-2xl pb-4",
                children: [
                    swiggyData.id.replace(/_/g, " "),
                    "?"
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                id: "cards",
                className: "flex items-center justify-evenly overflow-x-scroll snap-none hover:snap-start",
                children: cards.map((card)=>/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $4a86f6f99749d330$export$2e2bcd8739ae039), {
                        card: card
                    }, card.id))
            })
        ]
    });
};
var $a4fab723d57d7ac2$export$2e2bcd8739ae039 = $a4fab723d57d7ac2$var$Head1;






const $cf8297da5f6a1991$var$Head2Cards = (prop)=>{
    const discount = prop.card.info.aggregatedDiscountInfoV3;
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        className: "snap-start w-96 cursor-pointer  gap-3 mr-2 flex hover:scale-95 ease-in-out duration-150",
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            id: "subcard",
            className: "relative",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    className: "h-44 min-w-72 rounded-xl overflow-hidden object-cover gap-3 mr-2",
                    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + prop.card.info.cloudinaryImageId,
                    alt: ""
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    id: "gradient",
                    className: "absolute top-0  w-72 h-44 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-transparent",
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        id: "discount",
                        className: " text-xl absolute bottom-2 left-2 opacity-100 font-extrabold text-white ",
                        children: discount == null ? " " : /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                            children: discount.header + " " + discount.subHeader
                        })
                    })
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    id: "resName",
                    className: "p-3",
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h3", {
                            className: "text-lg tracking-tight font-bold",
                            children: [
                                prop.card.info.name.substring(0, 26),
                                " ",
                                prop.card.info.name.length > 25 ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactjsxruntime.Fragment), {
                                    children: "..."
                                }) : " "
                            ]
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                            id: "rating",
                            className: "flex items-center font-medium gap-2 text-lg",
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                    className: "text-green-600 ri-star-smile-fill"
                                }),
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("p", {
                                    children: [
                                        prop.card.info.avgRating,
                                        " \u2022 ",
                                        prop.card.info.sla.slaString
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                            id: "cuisines",
                            className: "text-base text-zinc-500 font-normal",
                            children: String(prop.card.info.cuisines.join(" ")).length > 33 ? String(prop.card.info.cuisines.join(" ")).substring(0, 33) + "..." : prop.card.info.cuisines.join(" ")
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                            id: "location",
                            className: "text-base text-zinc-500 font-normal",
                            children: prop.card.info.areaName
                        })
                    ]
                })
            ]
        })
    });
};
var $cf8297da5f6a1991$export$2e2bcd8739ae039 = $cf8297da5f6a1991$var$Head2Cards;



const $4f6b17560c61bcad$var$Head2 = ()=>{
    const [swiggyData, setSwiggyData] = (0, $9WItx$react.useState)(null);
    (0, $9WItx$react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        // Use fetch API to fetch data from SWIGFGY_URL
        // Set the fetched data to swiggyData state
        const data = await fetch((0, $cbf7bd982ca3e6d7$export$264478b3855cb34e));
        const jsonData = await data.json();
        setSwiggyData(jsonData?.data?.cards[1]?.card?.card);
    };
    if (swiggyData === null) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
        children: "loading..."
    });
    const cards = swiggyData.gridElements.infoWithStyle.restaurants;
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        id: "Head2",
        className: "h-64 ml-6 static pl-36 pr-36 pt-28 ",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                className: "font-extrabold text-2xl pb-4",
                children: swiggyData.header?.title?.replace(/_/g, " ")
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                id: "cards",
                className: "flex items-center justify-evenl overflow-x-scroll snap-none hover:snap-start",
                children: cards.map((card)=>{
                    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactrouterdom.Link), {
                        to: "/restaurant/" + card.info.id,
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $cf8297da5f6a1991$export$2e2bcd8739ae039), {
                                card: card
                            })
                        ]
                    }, card.info.id);
                })
            })
        ]
    });
};
var $4f6b17560c61bcad$export$2e2bcd8739ae039 = $4f6b17560c61bcad$var$Head2;






const $e8b8bdd542623456$var$Head3items = ({ card: card })=>{
    const discount = card.info.aggregatedDiscountInfoV3;
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        className: "snap-start w-52  cursor-pointer  mr-2 flex hover:scale-95 ease-in-out duration-150",
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    className: "h-32 min-w-52 rounded-xl overflow-hidden object-cover gap-3 mr-2",
                    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + card.info.cloudinaryImageId,
                    alt: card.info.name || "Restaurant Image"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    id: "gradient",
                    className: "absolute top-0  w-52 h-32 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-transparent",
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        id: "discount",
                        className: " text-xl absolute bottom-2 left-2 opacity-100 font-extrabold text-white ",
                        children: discount == null ? " " : /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                            children: discount.header + " " + discount.subHeader
                        })
                    })
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    id: "resName",
                    className: "p-3",
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h3", {
                            className: "text-lg tracking-tight font-bold",
                            children: [
                                card?.info?.name?.substring(0, 26),
                                " ",
                                card?.info?.name?.length > 25 ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactjsxruntime.Fragment), {
                                    children: "..."
                                }) : " "
                            ]
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                            id: "rating",
                            className: "flex items-center font-medium gap-2 text-lg",
                            children: [
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("i", {
                                    className: "text-green-600 ri-star-smile-fill"
                                }),
                                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("p", {
                                    children: [
                                        card?.info?.avgRating,
                                        " \u2022 ",
                                        card?.info?.sla?.slaString
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                            id: "cuisines",
                            className: "text-base text-zinc-500 font-normal",
                            children: String(card?.info?.cuisines.join(" ")).length > 33 ? String(card?.info?.cuisines.join(" ")).substring(0, 33) + "..." : card?.info?.cuisines?.join(" ")
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                            id: "location",
                            className: "text-base text-zinc-500 font-normal",
                            children: card.info.areaName
                        })
                    ]
                })
            ]
        })
    });
};
var $e8b8bdd542623456$export$2e2bcd8739ae039 = $e8b8bdd542623456$var$Head3items;



const $f0b52b4360b7576a$var$Head3 = ()=>{
    const [swiggyData, setSwiggyData] = (0, $9WItx$react.useState)(null);
    (0, $9WItx$react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        try {
            const response = await fetch((0, $cbf7bd982ca3e6d7$export$264478b3855cb34e));
            const jsonData = await response.json();
            // Log the fetched data
            setSwiggyData(jsonData?.data?.cards);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    if (swiggyData === null) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
        children: "Loading..."
    });
    const cards = swiggyData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        id: "Head3",
        className: "absolute top-[850px] h-64 ml-6 pl-36 pr-36 pt-12",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                className: "font-bold text-2xl",
                children: swiggyData[2]?.card?.card?.title
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                id: "cards",
                className: "flex  gap-7 justify-evenly flex-wrap snap-none hover:snap-start",
                children: cards.map((card)=>/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactrouterdom.Link), {
                        to: "restaurant/" + card.info.id,
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $e8b8bdd542623456$export$2e2bcd8739ae039), {
                                card: card
                            })
                        ]
                    }, card.info.id))
            })
        ]
    });
};
var $f0b52b4360b7576a$export$2e2bcd8739ae039 = $f0b52b4360b7576a$var$Head3;



const $a73eaa197016b275$var$Body = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "max-h-full static bg-white",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $a4fab723d57d7ac2$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $4f6b17560c61bcad$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $f0b52b4360b7576a$export$2e2bcd8739ae039), {})
        ]
    });
};
var $a73eaa197016b275$export$2e2bcd8739ae039 = $a73eaa197016b275$var$Body;




class $6db8248359279a6a$var$Class extends (0, ($parcel$interopDefault($9WItx$react))).Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
            className: "",
            children: this.props.name
        });
    }
}
var $6db8248359279a6a$export$2e2bcd8739ae039 = $6db8248359279a6a$var$Class;


// Ensure you're using the correct import for React 18
const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $e09cfe1914e4728f$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Outlet), {})
        ]
    });
};
const $da11a1101b2a894a$var$AppRoute = (0, $9WItx$reactrouterdom.createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$App, {}),
        errorElement: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $e09cfe1914e4728f$export$2e2bcd8739ae039), {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $a73eaa197016b275$export$2e2bcd8739ae039), {})
            },
            {
                path: "/restaurant/:id",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $8c37999a51b7a4cf$export$2e2bcd8739ae039), {})
            }
        ]
    }
]);
// Assuming you are using React 18
const $da11a1101b2a894a$var$root = (0, ($parcel$interopDefault($9WItx$reactdomclient))).createRoot(document.getElementById("root"));
$da11a1101b2a894a$var$root.render(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $6db8248359279a6a$export$2e2bcd8739ae039), {
    name: "michael"
})); // For React 17 and earlier versions, use the following:
 // ReactDOM.render(<Welcome />, document.getElementById('root'));


//# sourceMappingURL=App.js.map
