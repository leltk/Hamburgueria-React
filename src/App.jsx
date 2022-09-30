import { useEffect, useState } from 'react';
import './App.css';
import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { api } from './services/api';



function App() {
  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(()=>{
  
      api.get()
      .then( res=> setProducts(res.data) )
  
    },[])


    

  return (
    <div className="App">
       <Header></Header>
       <main>
       <ProductsList products={products} setCurrentSale={setCurrentSale} currentSale={currentSale} ></ProductsList>
       <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}></Cart>
       </main>
       <button onClick={()=> console.log(currentSale)}> teste</button>
    </div>
  );
}

export default App;
