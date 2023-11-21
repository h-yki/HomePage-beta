// home.js
import React from 'react';
import "./styles/Home.css";

const home = () => {
  return (
    <div className='container'>
      <p><a href='https://x.com/kyoka_moriya' target='_blank' rel='noreferrer'>守屋亨香</a>さんのオタク</p>
      <ul className='follow'>
        <li><a href='https://x.com/yuh2253' target="_blank" rel="noreferrer"></a></li>
        <li><a href='https://github.com/h-yki' target="_blank" rel="noreferrer"></a></li>
      </ul>
    </div>
  );
};

export default home;