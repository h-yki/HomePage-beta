import React from 'react';
import "./styles/About.css";

const About = () => {
  return (
    <div className='aboutme'>
      <h2>About</h2>
      <h3 className='schoolhistory'>学歴</h3>
      <ul className='sch'>
        <li>筑波大学 情報学群 情報科学類 (2021.04~)</li>
        <li>茨城県立日立第一高等学校 (2018.04~2021.03)</li>
      </ul>

      <h3 className='in'>興味</h3>
      <ul className='interest'>
        <li>コンピュータアーキテクチャ</li>
        <li>ソフトウェア開発</li>
        <li>人工知能を活用した自動運転技術</li>
      </ul>

      <h3 className='l'>言語-熟練度順</h3>
      <ul className='lang'>
        <li>C</li>
        <li>JavaScript/TypeScript</li>
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
      </ul>

      <h3 className='ex'>経験</h3>
      <ul className='experience'>
        <li>アジャイル形式によるチーム開発</li>
        <li>DBを活用したWebアプリ開発</li>
      </ul>
    </div>
  );
};

export default About;
