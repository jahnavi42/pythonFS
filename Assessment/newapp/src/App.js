import React, { useState} from 'react';
import './index.css';
function App() {
  const[count,setCount]=useState(0);
  function square(values){
    let temp=[];
    for (let i =0;i < count;i++) {
      temp.push(i);
      
    }
    return temp;
  }
  return (<div className="App">
    <span className="add-cont">

      <span className="abc" onClick={()=>setCount(count-1)}>-</span>
      <span className="abc">{count}</span>
      <span className="abc" onClick={()=>setCount(count+1)}>+</span>
    </span>
    <div className="display-grid">
      {square(count).map((item)=>(
        <span  className="squares">
          <img src="cloth.jpg"/>
        </span>
      ))}
    </div>

    <div>
      
      
      
    </div>
  </div>
  );
}

export default App;
