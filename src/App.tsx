import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData]=useState({hits:[]});
  const [user,setUser]=useState({results:[]});
  useEffect(()=>{
    const fetchDataHits = async()=>{
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=react-fetch"
        );


        setData(result.data as typeof data)
    }
    fetchDataHits()
    
  },[])
  console.log(data.hits.map((i)=>i.title));
  
  const dataHitsMap = data.hits.map((item)=>(
    <li key={item.objectID}>
      <a href={item.url} rel="noopener noreferrer">{item.title}</a>
    </li>
  ))
  return (
    <div className="App">
      <header className="App-header">
       <ul>
       {dataHitsMap}
       </ul>
      </header>
    </div>
  );
}

export default App;
