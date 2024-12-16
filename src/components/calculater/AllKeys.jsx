import './Keys.css';

const Keys=({changeValue,changeResult,clearResult})=>{
    return (
        <>
         <div className="divcont">
            <button className="digit" onClick={()=>{changeValue("9")}}>9</button>
            <button className="digit" onClick={()=>{changeValue("8")}}>8</button>
            <button className="digit" onClick={()=>{changeValue("7")}}>7</button>
            <button className="operater" onClick={()=>{changeValue("+")}}>+</button>
        </div>
        <div className="divcont">
            <button className="digit" onClick={()=>{changeValue("6")}}>6</button>
            <button className="digit" onClick={()=>{changeValue("5")}}>5</button>
            <button className="digit" onClick={()=>{changeValue("4")}}>4</button>
            <button className="operater" onClick={()=>{changeValue("-")}}>-</button>
        </div>
        <div className="divcont">
            <button className="digit" onClick={()=>{changeValue("3")}}>3</button>
            <button className="digit" onClick={()=>{changeValue("2")}}>2</button>
            <button className="digit" onClick={()=>{changeValue("1")}}>1</button>
            <button className="operater" onClick={()=>{changeValue("*")}}>*</button>
        </div>
        <div className="divcont">
            <button className="digit" onClick={()=>{changeValue("0")}}>0</button>
            <button className="fun" onClick={()=>{changeResult()}}>=</button>
            <button className="fun" onClick={()=>{clearResult()}}>C</button>
            <button className="operater" onClick={()=>{changeValue("/")}}>/</button>
        </div>
        </>
       
    )
};
export default Keys;
