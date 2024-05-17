// evevtlog.js
import React from 'react';
import { Typography, List, Divider } from 'antd'; 
import "./styles/Eventlog.css"

const { Text } = Typography;

const data1 = [
  "2021-07-04「Nanasuta 7-I-V-E-!!」@ぴあアリーナMM",
  "2021-11-28 DIALOGUE+ 1stTour「DIALOGUE+1」東京公演 @TokyoDomeCityHall",
];

const data2 = [
  "2022-05-01 CUE! 3rd Party「Start a new line」昼夜公演 @立川ステージガーデン",
  "2022-06-05 DIALOGUE+「ワンマン」@新宿文化センター",
  "2022-07-17「SPARK2022 in YAMANAKAKO」@山中湖交流プラザきらら",
  "2022-08-07「TIF2022」@お台場青海エリア周辺",
  "2022-10-01「CUE! 1on1お話し会」守屋亨香 @都内某所",
  "2022-10-09 DIALOGUE+ LIVE 2022「Puzzle」東京公演 @立川ステージガーデン",
  "2022-11-19 CUE! 4th Party「Forever Friends」@パシフィコ横浜国立大ホール",
];

const data3 = [
  "2023-02-05 DIALOGUE+ Zepp tour 2023「Superday |Longitude|」東京公演 @Zepp DiverCity",
  "2023-03-19「DIALOGUE+ 1on1お話し会」守屋亨香 @都内某所",
  "2023-04-19「玉ねぎ食べるぞツアー」東京公演 @Zepp DiverCity",
  "2023-05-14「Voice+ Vol.5 特典お渡し会」守屋亨香 @秋葉原ゲーマーズ",
  "2023-06-17「DIALOGUE+2 コンプリート!!」@山野ホール",
  "2023-06-17「DIALOGUE+BOX THE LIVE!」@山野ホール",
  "2023-07-15「SPARK2023 in YAMANAKAKO」@山中湖交流プラザきらら",
  "2023-08-20 DIALOGUE+「SUMMER LIVE」夜公演 @新宿文化センター",
  "2023-10-29 DIALOGUE+新曲披露ワンマン「フレンドファンファーレ~ミテカラキク~」@さいたま市文化センター",
  "2023-11-12「守屋亨香 ファン感謝祭」@昭和ふるさと村",
  "2023-12-10 DIALOGUE+新曲披露ワンマン「フレンドファンファーレ~キイテカラミル~」@群馬音楽センター",
];

const data4 = [
  "2024-01-07 DIALOGUE+ LIVE 2024「LIFE is EASY?」@パシフィコ横浜国立大ホール",
  "2024-03-30 DIALOGUE+ ログっ子感謝祭「ログ×ギグ」@府中の森芸術劇場どりーむホール",
  "2024-03-30「DIALOGUE+BOX THE LIVE! vol.2」@府中の森芸術劇場どりーむホール",
  "2024-05-07 SOVA Presents「APPLESEED」@恵比寿LIQUIDROOM",
  "2024-05-12 DIALOGUE+ 5th Anniversary Tour「DIALOGUE+学概論」愛知公演 @Nittera日本特殊陶業市民会館フォレストホール",
];

const Eventlog = () => {
  return (
    <>
    <h2>Event Log</h2>
    <Divider orientation="center"><Text strong>これまでに行ったイベント</Text></Divider>
    <Divider orientation="left">2021</Divider>
    <List
      size='large'
      bordered
      dataSource={data1}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left">2022</Divider>
    <List
      size='large'
      bordered
      dataSource={data2}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left">2023</Divider>
    <List
      size='large'
      bordered
      dataSource={data3}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    <Divider orientation="left">2024</Divider>
    <List
      size='large'
      bordered
      dataSource={data4}
      renderItem={(item) => (
        <List.Item>{item}</List.Item>
      )}
      style={{marginBottom:"30px", backgroundColor:"white"}}
    />
    </>
  );
};

export default Eventlog;