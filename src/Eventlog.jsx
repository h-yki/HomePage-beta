// evevtlog.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Card } from 'antd'; 
import "./styles/Eventlog.css"

const Eventlog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <Card title='テスト' style={{zIndex:-1}}>
        <p>個人サイトを作った話</p>
      </Card>

    </div>
  );
};

export default Eventlog;