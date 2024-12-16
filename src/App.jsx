import React,{useState} from 'react';
import Keys from './components/calculater/AllKeys.jsx';
import './App.css';

const App=()=>{

  const [input,setInput]=useState("");

  let changeValue=(value)=>{
    setInput(input+value);
  }
  let changeResult=()=>{
    let valuate=eval(input);
    setInput(valuate);
  }
  let clearResult=()=>{
    setInput("");
  }

  return (
    <div className='container'>
      <h1>RAHUL'S CALCULATOR</h1>
      <div>
        <input className='input' value={input} type="text" />
        <Keys changeValue={changeValue} clearResult={clearResult} changeResult={changeResult} />
      </div>
    </div>
  )
}
export default App