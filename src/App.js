import logo from './logo.svg';
import React,{useState,useEffect}from 'react'
import './App.css';

function App() {
  const [data,setData]=useState(" Hello ")
  const[size,setsize]=useState(100)
  const[qr,setqr]=useState( " " )

  useEffect(()=>{
    setqr(`https://api.qrserver.com/v1/create-qr-code/?${size}=150x${size}&data=${data}`)
  },[data,size])

  return (
    <>
     <div>
      <input type="text" value={data} onChange={(e)=>{
        setData(e.target.value)
      }} />
      <br />
      <input type="text" value={size} onchange={(e)=>{
        setsize(e.target.value)
      }} />
     </div>
     <div>
      <img className="qr"src={qr} alt="img" />
     </div>
    </>
  );
}

export default App;
