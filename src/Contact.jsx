// Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/Contact.css";
import { TwitterOutlined, GithubOutlined } from '@ant-design/icons/lib/icons'
import { Row, Button, Space } from 'antd';

const Contact = () => {
  return (
    <div className='links'>
      <h2>Contact</h2>
      <h4>Twitter</h4>
      <Row justify="center" align="middle">
        <div>
          <Space wrap>
          <Button key="yuh2253" icon={<TwitterOutlined />} href="https://x.com/yuh2253" target="_blank">
              @yuh2253(本垢)
          </Button>
          <Button key="mald_y" icon={<TwitterOutlined />} href="https://x.com/mald_y" target="_blank">
              @mald_y(趣味垢)
          </Button>
          </Space>
        </div>
      </Row>
      <h4>Github</h4>
      <Row justify="center" align="middle">
        <div>
          <Button key="h-yki" icon={<GithubOutlined />}>
            <Link to="https://github.com/h-yki" target='_blank'>
              h-yki
            </Link>
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default Contact;
