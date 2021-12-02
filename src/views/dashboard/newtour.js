import React from "react";
import DashboardLayout from "../../components/dashboardLayout";
import {Form, Input,DatePicker,Space,Upload,Button, InputNumber} from "antd";
import {UploadOutlined} from '@ant-design/icons';
const NewTourView=()=>{
    const onFinish=(values)=>{
        console.log(values);
    }
    return (
       
            <Form onFinish={onFinish}>
                <Form.Item
                name="title"
                label="Tour Title"
                rules={[{required:true}]}>
                    <Input/>

                </Form.Item>
                <Form.Item
                name="description"
                label="why"
                rules={[{required:true}]}>
                    <Input.TextArea/>

                </Form.Item>
                <Space>
                <Form.Item
                name="dateScheduled"
                label="date Scheduled"
                rules={[{required:true}]}>
                    <DatePicker/>

                </Form.Item>
                <Form.Item
                name="dueDate"
                label="dueDate"
                rules={[{required:true}]}>
                    <DatePicker/>

                </Form.Item>
                </Space>
                <Space>
                <Form.Item
                name="images"
                label="images"
                rules={[{required:true}]}>
                    <Upload>
                        <Button icon={<UploadOutlined/>} style={{width:'150px'}}>Upload image</Button>
                        </Upload>

                </Form.Item>
                <Form.Item
                name="seats"
                label="seats"
                rules={[{required:true}]}>
                    <input/>

                </Form.Item>
                <Form.Item
                name="price"
                label="price"
                rules={[{required:true}]}>
                    <InputNumber/>

                </Form.Item>
                </Space>
                <Form.Item
                name="more"
                label="more about trip"
                rules={[{required:true}]}>
                    <Input.TextArea/>

                </Form.Item>
                <Button htmlType="submit" type="primary" style={{width:'100px'}}>Register</Button>
            </Form>
       
      
    )
}
export default NewTourView;