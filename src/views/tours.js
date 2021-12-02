import React from "react";
import Tourcard from "../components/tourcard";
import HomeLayout from "../components/home-layout";
import allTourData from "../assets/constant/tours.json"
const Tours =()=>{
    return(
        <HomeLayout>
            <div className="space">
            <h1>Rwanda Booking Tours</h1>

            </div>
            <div className="tour-container">
                {
                    allTourData.map((data)=>(<Tourcard data={data}/>))
                }

            </div>

        </HomeLayout>
    )
}
export default Tours;