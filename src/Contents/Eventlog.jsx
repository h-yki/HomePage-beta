import React from 'react';
import { Typography, Divider, Table } from 'antd'; 
import { Events_2021, Events_2022, Events_2023, Events_2024 } from '../Data/EventDataBase';
import "../styles/Eventlog.css"

const { Text } = Typography;

const columns = [
  {
    title: 'とき',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '公演名',
    dataIndex: 'performance',
    key: 'performance',
  },
  {
    title: 'ところ',
    dataIndex: 'place',
    key: 'place',
  },
];

const Eventlog = () => {
  return (
    <>
    <h2>Event Log</h2>
    <Divider orientation="center"><Text strong>これまでに行ったイベント</Text></Divider>
    <Divider orientation="left">2021</Divider>
    <div className="2021">
      <Table columns={columns} dataSource={Events_2021} pagination={false} showHeader={false} />
    </div>
    <Divider orientation="left">2022</Divider>
    <div className="2022">
      <Table columns={columns} dataSource={Events_2022} pagination={false} showHeader={false} />
    </div>
    <Divider orientation="left">2023</Divider>
    <div className="2023">
      <Table columns={columns} dataSource={Events_2023} pagination={false} showHeader={false} />
    </div>
    <Divider orientation="left">2024</Divider>
    <div className="2024">
      <Table columns={columns} dataSource={Events_2024} pagination={false} showHeader={false} />
    </div>
    </>
  );
};

export default Eventlog;