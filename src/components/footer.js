import React from "react";
import "./footer.css";
import { LinkedinOutlined ,FacebookOutlined, WhatsAppOutlined  } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="footer1">
    <div className="footer">
    <div className="our-service">
      <h2>Follow Us On</h2>
      <p style={{padding:"40px", paddingLeft:"30px"}}><LinkedinOutlined/> <FacebookOutlined /><WhatsAppOutlined /></p>
     
    </div>
    <div className="our-service">
    <h2>Our vision</h2>
       <p> To elevate Minnesota as a premier  innovative destination marketing</p><p> travel destination through results-driven,</p>
       
    </div>
    <div className="our-service">
      <h2>Our Services</h2>
      <p>
        <li>Tours</li>
        <li>Chamble</li>
        <li>Traditional show</li>
        
      </p>
    </div>
    <div className="our-service">
      <h2>Our Values</h2>
      <p>
        <li>Consistency</li>
        <li>Honesty</li>
        <li>Commitment</li>
        
      </p>
    </div>
    <div className="our-service">
      <h2>Address</h2>
      <p>mail: yi@gmail.com</p>
      <p> Tel: 0733880674</p>
      <p> street, kigali,597</p>

    </div>
    </div>
    <div className="copyright">
      <hr/>
    <p> &copy; M.Alice</p>
    <hr/>
    </div>
  </div>
    
    

  
  );
};
export default Footer;
