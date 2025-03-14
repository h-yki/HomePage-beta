import React from 'react';
import "../styles/About.css";
import { List, Divider, Typography } from 'antd';

const { Text } = Typography;

const syozoku = [
  "筑波大学大学院 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム (予定)",
  "Edge Computing Lab (2024.04~)",
  "筑波大学 情報学群 情報科学類 (2021.04 ~ 2025.03)",
];
const interest = [
  "コンピュータアーキテクチャ",
  "組み込み開発",
  "女性声優",
];
const resarch = [
  "ストリームデータロスレス圧縮に関する研究"
];
const lang = [
  "日本語",
  "C/C++",
  "JavaScript/TypeScript",
  "Python"
];
const experience = [
  "アジャイル形式によるチーム開発",
  "Reactを用いたWebアプリ開発",
  "基本的なGitの操作",
  "Pythonを用いた大規模データ処理/統計解析",
  "Arduinoを用いた小規模な組み込み開発",
  "「EdgeTech+ WEST 2024 @グランフロント大阪」出展",
  "「EdgeTech+ 2024 @パシフィコ横浜展示ホール」出展",
  "他大学との共同研究/共同開発",
];
const fav = [
  "声優ユニットDIALOGUE+を推しています",
  "DJ現場にもよく足を運びます",
  "音楽を聴いて沢山動きます"
]

const About = () => {
  return (
    <>
    <div className='aboutme'>
    <h2>About</h2>
    <Divider orientation="left"><Text strong>Belong to</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={syozoku}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>Interest</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={interest}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>Resarch</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={resarch}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>Experience</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={experience}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>Languages</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={lang}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left"><Text strong>Others</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={fav}
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
