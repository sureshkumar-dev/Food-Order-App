import React from 'react'
import weblogo from '@/assets/weblogo.png';
import langlogo from "@/assets/languagelogo.png";
import textlogo from "@/assets/textlogo.png";
import droplogo from "@/assets/droplogo.png";
import fb from "@/assets/fb_logo.png";
import insta from "@/assets/org_ig_logo.png";
import google from "@/assets/google2.png";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstore.png";
const Footer = () => {
    return (
        <>
            <footer className='bg-white pt-[20px] h-[500px]'>
                <div className='max-w-[1250px] mx-auto'>
                    <div className='flex justify-between p-[30px] border-b border-[#e5e7eb] '>
                        <img className='h-[45px]' src={weblogo} alt="" />
                        <div className='flex gap-4 '>
                            <button className='px-3 hover:cursor-pointer hover:scale-105 shadow-[0px_20px_30px_rgba(0,0,0,0.2)] rounded-[15px] bg-white py-[3px] bg-red-600 flex items-center'> <img className='pr-[10px]' src={langlogo} alt="" /> India <img src={droplogo} alt="" /></button>
                            <button className='px-3 hover:cursor-pointer hover:scale-105 shadow-[0px_20px_30px_rgba(0,0,0,0.2)] rounded-[15px] bg-white py-[3px] bg-red-600 flex items-center'> <img className='pr-[10px]' src={textlogo} alt="" />English<img src={droplogo} alt="" /></button>
                        </div>
                    </div>
                    <div className='flex justify-between pt-[30px] bg-white pb-[40px] border-b border-[#e5e7eb] pl-[20px] pr-[20px] mt-[10px]'>
                        <div>
                            <h1 className='text-4xl font-[600] text-red-500'>CraveX</h1>
                            <p className='pt-[15px] text-[#6b7280]'>Delivering Happiness Fast</p>
                            <div className='flex w-full pt-[8px] gap-x-[10px]'>
                                <img className='h-[30px] w-auto ' src={fb} alt="" />
                                <img className='h-[30px] w-auto' src={insta} alt="" />
                                <img className='h-[30px] w-auto' src={google} alt="" />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl font-[600] text-black'>About Us</h1>
                            <ul className='pt-4 text-[#6b7280]'>
                                <li className='hover:cursor-pointer py-[5px]'>Who We Are</li>
                                <li className='py-[5px] hover:cursor-pointer'>Blog</li>
                                <li className='py-[5px] hover:cursor-pointer'>Careers</li>
                                <li className='py-[5px] hover:cursor-pointer'>Investor Relations</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-[600] text-black'>For Restaurants</h1>
                            <ul className='pt-4 text-[#6b7280] '>
                                <li className='hover:cursor-pointer py-[5px]'>Partner With Us</li>
                                <li className='hover:cursor-pointer py-[5px]'>Apps For You</li>
                                <li className=' hover:cursor-pointer py-[5px]'>Business Dashboard</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-[600] text-black'>Learn More</h1>
                            <ul className='pt-4 text-[#6b7280] '>
                                <li className=' hover:cursor-pointer py-[5px]'>Privacy</li>
                                <li className='py-[5px] hover:cursor-pointer '>Security</li>
                                <li className='py-[5px] hover:cursor-pointer '>Terms</li>
                                <li className='py-[5px] hover:cursor-pointer '>Help Center</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-[600] text-black'>Get The App</h1>
                            <div className='pt-4 flex flex-col gap-y-2'>
                                <img className='h-[40px] ' src={playstore} alt="" />
                                <img className='h-[40px]  w-[136px]' src={appstore} alt="" />
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='w-full flex justify-center items-center'>
                            <div className='flex flex-col items-center pt-[20px] text-[#6b7280] '>
                                <p> &#169; 2026 CraveX. All Rights Reserved </p>
                                <p>Made With ❤️ For Food Lovers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer