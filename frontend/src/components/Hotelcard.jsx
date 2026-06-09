import React from 'react'
import anjappar from "@/assets/anjappar.png"

const Hotelcard = ({image,hotelname,cusine,rating,deltime,p1,p2,p3}) => {
  return (
    <>
      <div className=' h-[320px] hover:scale-105 hover:shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),0px_8px_16px_-8px_rgba(0,0,0,0.3)] w-[355px] bg-white rounded-[12px] shadow-[0px_1px_4px_rgba(0,0,0,0.16)]  overflow-hidden'>
        <div className='h-[175px] bg-white w-full'>
          <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className='p-[20px] relative'>
          <div className='absolute top-[10px] ' >
            <h3 className='text-xl font-[600]  text-black'>{hotelname}</h3>
            <h5 className='absolute top-[26px] text-[#808080]' >{cusine}</h5>
          </div>
          <div className='flex justify-between pt-[49px]'>
            <div className='flex gap-x-1 items-center pt-[1px] rounded-[11px]   bg-[#e7f8f2]'>
              <h5 className='text-[20px] pl-[5px] text-[#0fb982]'>&#9733;</h5>
              <h5 className='text-[14px] pr-[9px] font-bold text-[#0fb982]'>{rating}</h5>
            </div>
            <div>
              <h4 className='text-[14px] text-[#808080]'>&#9201; {deltime} mins</h4>
            </div>
          </div>
          <div className='flex gap-x-[18px] absolute top-[110px] text-[12px]'>
            <p className='px-[7px] py-[2px] text-[#808080] rounded-[12px] bg-[#f8f8f8]'>{p1}</p>
            <p className='px-[7px] py-[2px] text-[#808080] rounded-[12px] bg-[#f8f8f8]'>{p2}</p>
            <p className='px-[7px] py-[2px] text-[#808080] rounded-[12px] bg-[#f8f8f8]'>{p3}</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default Hotelcard