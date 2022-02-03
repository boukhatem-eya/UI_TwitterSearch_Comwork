import React from 'react';
import 'antd/dist/antd.css';
import { Table} from 'antd';


function ListTwitter({twitter}){

const columns = [
  {
    title: 'Author',
    dataIndex: '0',
    key: '0',
  },
  {
    title: 'Content',
    dataIndex: '1',
    key: '1',
  },
  {
    title: 'Lng',
    dataIndex: '2',
    key: '2',
  },
  {
    title: 'Timestamp',
    dataIndex: '3',
    key: '3',
  },
];


return(<Table columns={columns} dataSource={twitter} />)
}
export default ListTwitter;