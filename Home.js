import React,{useState} from 'react'
import props from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {FaUserAlt,FaLock,FaFacebook,FaGoogle,FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
export default function Home(props) {
    const [nav,setnav]=useState(false)
    const [nav1,setnav1]=useState(false);
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState(false)
    const {cartItems}=props;
    function LoginHandle(e)
    {
        if(name.length<3| password.length<3)
        {
            alert("Type Correct Values")
        }
        else{
            alert('All Good')
        }
        e.preventDefault();
    }
    function UserHandler(e){
          let item=e.target.value
          if(item.length<3)
          {
            seterror(true)
          }
          else{
            seterror(false)
          }
          setname(item)
    }
    function PasswordHandler(e){
        let item=e.target.value
        if(item.length<3)
        {
          seterror(true)
        }
        else{
          seterror(false)
        }
        setpassword(item)
  }
  return (
    <>
    <div className=''>
    <div className='flex p-4 bg-yellow-500 justify-between relative z-4'>
        <h1 className='text-4xl font-bold flex'>blink<p className='text-4xl text-green-500 font-bold'>it</p></h1>
        <div className='float-right flex '>
        <div className='pr-8'>
        <p className='lg:text-3xl bg-green-400  cursor-pointer rounded-xl'onClick={()=>setnav1(!nav1)}>LOG IN </p></div>
        <div className='pr-6'>
            <Link to='/restorecart'>
        <p><BsFillCartFill size={30} className=''/></p>
        <span>{}</span>
        </Link>
        </div>
        <AiOutlineMenu size={40} onClick={()=>setnav(!nav)} className='cursor-pointer '/>
        </div>
    </div>
    { nav1  ? <div className='bg-black/80 h-screen w-full fixed  z-10 top-0 left-0'>

     </div>: " "}
    { nav  ? <div className='bg-black/80 h-screen w-full fixed  z-10 top-0 left-0'>
    </div>: " "}
    <div className={nav1?'fixed top-48 lg:right-[520px] right-4 lg:w-[900px] w-[280px] lg:h-[750px] h-[340px] bg-white z-10 duration-300 float-left':'fixed top-6 right-[-100%] lg:w-[300px] h-screen bg-white z-10 duration-300 float-left'}>
    <AiOutlineClose size={30} color='white' onClick={()=>setnav1(!nav1)} className='absolute lg:top-4 lg:right-4 right-2 top-2cursor-pointer top-2'/>
    <div className='relative'>
    <div className='absolute lg:pl-[350px] pl-[100px] pt-20'>
    <p className='lg:text-5xl font-bold text-white'>Log <span className='lg:text-5xl font-bold text-green-300'>In</span></p></div>
    <div className='absolute pt-48 pl-52'>
        <div className='flex'>
            <span><FaUserAlt size={45}/></span>
            <div className='pl-8'>
                <form onSubmit={LoginHandle}>
             <input type='text' placeholder=' UserName' className='w-[450px] h-[50px] text-2xl outline-none pl-4 rounded-3xl font-semibold text-black cursor-pointer'required  id='username'onChange={UserHandler}/>
             {error?<p className='font-bold text-red-400'>Invalid User Name</p>:""}
             </form>
             </div>
        </div>
        <div className='flex pt-8'>
            <span><FaLock size={45}/></span>
            <form onSubmit={LoginHandle}>
            <div className='pl-8'>
             <input type='password' placeholder=' Password' className='w-[450px] h-[50px] text-2xl outline-none pl-4 rounded-3xl font-semibold text-black cursor-pointer'  required id='pass' onChange={PasswordHandler}/>
             {error?<p className='font-bold text-red-400'>Invalid Password</p>:""}
             </div>
             </form>
        </div>
        <p className='text-2xl font-bold pl-96 pt-2'>Forgot Password?</p>
        <div className='pt-16 pl-20'>
        <button className='text-3xl border-4 border-black rounded-full bg-pink-500 w-96 text-white outline-none' type='submit'>LOGIN</button>
        </div>
        <div className='pt-6 text-2xl font-bold text-center '>Or SignUp Using</div>
        <div className='flex pl-48 pt-8'>
            <FaFacebook  size={45} color='blue' className='hover:bg-white' />
            <div className='pl-4'>
            <FaGoogle size={45} color='red' className='pl-2 hover:bg-black '/>
            </div>
            <div className='pl-6'>
            <FaTwitter size={45} color='white' className='hover:bg-black'/>
            </div>
        </div>
        <p className='pt-6 text-2xl font-bold text-center '>Or SignUp Using</p>
        <div className='lg:pl-60 pt-8'>
        <p className='border-b-4 border-black text-white text-2xl w-24 hover:cursor-pointer'>SIGN UP</p>
        </div>
    </div>
    </div>
    <img src='Login.png' alt='....' className='lg:w-[1300px] w-[280px] lg:h-[750px] h-[350px]'/>
    </div>
    <div className={nav?'fixed top-0 right-0 lg:w-[300px] w-[250px] h-screen bg-white z-10 duration-300':'fixed top-0 right-[-100%] lg:w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose size={30} onClick={()=>setnav(!nav)} className='absolute lg:top-4 lg:right-4 cursor-pointer top-2'/>
        <nav>
            <ul className='flex flex-col lg:p-16 p-12 pr-4 text-2xl'>
            <Link to='/' className='lg:pt-8 pt-4 hover:text-blue-400'>
                    Home1
                </Link>
                <Link to='/about' className='lg:pt-8 pt-4 hover:text-blue-400 '>
                      About
                </Link>
                <Link  to='/lead'className='lg:pt-8 pt-4 hover:text-blue-400'>Lead</Link>
                <Link to='/value' className='lg:pt-8 pt-4 hover:text-blue-400'>
                    Values
                </Link>
                <li className='lg:pt-8 pt-4 hover:text-blue-400'>Careers</li>
                <li className='lg:pt-8 pt-4 hover:text-blue-400'>Partners</li>
                <li className='lg:pt-8 pt-4 hover:text-blue-400'>Cart</li>
                <li className='lg:pt-8 pt-4 hover:text-blue-400'>Press</li>
                <li className='lg:pt-8 pt-4 hover:text-blue-400'>Security</li>
                <li className='lg:pt-8 pt-4 hover:text-blue-400'>Contact</li>
                <li className='lg:pt-8 pt-4 hover:text-blue-400'>Deliver</li>
            </ul>
        </nav>
    </div>
    </div>
    </>
  )
}
