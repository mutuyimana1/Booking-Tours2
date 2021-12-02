import React, { useState } from "react"
import "./header.css"
import {Modal,Form,Input,Button} from "antd";
import { useNavigate } from "react-router-dom";
import travel from "../assets/images/rwandayacu.jpg"


const Header =()=>{
    const[visible,setVisible]=useState(false);
    const onFinish =(values)=>{
        console.log(values)
        localStorage.setItem("userLogedIn",true)
        navigate("/dash/newtour")
    }
    const navigate=useNavigate();

    return(
        <>
        <Modal
        visible={visible
        }
        onOk={()=> setVisible(false)}
        onCancel={()=> setVisible(false)}
            
            >
                <h2>Signin form</h2>
            <Form onFinish={onFinish}>
                <Form.Item label="Email" name="email" rules={[{required:true,type:"email"}]}>
                    <Input />
                </Form.Item>
                <Form.Item
                label="Passward"
                name="password"
                rules={[{required:true,type:"password"}]}>
                    <Input type="password"/>
                </Form.Item>
                <Button htmlType="submit" onClick={()=>{}}>Login</Button>
            </Form>
         
        </Modal>
        <div className="header-div">
            <div className="logo">
               <img src={travel}/>


            </div>
            <div className="navbar">
                 <a href="/home">Home</a>
                 <a href="/signup">Sign Up</a>
                 <a href="#" onClick={()=>setVisible(true)}>Login</a>
                 <a href="garelley">Garelly</a>
                 <a href="/aboutus">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/tours">Tours</a>
               
                
                
                
               

            </div>

        </div>
</>
    )

}
export default Header;