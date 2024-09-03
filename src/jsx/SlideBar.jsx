import rawdata from "../utils/data";

const SlideBar =({handleToggle})=>{
    return (
        <div className="h-screen top-0 left-0 w-1/3 bg-white z-50 fixed">
            <div id="close" onClick={()=>{handleToggle(false)}} className="fixed top-7 left-7"><i class="ri-close-large-line"></i></div>
            <div id="location" className="mt-24 m-10">
            <div id="locSearch"><input type="text" name="location" id="" placeHolder="Search for area, street name.." className="border-[1px] p-5 border-zinc-400 w-80 h-10 rounded-md shadow-lg appearance-none focus:shadow-slate-600 "/></div>
            </div>
        </div>
    )
}

export default SlideBar;