import React from 'react';
import bgvideo from "@/assets/videoplayback.mp4"

const Header = () => {
    return (
        <>
            <div className='h-[70vh] w-full bg-red-400 flex justify-start items-center'>
                <video autoPlay muted loop playsinline className='absolute inset-0 w-full h-[70vh] mt-[62px] object-cover'>
                    <source src={bgvideo} type='video/mp4' />
                </video>
                <div className=' relative flex flex-col pl-[120px] text-white'>
                    <h1 className='text-6xl font-bold translate-y-8 opacity-0 animate-[slideUp_1.2s_ease_forwards]'>Delicious food,</h1>
                    <h1 className='text-6xl font-bold pt-2 translate-y-8 opacity-0 animate-[slideUp_0.8s_ease_forwards]'>delivered to your door</h1>
                    <h3 className='text-2xl font-base mt-[60px] mb-[40px]'>Order from the best restaurants in your area. Fast delivery, fresh food.</h3>
                    <div className='flex gap-x-4'>
                        <button className='bg-red-500 transition-all duration-300 hover:bg-red-600 hover:scale-105 shadow-lg text-white px-8 py-3.5 rounded-[10px] tracking-wide font-[600]'>Order Now</button>
                        <button className='bg-white/10 backdrop-blur-md  transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg text-white border-3 border-white px-8 py-3.5 rounded-[10px] tracking-wide font-[600]'>Explore Menu</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header 