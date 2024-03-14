import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'; 

const Header = Layout;

const MainHeader = () => {
  const [selectkey, setSelectkey] = useState(['0']);
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [visible, setVisible] = useState(false);

  const handlekey = () =>{
    setSelectkey(['0']);
  }

  const showDrawer = () =>{
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {!isMobile ? (
        <div>
          <Layout>
            <Header
              style={{
                display: 'flex',
                position: "fixed",
                top: 0,
                zIndex: 1,
                width: "100%",
                height: '50px',
                justifyContent:'space-between',
                alignItems:"center",
              }}
            >
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ minWidth: 0 , width:"100%"}}
                selectedKeys={selectkey}
                onSelect={(item) => setSelectkey([item.key])}
              >
                <div className="logo" style={{justifyContent:"left"}}>
                  <Link to='/' style={{ color: 'white', textDecoration: 'none', marginLeft:'10px', fontSize:"15px", marginRight:"10px" }} onClick={handlekey}>yuumal.dev</Link>
                </div>
                <Menu.Item key="1">
                  <Link to="/About">About</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/eventlog">EventLog</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu>
            </Header>
          </Layout>
        </div> 
        ):(
        <div>
          <Layout>
            <Header
             style={{
              display: 'flex',
              position: "fixed",
              top: 0,
              zIndex: 1,
              width: "100%",
              height: '50px',
              justifyContent:'space-between',
              alignItems:"center",
            }}>
              <div style={{display:'flex', backgroundColor:'#111d2c', width:'100%', flex:'1'}}>
              <div className="logo" style={{justifyContent:"left", marginTop:'13px'}}>
                <Link to='/' style={{ color: 'white', textDecoration: 'none', marginLeft:'10px', fontSize:"15px", marginRight:"15px"}}>yuumal.dev</Link>
              </div>
                <Button icon={<MenuOutlined/>} onClick={showDrawer} style={{float:'right'}}/>
                <Drawer title='yuumal.dev' placement='right' onClose={onClose} open={visible} width='50%' style={{backgroundColor:'#111d2c', color:'white'}}>
                  <p><Link to="/About" onClick={onClose} style={{color:'white', fontSize:'20px'}}>About</Link></p>
                  <p><Link to="/eventlog" onClick={onClose} style={{color:'white', fontSize:'20px'}}>EventLog</Link></p>
                  <p><Link to="/contact" onClick={onClose} style={{color:'white', fontSize:'20px'}}>Contact</Link></p>
                </Drawer>
              </div>
            </Header>
          </Layout>
        </div>
      )}
    </div>
  );
};

export default MainHeader;