import {React,props} from 'react'
import {Link} from 'react-router-dom'
export default function Cart(props) {
  const {cartItems,handleAddProduct,handleRemoveProducts}=props;
  let length1=cartItems.length;
  const totalprice=cartItems.reduce((price,items)=>price+items.quantity*items.price,0)
  return (
    <>
    <div>
      {
       length1===0 ? " " :<h1 className='text-center pt-16 text-3xl'> Welcome to the cart</h1>
      }
       {length1===0 && <>
       <div className='pt-8'>
        <img src='NOITEMS.png' alt='...' className='m-auto w-[440px]'/>
       </div>
       <div className='pt-24 pr-8 pl-4'>
       <div className='border-4 border-black h-[60px] w-[200px] rounded-full m-auto bg-blue-600 '>
        <Link to='/'>
       <button className='text-center pl-12 pt-2 text-2xl text-white'>Shop Now</button>
       </Link>
       </div>
       </div>
       </>}
      </div>
      {
        cartItems.map((items)=>{
          return <>
          <div className=' pl-72 pt-36'>
          <div className='flex flex-wrap lg:justify-evenly justify-center pt-12 pr-8 border-4 border-blue-600 rounded-s-xl w-[1450px] h-[240px]'>
           <img src={items.img} alt={items.name} className='lg:w-40 w-48 lg:pl-2 pl-32 pb-4 '/>
           <p className='pt-12 text-3xl pr-24 font-semibold pl-4'>{items.name}</p>
           <p className='pt-12 text-2xl pr-24 '>{items.quantity}</p>
           <div className='pt-8 pr-36'>
           <button className='border-4 border-black w-24 h-12 text-3xl bg-green-400 text-white'onClick={()=>handleAddProduct(items)}>+</button></div>
           <div className='pt-8 pr-36'><button className='border-4 border-black w-24 h-12 text-3xl bg-red-400 text-white'onClick={()=>handleRemoveProducts(items)}>-</button></div>
           </div>
           </div>
           </>
        })
      }
      </>
  )
}
