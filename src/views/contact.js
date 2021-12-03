import React from "react";
import HomeLayout from "../components/home-layout";
import travel from "../assets/images/poolside.jpg"
import person from "../assets/images/person2-removebg-preview.png"
import allTourData from "../assets/constant/tours.json"
import { InstagramOutlined , LinkedinOutlined,WhatsAppOutlined } from '@ant-design/icons';
const Contact=()=>{
    return(
        <HomeLayout>
        {/* <div class="title">
            <h3>message us here</h3>

 <h1>thank<br/>you!</h1>

 <a target="_blank" href="http://codepen.io/Moslim/" class="white-mode">OTHER PENS</a>
</div> */}
<div className="contact-container">
<div style={{textAlign:'center', fontWeight:'bold'}}>
    <span className="span1">C</span>
    <span className="span2">O</span>
    <span className="span3">N</span>
    <span className="span4">T</span> 
    <span className="span5">A</span>
    <span className="span6">C</span>
    <span className="span7">T</span>
    <span className="span8">U</span>
    <span className="span9">S</span>
    </div>
    <div style={{display:'flex'}}>
        <div className="follow" style={{width:'40%', height:'80vh',backgroundColor:'white', marginLeft:'20px'}}>
<h2 style={{fontSize:'50px'}}>follow us on </h2>
 
<div style={{fontSize:'50px', marginLeft:'30px'}}><a href='https://www.linkedin.com/in/mutuyimana-alice-7b7224187/'><InstagramOutlined /></a><h6>Instagram</h6> <br/> <a href='https://www.instagram.com/accounts/login/'><LinkedinOutlined/></a><h6>LinkedIn</h6><br/><a href='https://www.whatsapp.com/'><WhatsAppOutlined/></a><h6>Whatsap</h6></div>
        </div>
        <div >
<p className="message">
    
    <div className="message-content">
     <h2>leave a message</h2> 
<label>Your Email</label> 
<input placeholder="enter email"></input><br/>
<label>Telephone</label>
<input placeholder="enter phone"></input><br/>
<label>message here</label>
<textarea id="w3review" name="w3review" rows="6" cols="50" placeholder="write message"></textarea>
<button>Submit</button>
</div>
<div className="message-image">
    <img src={person}/>
    
    </div>
</p>
</div>
</div>
</div>

        </HomeLayout>
    )
}
export default Contact;