import React from "react";
import "./home.css"
import Header from "../components/header";
import Footer from "../components/footer";
import HomeLayout from "../components/home-layout";
import fly from "../assets/images/fly-removebg-preview.png";
import pool from "../assets/images/pool.jpg";
import linked from "../assets/images/linked.png";

// import { faInstagram} from "@fortawesome/free-solid-svg-icons";
// import { faLinkeIn} from "@fortawesome/free-solid-svg-icons";
const Home=()=>{
    return(
       <HomeLayout>
           <div className="sub-container">
               <h1>Rwanda Booking Tours</h1>
               <div className="quates">
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                   Tempora recusandae amet veniam cupiditate esse ullam,<br></br>
                   rem facere doloribus.
                 Perspiciatis tempora officiis inventore porro!<br></br>
                  Quisquam rem quae quia quas dolorum incidunt.

                   </p>
                   <button>Book Now !</button>
               </div>
           </div>
           <div className="tour-section-container">
               <div style={{width:'80%',height:'10vh', marginLeft:'100px', display:'flex'}}>
               <div style={{width:'30%',height:'20%', backgroundColor:"grey",marginLeft:'200px',marginTop:'100px'}}></div>
               <div style={{width:'20%',height:'20%', backgroundColor:"gray",marginLeft:'80px',marginTop:'100px'}}></div>
               <div style={{width:'30%',height:'20%', backgroundColor:"gray",marginLeft:'80px',marginTop:'100px'}}></div>
               </div>
               </div>
               <div className="book-sort-div">
                   <div className="book-sort">
               
                       <h2>Book Your Tour</h2>
                       <label for="Category"> Tour Category</label> <br/>
                    <select id="Category">
                        <option value="forest">Forest</option>
                        <option value="Park">Park</option>
                        <option value="River">River</option>
                        <option value="Lake">Lake</option>
                    </select> <br></br>
                    <label for="Category"> Tour Location</label> <br/>
                    <select id="Category">
                        <option value="forest">Kayonza</option>
                        <option value="Park">Musanze</option>
                        <option value="River">Nyanza</option>
                        <option value="Lake">Rubavu</option>
                    </select>
                    <button>Search Tour</button>
                    </div>
                    <div class="img">
                        <img src ={fly}></img>

                    </div>
                  

                   

        
                    </div>
               

            
       </HomeLayout> 

    )
}

export default Home;