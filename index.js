import {React,useState} from 'react'
import  ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Lead from './components/Lead';
import Home1 from './components/Home1';
import Product from './components/Product';
import Restorecart from './components/Restorecart';
import Sourcedata from './Sourcedata';
import Sourcedata2 from './Sourcedata2';
import Sourcedata3 from './Sourcedata3';
function App()
{
  const [cartItems,setcartItems]=useState([]);
  const {products}=Sourcedata;
  const {products1}=Sourcedata2;
  const {products2}=Sourcedata3;
  const handleAddProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id)
    if(ProductExist)
    {
      setcartItems(cartItems.map((item)=>item.id===product.id ? {...ProductExist,quantity:ProductExist.quantity+1}
      :item
      ))
    }
    else{
      setcartItems([...cartItems,{...product,quantity:1}])
    }
  }
  const handleRemoveProducts=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist.quantity===1)
    {
      setcartItems(cartItems.filter((item)=>item.id !== product.id))
    }
    else{
      setcartItems(cartItems.map((item)=>item.id===product.id ? {...ProductExist,quantity:ProductExist.quantity-1} :item ))
    }
  }
  return(
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home1/>}>
        <Route path='product' element={<Product products={products}  products1={products1} products2={products2} handleAddProduct={handleAddProduct} />}/>
      </Route>
      <Route path='about' element={<About/>}/>
      <Route path='lead' element={<Lead handleAddProduct={handleAddProduct} handleRemoveProducts={handleRemoveProducts}/>}/>
      <Route path='restorecart' element={<Restorecart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProducts={handleRemoveProducts}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
const root=ReactDOM.createRoot((document.getElementById("root")))
root.render(
    <App/>
);