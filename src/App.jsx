import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: "$999", description: "High performance laptop" },
    { id: 2, name: "Phone", price: "$499", description: "Latest smartphone" },
    { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones" }
  ]);

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  )
}

export default App
