
import './App.css';
const rooms=[{size:'family',price:'100$',condition:'AC'},
{size:'single',price:'60$',condition:'AC'},
{size:'single',price:'60$',condition:'AC'}
]
const nayoks=['sabbir','azim','shehab','jashim']

function App() {
  return (
    <header>
 <ol>
   {
     nayoks.map(nayok=><li>{nayok}</li>)
   }
 </ol>
 {
   rooms.map(rooms=><Product Product={rooms}></Product>)
 }
 
 {/* <Product Product={rooms[0]}></Product>
 <Product Product={rooms[1]} ></Product> */}
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
