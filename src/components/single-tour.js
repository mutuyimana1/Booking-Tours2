import React from "react";
const SingleTours=({data})=>{
    return(
        <div className="singletours-container">
        <h1>{data.title}</h1>
        <img src={data.images[0]}/>
        <p>{data.more}</p>
        </div>
        
    )
}
export default SingleTours;
