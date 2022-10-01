import { useEffect, useState } from 'react';
import './App.css';
import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { api } from './services/api';




function App() {
  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearch, setIsSearch]= useState(false)
  const [search, setSearch] = useState("")
  useEffect(()=>{
  
      api.get()
      .then( res=> setProducts(res.data) )
  
    },[])


    

  return (
    <div className="App">
       <Header  setFilteredProducts={setFilteredProducts} products={products} setIsSearch={setIsSearch} setSearch={setSearch}></Header>

        {
          isSearch && 

          <div className='searchTitle'> <h2> Resultados para:</h2> <span>{search}</span></div>
          
        }

       <main>
       
        {!isSearch ? 
         
          <ProductsList products={products} setCurrentSale={setCurrentSale} currentSale={currentSale} ></ProductsList>
          
        :
          <ProductsList products={filteredProducts} setCurrentSale={setCurrentSale} currentSale={currentSale} ></ProductsList>
        }
     
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}></Cart>
       </main>
      
    </div>
  );
}

export default App;
