import React, { useState, useEffect } from "react";
import { Select, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import "./index.css";
import { SearchOutlined } from '@ant-design/icons';
import Axios from "axios"
import ListTwitter from "../ListTwitter/ListTwitter";

function TwitterForm (){
    const [loading, setLoading] = useState(false)
    const [twitter, setTwitter] = useState([])
    const { Option } = Select;
    const [hashtag, setHashtag] = useState("")
    const [count, setCount] = useState("")
    console.log('hashtag', hashtag);
    console.log('count', count);
    useEffect(() => {
      document.title = "Twitter search"
    })

    const handleSearchTwitter = async () => {
       
        SearchTwitter(hashtag, count)
        
      }
const SearchTwitter = async(hashtag, count) => {
  try {
              setLoading(true)
  const result = await Axios.get(
    "https://social-analytics-api.comwork.io/v1/tweets?as_array=true&hashtag=%23"+hashtag+"&count="+count
  )
    console.log(result.data.reverse())
    setTwitter(result.data.reverse())
    console.log("twitter", twitter)
    setLoading(false)
            } catch (e) {
              console.log("error")
              setLoading(false)
}}
    
    return (
        <div className="app">
            <h1>Twitter search</h1>
            <label>Hashtag :</label>
            &nbsp;
            <Input className="input" placeholder="Hashtag" value={hashtag} onChange={(e) => setHashtag(e.target.value)} />
  &emsp;
  <label>Count :</label>
  &nbsp;
  <Select
    showSearch
    style={{ width: 100 }}
    optionFilterProp="children"
    onChange={(value) => setCount(value)}
  >
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="10">10</Option>
    <Option value="50">50</Option>
    <Option value="100">100</Option>
  </Select>
  &nbsp;
  <Button type="primary" onClick={handleSearchTwitter} icon={<SearchOutlined />}>
      Search
    </Button>
    <br/>
    <br/>
    <br/>
    {loading ? (
        <div>Loading ... </div>
      ) : (
        <ListTwitter twitter={twitter} />
        )}
        </div>
    );
};

export default TwitterForm;