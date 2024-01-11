import {React,props} from 'react';
// import {PiClockCountdown} from 'react-icons/pi'
export default function Product(props) {
  const {products,products1,products2,handleAddProduct ,handleRemoveProducts}=props;
  return (
    <div className=''>
      <h1> Best Way to buy soft Drink Online</h1>
      <div className='flex justify-between flex-wrap'>
      {products.map((product)=>{
        return (
          <>
          <div className=''>
          <img src={product.img} alt={product.name} className='w-60 '/>
          <h1 className='text-2xl pl-12 pt-4 font-bold'>{product.price}</h1>
          <div className='h-24 pt-8 pl-4'>
          <button className='text-xl pt-2 pl-2 pr-2 border-2 border-green-600 h-12  bg-black text-white rounded-xl  hover:bg-red-600 ' onClick={()=>handleAddProduct(product)}>Add To Cart</button>
         </div>
          </div>
        </>
        )
      })}
      </div>
      <div className='flex justify-between flex-wrap'>
      {products1.map((products)=>{
        return (
          <>
          <div className=''>
          <img src={products.img} alt={products.name} className='w-60 '/>
          <h1 className='text-2xl pl-12 pt-4 font-bold'>{products.price}</h1>
          <div className='h-24 pt-8 pl-4'>
          <button className='text-xl pt-2 pl-2 pr-2 border-2 border-green-600 h-12 rounded-xl bg-black text-white hover:bg-red-600 'onClick={()=>handleAddProduct(products)}>Add To Cart</button>
         </div>
          </div>
        </>
        )
      })}
      </div>
      <div className='flex justify-between flex-wrap'>
      {products2.map((product2)=>{
        return (
          <>
          <div className=''>
          <img src={product2.img} alt={product2.name} className=' w-28'/>
          <h1 className='text-2xl pl-12 pt-4 font-bold'>{product2.price}</h1>
          <div className='h-24 pt-8 pl-4'>
          <button className='text-xl pt-2 pl-2 pr-2 border-2 border-green-600 h-12  bg-black text-white rounded-xl  hover:bg-red-600 'onClick={()=>handleAddProduct(product2)}>Add To Cart</button>
         </div>
          </div>
        </>
        )
      })}
      </div>
    </div>
  )
}
