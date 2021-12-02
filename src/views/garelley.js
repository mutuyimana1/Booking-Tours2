import React from "react";
import "./home.css";
import pool from "../assets/images/pool.jpg";
import bridge from "../assets/images/bridge.jpeg";
import mexico from "../assets/images/mexico.jpg";
import sailling from "../assets/images/sailling.jpg";
import paathway from "../assets/images/paathway.jpg";
import bridge2 from "../assets/images/bridge2.jpg";

import HomeLayout from "../components/home-layout";
const AboutUs =()=>{
    return(
    <HomeLayout>
            <div className="slide-container">
                    <div className="slide1">

                    </div>
                    <div className="slide2">

        <div className="slideset6">
            <div>
                <h1>pool (swimming is our hobby)</h1>
                <p> <img src ={pool}></img></p>
                <p> </p>
             
        </div>
         <div>
                <h1></h1>
                        <p><img src ={mexico}></img>
                        </p>
                <p>beauty mexica</p>
               
        </div> 
        <div>
                <h1>paathway any whre</h1>
                        <p><img src ={paathway}></img></p>
                <p></p>
               
        </div>
        
        </div>
        
        </div>
        </div>
        <div style={{display:"flex", margin:"20px", backgroundColor:"gray", height:"80vh"}}>
<div className="image">

<p style={{fontSize:"30px", textAlign:"center", padding:"90px", color:"red"}}>one image</p>

</div>
<div className="image2">

<p style={{fontSize:"30px", textAlign:"center", padding:"90px", color:"red"}}>2nd image</p>

</div>
</div>
  

    </HomeLayout>
    )

}
export default AboutUs;