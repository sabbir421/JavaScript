
function App() {
    return (
      <div className="App">
        <header className="App-header">
        
           <Obostha name = "sabbir" dastination= "bangladesh"></Obostha>
           <Obostha name = "azim" dastination = "england"></Obostha>
           <Obostha></Obostha>
         
         
  
  
        </header>
      </div>
  );
  
  
  }
  function Obostha(props){
    return(
     <div style= {mystyle}>
        <h2>{props.name}</h2>
      <h3>{props.dastination}</h3>
      
     
     </div>
    
    );
  }
  