
import './App.css';
const rooms=[{size:'family',price:'100$',condition:'AC'},
{size:'single',price:'60$',condition:'AC'}
]

function App() {
  return (
    <header>
 
 <Product pr={rooms[0]}></Product>
 <Product pr={rooms[1]} ></Product>
      </header>
      
   
  );
}

function Product(props){
  const productStyle ={
    backgroundColor: 'red',
    height:'300px',
    width: '300px',
    float:'left',
    marginLeft: '10px',
    
     }
     const {size,price,condition} = props.Product;
  return(
<div style={productStyle}>
  <h3>{size}</h3>
  <h4>{price}</h4>
  <h3>{condition}</h3>
  <button>book now</button>
</div>
  )
}


export default App;
