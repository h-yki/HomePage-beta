import React from 'react';
import "./styles/About.css";
import { List, Divider, Typography } from 'antd';

const { Text } = Typography;

const syozoku = [
  "Edge Computing Lab (2024.04~)",
  "筑波大学 情報学群 情報科学類 (2021.04~)",
  "茨城県立日立第一高等学校 (2018.04~2021.03)",
];
const interest = [
  "コンピュータアーキテクチャ",
  "組み込みソフトウェア開発",
  "女性声優",
];
const lang = [
  "C/C++",
  "JavaScript/TypeScript",
  "Python"
];
const experience = [
  "アジャイル形式によるチーム開発",
  "Reactを用いたWebアプリ開発",
];

const About = () => {
  return (
    <>
    <div className='aboutme'>
    <h2>About</h2>
    <Divider orientation="left"><Text strong>所属</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={syozoku}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>興味</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={interest}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>言語</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={lang}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>経験</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={experience}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    </div>
    </>
  );
};

export default About;
