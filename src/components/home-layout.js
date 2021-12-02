import React from "react";
import "./home-layout.css"
import Header from "./header";
import Footer from "./footer";
const HomeLayout=({children})=>{
    return(
        <div className="home-container">
        <Header></Header>
        <div style={{minHeight:"100%"}}>
        {children}


        </div>
        <Footer></Footer>
        
       
        </div>

    )
}

export default HomeLayout;