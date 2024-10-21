import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const { Header } = Layout;

const MainHeader = () => {
  const [selectkey, setSelectkey] = useState(['0']);
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [visible, setVisible] = useState(false);

  const handlekey = () => {
    setSelectkey(['0']);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {!isMobile ? (
        <Layout>
          <Header
            style={{
              display: 'flex',
              //position: "fixed",
              top: 0,
              zIndex: 1,
              width: "100%",
              height: '60px',
              justifyContent: 'space-between',
              alignItems: "center",
              backgroundColor:'#001529',
              padding: '0 20px'
            }}
          >
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <Link to='/' style={{ color: 'white', textDecoration: 'none', fontSize: "18px", fontWeight: 'bold' }} onClick={handlekey}>yuumal.dev</Link>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '60px', flex: 1, justifyContent: 'flex-end',}}
              selectedKeys={selectkey}
              onSelect={(item) => setSelectkey([item.key])}
            >
              <Menu.Item key="1">
                <Link to="/About">About</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/eventlog">EventLog</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/contact">Contact</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/Blog">Blog</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      ) : (
        <Layout>
          <Header
            style={{
              display: 'flex',
              //position: "fixed",
              top: 0,
              zIndex: 1,
              width: "100%",
              height: '60px',
              justifyContent: 'space-between',
              alignItems: "center",
              backgroundColor: '#001529',
              padding: '0 10px'
            }}
          >
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <Link to='/' style={{ color: 'white', textDecoration: 'none', fontSize: "18px", fontWeight: 'bold' }}>yuumal.dev</Link>
            </div>
            <Button
              icon={<MenuOutlined style={{ fontSize: '24px' }} />}
              onClick={showDrawer}
              style={{ color: 'white', backgroundColor: 'transparent', border: 'none', marginRight: '10px' }}
            />
            <Drawer
              title={<span style={{ color: 'white' }}>yuumal.dev</span>}
              placement='right'
              onClose={onClose}
              open={visible}
              width='50%'
              closeIcon={<CloseOutlined style={{ color: 'white' }} />}
              style={{ backgroundColor: '#001529', color: 'white' }}
            >
              <p><Link to="/About" onClick={onClose} style={{ color: 'white', fontSize: '20px' }}>About</Link></p>
              <p><Link to="/eventlog" onClick={onClose} style={{ color: 'white', fontSize: '20px' }}>EventLog</Link></p>
              <p><Link to="/contact" onClick={onClose} style={{ color: 'white', fontSize: '20px' }}>Contact</Link></p>
              <p><Link to="/Blog" onClick={onClose} style={{ color: 'white', fontSize: '20px' }}>Blog</Link></p>
            </Drawer>
          </Header>
        </Layout>
      )}
    </div>
  );
};

export default MainHeader;
