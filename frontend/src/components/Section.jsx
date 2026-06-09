import React from 'react'
import Hotelcard from './Hotelcard'
import briyani from "@/assets/food images/briyani.jpg";
import briyani2 from "@/assets/food images/briyani2.jpg";
import curdrice from "@/assets/food images/curdrice.jpg";
import dosa from "@/assets/food images/dosa.jpg";
import hotelin from "@/assets/food images/hotelinfra.png";
import icecream from "@/assets/food images/ice cream.jpg";
import idli from "@/assets/food images/idli.jpg";
import meals from "@/assets/food images/meals.jpg";
import meals2 from "@/assets/food images/meals2.jpg";
import parotta from "@/assets/food images/parotta.jpg";
import parotta2 from "@/assets/food images/parotta2.png";
import sweets from "@/assets/food images/sweets.jpg";
import kfc from "@/assets/brands/kfc3.png";
import subway from "@/assets/brands/subway3.png";
import mcdonalds from "@/assets/brands/mcdonalds3.png";
import dominos from "@/assets/brands/dominos3.png";
import DeliveryQuote from '@/components/DeliveryQuote';
import starbucks from "@/assets/brands/starbucks3.png";
import vada from "@/assets/food images/vada.jpg";



const Section = () => {
    return (
        <>
            <div>
                <h1 className='text-4xl font-semibold pl-[120px] pt-[30px]'>Popular Restaurants</h1>
                <h3 className='pl-[120px] pt-[4px] text-[#808080]'>Discover amazing food near you</h3>
            </div>
            <div className='pt-[18px] pb-[20px]  pl-[120px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-20 gap-y-15 pr-[120px]'>
                <Hotelcard hotelname={"ITC Kitchen"} cusine={"Briyani"} image={briyani2} rating={4.6} deltime={"20 - 25"} p1={"indian"} p2={"chinese"} p3={"italian"} />
                <Hotelcard hotelname={"Border Rahmath"} cusine={"Parotta"} image={parotta} rating={4.3} deltime={"10 - 15"} p1={"indian"} p2={"chinese"} p3={"italian"} />
                <Hotelcard hotelname={"Ananda Bavan"} cusine={"Veg Meals"} image={meals} rating={4.6} deltime={"20 - 35"} p1={"indian"} p2={"chinese"} p3={"italian"} />
                <Hotelcard hotelname={"Salem RR Briyani"} cusine={"Briyani"} image={briyani} rating={4.2} deltime={"10 - 15"} p1={"indian"} p2={"chinese"} p3={"italian"} />
                <Hotelcard hotelname={"Geetham Veg"} cusine={"Tiffin"} image={idli} rating={4.1} deltime={"20 - 25"} p1={"indian"} p2={"chinese"} p3={"italian"} />
                <Hotelcard hotelname={"BG Nayudu Sweets"} cusine={"Sweets"} image={sweets} rating={4.3} deltime={"10 - 15"} p1={"indian"} p2={"chinese"} p3={"italian"} />
            </div>
            <div>
                <div>
                    <h1 className='text-4xl font-semibold pl-[120px] pt-[30px]'>Global Favorites</h1>
                    <h3 className='pl-[120px] pt-[4px] text-[#808080]'>Craving something good? Start here</h3>

                </div>
                <div className='grid pl-[120px] pb-[40px] pt-[20px] max-width-[1280px] mx-auto grid-cols-[repeat(auto-fit,minmax(250px,1fr))] pr-[50px] '>
                    <div className='w-[250px] cursor-pointer hover:scale-103'>
                        <div className='h-[150px] overflow-hidden w-[250px] bg-blue-500 rounded-[12px]' >
                            <img src={kfc} alt="" />

                        </div>
                        
                            <h3 className='text-center font-semibold' >KFC</h3>
                        

                    </div>
                    <div className='w-[250px] cursor-pointer hover:scale-103'>
                        <div className='h-[150px] w-[250px] overflow-hidden bg-blue-500 rounded-[12px]' >
                            <img src={dominos} alt="" />

                        </div>
                        <h3 className='text-center font-semibold'>DOMINOS</h3>
                    </div>
                    <div className='w-[250px] cursor-pointer hover:scale-103'>
                        <div className='h-[150px] w-[250px] overflow-hidden bg-blue-500 rounded-[12px]' >
                            <img src={subway} alt="" />

                        </div>
                        <h3 className='text-center cursor-pointer font-semibold'>SUBWAY</h3>
                    </div>
                    <div className='w-[250px] hover:scale-103 pb-[25px]'>
                        <div className='h-[150px] w-[250px] bg-blue-500 overflow-hidden rounded-[12px]' >
                            <img src={mcdonalds} alt="" />

                        </div>
                        <h3 className='text-center font-semibold' >McDONALD'S</h3>
                    </div>


                </div>
            </div>
            <DeliveryQuote/>
        </>
    )
}

export default Section