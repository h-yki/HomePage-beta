import React from 'react';
import { Typography, Divider, Table } from 'antd'; 
import { Events_2021, Events_2022, Events_2023, Events_2024, Events_2025, Events_2026 } from '../Data/EventDataBase';
import "../styles/Eventlog.css"

const { Text } = Typography;

const columns = [
  {
    title: 'とき',
    dataIndex: 'date',
    key: 'date',
    width: '20%',
  },
  {
    title: '公演名',
    dataIndex: 'performance',
    key: 'performance',
    width: '50%',
  },
  {
    title: 'ところ',
    dataIndex: 'place',
    key: 'place',
    width: '30%',
  },
];

const Eventlog = () => {
  return (
    <>
    <h2>Event Log</h2>
    <Divider orientation="center"><Text strong>これまでに行ったイベント</Text></Divider>
    <div className="2026" id='2026'>
      <Divider orientation="left">2026年 ({Events_2026.length}現場)</Divider>
      <Table columns={columns} dataSource={Events_2026} pagination={false} showHeader={false} />
    </div>
    <div className="2025" id='2025'>
      <Divider orientation="left">2025年 ({Events_2025.length}現場)</Divider>
      <Table columns={columns} dataSource={Events_2025} pagination={false} showHeader={false} />
    </div>
    <div className="2024" id='2024'>
      <Divider orientation="left">2024年 ({Events_2024.length}現場)</Divider>
      <Table columns={columns} dataSource={Events_2024} pagination={false} showHeader={false} />
    </div>
    <div className="2023" id='2023'>
      <Divider orientation="left">2023年 ({Events_2023.length}現場)</Divider>
      <Table columns={columns} dataSource={Events_2023} pagination={false} showHeader={false} />
    </div>
    <div className="2022" id='2022'>
      <Divider orientation="left">2022年 ({Events_2022.length}現場)</Divider>
      <Table columns={columns} dataSource={Events_2022} pagination={false} showHeader={false} />
    </div>
    <div className="2021" id='2021'>
      <Divider orientation="left">2021年 ({Events_2021.length}現場)</Divider>
      <Table columns={columns} dataSource={Events_2021} pagination={false} showHeader={false} />
    </div>
    </>
  );
};

export default Eventlog;