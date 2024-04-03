import React from "react";


const Filter = (props: any) => {
    // console.log(props);
    let category = props.category;
    let setCategory = props.setCategory;
    let filterData = props.filterData;
    console.log(filterData)
    function filterHandler(title: any) {
        setCategory(title);
        console.log(title);
    }
    filterData.map((data:any)=>{
        console.log(data.title)
    })
    console.log(category)
    return (
        <div className="w-11/12 flex flex-col flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-start">
            
            {filterData.map((data: any) => {
                return (
                    <button
                        className={`w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 hover:border-sky-500 duration-300
              ${category === data.title
                                ? "bg-opacity-60 border-sky-500"
                                : "bg-opacity-40 border-transparent"
                            }
            `}
                        key={data.id}
                        onClick={() => filterHandler(data.title)}
                    >
                        {data.title}
                    </button>)
            })}
        </div>
    );
};

export default Filter;
