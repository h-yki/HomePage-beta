import React from 'react';
import "../styles/About.css";
import { List, Divider, Typography } from 'antd';

const { Text } = Typography;

const syozoku = [
  "Edge Computing Lab (2024.04~)",
  "ソフトウェアサイエンス主専攻 (2023.04~)",
  "筑波大学 情報学群 情報科学類 (2021.04~)",
];
const interest = [
  "コンピュータアーキテクチャ",
  "ハードウェアロジック",
  "組み込み開発",
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
  "基本的なGitの操作",
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
    <Divider orientation="left"><Text strong>その他</Text></Divider>
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
