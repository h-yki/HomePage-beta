// Contact.js
import React from 'react';
import "../styles/Contact.css";
import { TwitterOutlined, GithubOutlined, SpotifyOutlined } from '@ant-design/icons/lib/icons'
import { Row, Button, Space } from 'antd';

const Contact = () => {
  return (
    <div className='links'>
      <h2>Contact</h2>
      <h4>X (旧Twitter)</h4>
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
          <Button key="h-yki" icon={<GithubOutlined />} href='https://github.com/h-yki' target="_blank">
            h-yki
          </Button>
        </div>
      </Row>
      <h4>Spotify</h4>
      <Row justify="center" align="middle" style={{marginBottom:"30px"}}>
        <div>
          <Button key="yuumal" icon={<SpotifyOutlined />} href='https://open.spotify.com/user/19o09qc75t67fyv8ieqhl761b?si=cfJdmmf-RaGZIPaI2O8d5A' target="_blank">
            yuumal
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default Contact;
