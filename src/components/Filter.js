import { filterData } from "../data";

export default function Filter(props){
    // const filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;
    // console.log(filterData);
    function categoryHandler(title){
        setCategory(title);
    }
    return (
        <>
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center ">{
        filterData.map((data)=>
            <button  className={`text-lg px-2 py-1 rounded-md font-medium text-white
            bg-black hover:bg-opacity-50 border-2  transition-all duration-300 ${category===data.title?
                "bg-opacity-60 border-slate-500":"bg-opacity-40 border-transparent"}`}
            key={data.id}
            onClick={()=> categoryHandler(data.title)}
            >{data.title}</button>
        )
        }
        </div>
        </>
    );
}

