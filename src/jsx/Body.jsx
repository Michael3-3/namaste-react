import Head1 from "./Head1";
import Head2 from "./Head2.jsx";
import Head3 from "./Head3.jsx";
import SlideBar from "./SlideBar.jsx";

const Body = () =>{
    return (
       <div className="max-h-full static bg-white">
      <Head1/>
      <Head2/>
      <Head3/>
     </div>
    );
}

export default Body;