import React,{useState} from "react";
import HomeLayout from "../components/home-layout";
import bridge from "../assets/images/bridge.jpeg";
import SingleTours from "./single-tour";
import {Drawer} from "antd";
import "antd/dist/antd.css";

const Tourcard =({data})=>{
    const [drawerVisible, setDrawerVisible]= useState(false);
    const handclickDrawerVisible=()=>{
        setDrawerVisible(true)
    }
    const closeDrawerVisible=()=>{
        setDrawerVisible(false)
    }
    return(
    <>
        <Drawer title="More Description" placement="left" visible={drawerVisible} width={720} onClose={closeDrawerVisible}>
            <SingleTours data={data}/>

        </Drawer>
        
        <div className="card">
            <div className="image-side">
                <img src={data.images[0]}></img>

            </div>
            <div className="details">
                <h2 onClick={()=>handclickDrawerVisible()}>  {data.title}</h2>
                <p>{data.description}</p>
                     <h3>{data.dateScheduled}</h3>
                     <div className="bottom">
                     <h3>Available seats: 15/50</h3>
                     <p onClick={()=>handclickDrawerVisible()} >Read More...</p>
                     </div>
        
        </div>
        </div>
        </>
    )
}
export default Tourcard;