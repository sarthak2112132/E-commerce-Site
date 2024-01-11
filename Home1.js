import {React,useState} from 'react'
import Home from './Home'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay';
import { Outlet } from 'react-router-dom'
import Product from './Product'
import { Link } from 'react-router-dom'

export default function Home1() {
  const [getlink,setlink]=useState(false);
  return (
    <>
    <Home/>
    <div className='relative'>
      <div className='absolute pt-52 pl-20 lg:pt-[530px] lg:pl-[800px] lg:pb-4 text-center'>
         <span className='bg-white lg:text-3xl text-xl  rounded-2xl text-green-600 lg:pl-8 pl-6 pr-4 lg:pr-6'>Shop Now</span> 
      </div>
       <img src='paan1.png' alt='...' className='lg:w-[2000px] lg:h-[600px] w-[1000px] h-[240px]'/>
     </div>
     <Swiper  slidesPerView={3} modules={[Autoplay]} autoplay={{delay:3000}} spaceBetween={10} loop={true}>
      <SwiperSlide>
       <div className='relative'>
        <div className='absolute pt-20'>
          <span></span>
          </div>
          <div className='lg:pl-28 pl-4 lg:pt-16 pt-4'>
          { !getlink ? <Link to='/product'>
       <img src='Cold.png' alt='...' className=' lg:w-[350px] w-[200px]  lg:rounded-full rounded-xl cursor-pointer' onClick={()=>setlink(!getlink)}/></Link> :<Link to='/'>
       <img src='Cold.png' alt='...' className=' lg:w-[350px] w-[200px]  lg:rounded-full rounded-xl cursor-pointer' onClick={()=>setlink(!getlink)}/></Link>}
       </div>
       </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='relative'>
        <div className='absolute pt-28'>
          </div>
          <div className='lg:pl-28 pl-4 lg:pt-16 pt-4'>
       <img src='fruits.png' alt='...' className=' lg:w-[350px] w-[150px]  rounded-xl object-center'/>
       </div>
       </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='relative'>
        <div className='absolute pt-28'>
          </div>
          <div className='lg:pl-28 pl-4 lg:pt-16 pt-4'>
       <img src='tea.png' alt='...' className=' lg:w-[350px] w-[150px]  rounded-xl object-center h-12 lg:h-56'/>
       </div>
       </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='relative'>
        <div className='absolute pt-28'>
          </div>
          <div className='lg:pl-28 pl-4 lg:pt-16 '>
       <img src='Munchies.png' alt='...' className=' lg:w-[250px] w-[250px]  rounded-xl object-center lg:pb-2 '/>
       </div>
       </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='relative'>
        <div className='absolute pt-28'>
          </div>
          <div className='lg:pl-28 pl-4 lg:pt-16 pt-2 lg:pb-0 pb-4'>
       <img src='oats.png' alt='...' className=' lg:w-[250px] w-[250px]  rounded-xl object-center lg:h-52 h-16 bg-gray-200'/>
       </div>
       </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='relative'>
        <div className='absolute pt-28'>
          </div>
          <div className='lg:pl-28 pl-4 lg:pt-16  lg:pb-0 pb-4'>
       <img src='Aata.png' alt='...' className=' rounded-xl object-center lg:h-52 h-20 bg-gray-200'/>
       </div>
       </div>
       </SwiperSlide>
       </Swiper>
       <Swiper slidesPerView={3}  modules={[Autoplay]} autoplay={{delay:3000}} loop={true}>
        <SwiperSlide>
          <div className='relative'>
            <div className='absolute pt-28'>
               
            </div>
            <div className=' lg:pt-2 lg:pl-28 pl-4  '>
              <img src='masala.png' alt='...'className='lg:w-[250px] w-[250px]  rounded-xl object-center lg:pb-2'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <div className='absolute pt-28'>
               
            </div>
            <div className='lg:pt-0 pl-4 '>
              <img src='Sauce.png' alt='...'className='lg:w-[250px] w-[250px]  rounded-xl object-center lg:pb-2 pb-4'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <div className='absolute pt-28'>
               
            </div>
            <div className='lg:pt-10 pl-4  pt-2'>
              <img src='silk.png' alt='...'className='lg:w-[250px] w-[250px] lg:h-[200px] h-[50px] rounded-xl object-center lg:pb-2 '/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <div className='absolute pt-28'>
               
            </div>
            <div className=' pl-4 lg:pt-8 pt-2'>
              <img src='pharmacy.png' alt='...'className='lg:w-[250px] w-[250px] lg:h-[200px] h-[50px] rounded-xl object-center lg:pb-2 '/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <div className='absolute pt-28'>
               
            </div>
            <div className=' pl-4 lg:pt-8 pt-2'>
              <img src='Organic.png' alt='...'className='lg:w-[250px] w-[250px] lg:h-[200px] h-[50px] rounded-xl object-center lg:pb-2 '/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <div className='absolute pt-28'>
               
            </div>
            <div className=' pl-4 lg:pt-8 pt-2'>
              <img src='Pedigree.png' alt='...'className='lg:w-[250px] w-[250px] lg:h-[200px] h-[50px] rounded-xl object-center lg:pb-2 '/>
            </div>
          </div>
        </SwiperSlide>
       </Swiper>
       <Outlet/>
    </>
  )
}
