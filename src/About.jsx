import React from 'react';
import "./styles/About.css";
import { Card, Space } from 'antd';

const About = () => {
  const dividerStyle = {
    fontSize: '1em', // 任意のサイズに調整
    fontWeight: 'bold', // 必要に応じて太さを調整
  };

  return (
    <div className='aboutme'>
      <h2>About</h2>
      <Space direction='vertical'>
        <Card title="所属" style={{width:"100%", zIndex:1}}>
            <p style={dividerStyle}>筑波大学 情報学群 情報科学類 (2021.04~)</p>
            <p style={dividerStyle}>茨城県立日立第一高等学校 (2018.04~2021.03)</p>
        </Card>
        <Card title="興味" style={{width:"100%", zIndex:1}}>
          <p style={dividerStyle}>コンピュータアーキテクチャ</p>
          <p style={dividerStyle}>組み込みソフトウェア開発</p>
          <p style={dividerStyle}>女性声優</p>
        </Card>
        <Card title="言語" style={{width:"100%", zIndex:1}}>
          <p style={dividerStyle}>C/C++</p>
          <p style={dividerStyle}>JavaScript/TypeScript</p>
          <p style={dividerStyle}>Python</p>
        </Card>
        <Card title="経験" style={{width:"100%", zIndex:1, marginBottom:"10px"}}> 
          <p style={dividerStyle}>アジャイル形式によるチーム開発</p>
          <p style={dividerStyle}>Reactを用いたWebアプリ開発</p>
        </Card>
      </Space>
    </div>
  );
};

export default About;
