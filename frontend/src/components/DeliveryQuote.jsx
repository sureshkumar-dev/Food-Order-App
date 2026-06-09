import React from 'react'
import delivery from "@/assets/delivery.png";
import delivertruck from "@/assets/delivery_truck.png";
import currency from "@/assets/currency.png";
import clean from "@/assets/clean.png";
import location from "@/assets/location_on.png";
import burger from "@/assets/food png/burger.png";
import pizza from "@/assets/food png/pizza.png";
import chicken from "@/assets/food png/chicken.png";
import fries from "@/assets/food png/fries.png";

const DeliveryQuote = () => {
  return (
    <>
      <div className='h-[662px] pl-[120px] pr-[120px] '>
        <div className='w-full h-[50px]  pt-[30px] pb-[30px]  relative pr-[120px] bg-white'>
          <hr className=' w-[1263px] border-[#f4f2f5]  absolute border-[3px] top-1/2 -translate-y-1/2' />
          <p className='px-3 border-8  border-white text-[#8d8b94] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 py-1 rounded-[25px] w-max  bg-[#f4f2f5]'>Trusted By 10,000+ food lovers</p>
        </div>
        <div className='pt-[20px]'>
          <h1 className='text-4xl pl-[85px] font-[600]'>Why Choose Us</h1>
          <div className='w-full pt-[5px] pb-[40px] flex items-center gap-x-8 justify-center'>
            <div className='h-[290px] w-[560px] grid grid-cols-2 gap-4 grid-rows-2 bg-white '>
              <div className='bg-[#ffffff] hover:-translate-y-1 transition-all duration-300 w-full rounded-[20px] relative p-[10px]  shadow-[0_12px_28px_rgba(255,59,48,0.10),0_8px_18px_rgba(0,0,0,0.06)]'>
                <img className=' h-[60px] absolute top-1/2 -translate-y-1/2' src={delivertruck} alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 right-[10px]'>
                  <h2 className='text-2xl font-[600] text-[#111111]'>Fast Delivery</h2>
                  <p className='text-[14px] font-400'>Delivered in 30 minutes</p>
                </div>

              </div>
              <div className='bg-[#ffffff] hover:-translate-y-1 transition-all duration-300 w-full rounded-[20px] relative p-[10px]  shadow-[0_12px_28px_rgba(255,59,48,0.10),0_8px_18px_rgba(0,0,0,0.06)]'>
                <img className='absolute h-[60px] top-1/2 -translate-y-1/2' src={location} alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 right-[10px]'>
                  <h2 className='text-2xl font-[600]'>Live Tracking</h2>
                  <p className='text-[14px] font-400'>Track Your Order Live</p>
                </div>

              </div>
              <div className='bg-[#ffffff] hover:-translate-y-1 transition-all duration-300 w-full rounded-[20px] relative p-[10px]  shadow-[0_12px_28px_rgba(255,59,48,0.10),0_8px_18px_rgba(0,0,0,0.06)]'>
                <img className='absolute h-[60px] top-1/2 -translate-y-1/2' src={clean} alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 right-[10px]'>
                  <h2 className='text-2xl font-[600]'>safe Package</h2>
                  <p className='text-[14px] font-400'>Safe And Clean</p>
                </div>

              </div>
              <div className='bg-[#ffffff] hover:-translate-y-1 transition-all duration-300 w-full rounded-[20px] relative p-[10px]  shadow-[0_12px_28px_rgba(255,59,48,0.10),0_8px_18px_rgba(0,0,0,0.06)]'>
                <img className='absolute h-[60px] top-1/2 -translate-y-1/2' src={currency} alt="" />

                <div className='absolute top-1/2 -translate-y-1/2 right-[40px]'>
                  <h2 className='text-2xl font-[600]'>Best Prices</h2>
                  <p className='text-[14px] font-400'>Daily Offers </p>
                </div>

              </div>

            </div>
            <div className='h-[420px] w-[450px] relative rounded-[30px]   bg-gradient-to-br from-[#ff4b4b] via-[#f41218] to-[#d90000] mr-[60px] p-[25px]'>
              <div className='flex border-b-3 border-white w-[350px] pb-[20px] pt-[55px] ml-[10px]'>
                <img className='absolute left-[330px] bottom-[310px] h-[170px]' src={burger} alt="" />
                <img className='absolute left-[350px] top-[140px] h-[180px]' src={pizza} alt="" />
                <img className='absolute left-[310px] top-[310px] h-[130px]' src={chicken} alt="" />
                <img className='absolute right-[360px] top-[310px] bottom-[310px] h-[170px]' src={fries} alt="" />

                <h1 className='text-8xl text-white font-[600]'>50</h1>
                <div className='flex flex-col '>
                  <h1 className='text-6xl text-white font-[600]'>% OFF</h1>
                  <h1 className='text-2xl text-white font-[600]'>on FIRST ORDER</h1>
                </div>
                <hr className='border-0 h-px bg-gray-200 my-6 ' />

              </div>
              <div className='pt-[20px] w-max flex flex-col items-center ml-[10px]'>
                <h1 className='text-2xl font-[600] text-white pb-[20px]'>Free Delivery Above 199 </h1>
                <button className='bg-black w-60 rounded-[15px]  hover:bg-zinc-900 hover:scale-105 hover:shadow-2xl cursor-pointer transition-all duration-300 ease-out active:scale-95  text-white px-4 text-xl font-[600] py-4'>ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliveryQuote