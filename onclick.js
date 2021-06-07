
import { useState } from 'react';
import './App.css';


function App() {
  return (
    <header>
 <Count></Count>
      </header>
      
   
  );
}
function Count(){
  const [count , setCount]=useState(0);
  // const handelIncress=()=> setCount(count+1);

 
  
  return(
<div>
  <h1>
    count:{count}
  </h1>
  <button onClick={()=> setCount(count+1)}>incress</button>
  <button onClick={()=> setCount(count-1)}>decress</button>
  <button onClick={()=> setCount(count==0)}>level</button>
  
  </div>
  )
  
}



export default App;
