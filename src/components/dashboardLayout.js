import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './dashlayout.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { whileStatement } from '@babel/types';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
const { Header, Sider, Content } = Layout;
const DashboardLayout=({children})=>{
    const [collapsed ,setCollapsed]=useState(false);
    const toggle=()=>{
        setCollapsed(!collapsed)
    }
    return(
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/dash/newtour" style={{fontSize:'20px'}}>Create Tour</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/dash/alltour"  style={{fontSize:'18px'}} > Manage All Tour</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}onClick={()=>
            localStorage.removeItem("userLogedIn")}>
             <Link to="/home"style={{fontSize:'25px'}} >Logout</Link>
            </Menu.Item>
          </Menu>
          <Link to="/home" style={{textAlign:'center', color:'white'}}><HomeOutlined/> home</Link>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
              
            })}
            
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 84,
              minHeight: 680,
              
            
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>

    )
}
export default DashboardLayout;