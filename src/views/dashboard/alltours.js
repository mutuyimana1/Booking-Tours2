import React from "react";
import {Table,Space } from "antd";
import "antd/dist/antd.css";
import {EyeOutlined, EditOutlined,DeleteOutlined} from '@ant-design/icons';
import Alltourssvsilsble from "../../assets/constant/tours.json";
import UserContent from "../../assets/constant/user.json";
const column =[
    {
        title:"title",
        dataIndex:"title",
        key:"title"
    },
    {
        title:"date Scheduled",
        dataIndex:"dateScheduled",
        key:"dateScheduled"
    },
    {
        title:"seats",
        dataIndex:"seats",
        key:"seats"
    },
    {
        title:"price",
        dataIndex:"price",
        key:"price"
    },
    {
        title:"action",
        dataIndex:"action",
        render: (text, record)=>(
            <Space size="middle">
                <a><EyeOutlined/></a>
                <a><EditOutlined/></a>
                <a><DeleteOutlined/></a>
            </Space>
        )
    
    },
]
const columnTwo=[
     {
        title:"First Name",
        dataIndex:"first-name",
        key:"first-name"
    },
    {
        title:"Second Name",
        dataIndex:"second-name",
        key:"second-name"
    },
    {
        title:"Email",
        dataIndex:"email",
        key:"email"
    },
    {
        title:"Address",
        dataIndex:"address",
        key:"address"
    },
    {
        title:"Telephone",
        dataIndex:"telephone",
        key:"telephone"
    },
    {
        title:"action",
        dataIndex:"action",
        render: (text, record)=>(
            <Space size="middle">
                <a style={{color:'green'}}>Accept</a>
                <a style={{color:'red'}}>Decline</a>
                
            </Space>
        )
    
    },
]
const AllTours=()=>{
    return(
        <>
        <h2>AllTours</h2>
        <Table columns={column} dataSource={Alltourssvsilsble}/>
        <h3>AllUsers</h3>
        <Table columns={columnTwo} dataSource={UserContent}/>
       </>

    )
}
export default AllTours;