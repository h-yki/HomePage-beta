import React from 'react';
import "../styles/About.css";
import { List, Divider, Typography } from 'antd';

const { Text } = Typography;

const syozoku = [
  "筑波大学大学院 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム (2025.04~)",
  "Edge Computing Lab (2024.04~)",
  "筑波大学 情報学群 情報科学類 (2021.04 ~ 2025.03)",
];
const interest = [
  "コンピュータアーキテクチャ",
  "データ通信,伝送",
  "女性声優",
];
const resarch = [
  "ストリームデータロスレス圧縮アルゴリズムに関連する研究",
  "画像/映像データのCNNを用いた高効率圧縮に関する研究",
  "GPUを用いた並列計算による圧縮の高速化に関する研究",
];
const lang = [
  "日本語",
  "C/C++",
  "JavaScript/TypeScript",
  "Python"
];
const experience = [
  "筑波大学 enPiT2 参加 (2023年度, 2025年度)",
  "アジャイル形式によるチーム開発",
  "Reactを用いたWebアプリ開発",
  "基本的なGitの操作",
  "Pythonを用いた大規模データ処理/統計解析",
  "Arduinoを用いた小規模な組み込み開発",
  "「EdgeTech+ WEST 2024 @グランフロント大阪」出展",
  "「EdgeTech+ 2024 @パシフィコ横浜展示ホール」出展",
  "国内共同研究/共同開発",
  "海外大学との共同研究",
  "「EdgeTech+ WEST 2025 @グランフロント大阪」出展",
  "「EdgeTech+ 2025 @パシフィコ横浜展示ホール」出展",
  "BDXCS@HPCAsia2026 論文発表",
];
const pepar = [
  {
    title: "Parallelising Stream-based Lossless Data Compression on GPUs and CPUs",
    url: "https://dl.acm.org/doi/10.1145/3784828.3784829"
  }
]
const qualification = [
  "学士（情報科学）",
  "普通自動車第一種運転免許",
]
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
    <Divider orientation="left"><Text strong>Pepar</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={pepar}
      renderItem={(item) => (
        <List.Item>
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer">
            {item.title}
          </a>
        </List.Item>
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
    <Divider orientation="left"><Text strong>Qualification</Text></Divider>
    <List
      size='large'
      bordered
      dataSource={qualification}
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
