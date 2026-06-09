import React, { useEffect } from 'react';
import weblogo from '@/assets/weblogo.png';
import locationlogo from "@/assets/location.png";
import searchlogo from "@/assets/search.png";
import cartlogo from "@/assets/cart.png";
import accountlogo from "@/assets/account.png";
import { useState } from 'react';


const Nav = () => {
    const [text, settext] = useState("")
    const [dropbox, setdropbox] = useState(false)
    const selectitem = (value) => {
        settext(value);
        setdropbox(false)
    }
    const handlechange = (e) => {

        settext(e.target.value);

        if (!dropbox) {
            setdropbox(true)
        }


    }



    const items = [
        // Popular Foods
        "Chicken Biryani",
        "Mutton Biryani",
        "Veg Biryani",
        "Hyderabadi Biryani",
        "Ambur Biryani",
        "Fried Rice",
        "Noodles",
        "Parotta",
        "Kothu Parotta",
        "Chicken 65",
        "Grill Chicken",
        "Shawarma",
        "Burger",
        "Pizza",
        "Pasta",
        "Sandwich",
        "Wraps",
        "Momos",
        "Rolls",
        "Fries",
        "Ice Cream",
        "Cake",
        "Brownie",
        "Falooda",
        "Juices",
        "Milkshakes",
        "Coffee",
        "Tea",

        // South Indian
        "Idli",
        "Dosa",
        "Masala Dosa",
        "Podi Dosa",
        "Ghee Roast",
        "Poori",
        "Pongal",
        "Vada",
        "Uttapam",
        "Meals",
        "Mini Tiffin",

        // North Indian
        "Butter Naan",
        "Paneer Butter Masala",
        "Butter Chicken",
        "Tandoori Chicken",
        "Dal Makhani",
        "Chole Bhature",

        // Chinese / Asian
        "Schezwan Rice",
        "Manchurian",
        "Dragon Chicken",
        "Dimsum",
        "Sushi",

        // Healthy
        "Salad",
        "Protein Bowl",
        "Smoothie Bowl",
        "Fruit Bowl",

        // Cuisines
        "South Indian",
        "North Indian",
        "Chinese",
        "Italian",
        "Mexican",
        "Arabian",
        "Thai",
        "Japanese",
        "Continental",
        "Street Food",
        "Desserts",
        "Seafood",
        "Healthy Food",
        "Cafe",

        // Chennai Hotels / Restaurants
        "A2B Chennai",
        "Saravana Bhavan",
        "Sangeetha Veg Restaurant",
        "Murugan Idli Shop",
        "Dindigul Thalappakatti",
        "SS Hyderabad Biryani",
        "Buhari Hotel",
        "Anjappar",
        "Junior Kuppanna",
        "Arabian Hut",
        "KFC",
        "McDonald's",
        "Burger King",
        "Domino's Pizza",
        "Pizza Hut",
        "Subway",
        "Wow Momo",
        "The Belgian Waffle Co",
        "Barbeque Nation",
        "Cream Centre",

        // Chennai Areas
        "Anna Nagar",
        "T Nagar",
        "Velachery",
        "Tambaram",
        "Adyar",
        "OMR",
        "Porur",
        "Vadapalani",
        "Chromepet",
        "Mylapore"
    ];
    const filtered = items.filter((item) => item.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    console.log(filtered)
    console.log(items.includes(text))
    console.log(text);
    return (
        <>
            <div className='h-[100%] w-[100%] relative z-10' onClick={() => { if (dropbox) { setdropbox(false) } }} >


                <div className='w-full bg-white pt-[13px] pb-[13px]  z-50'>
                    <nav className=' max-w-[1400px] mx-auto flex justify-between items-center '>

                        <div className='flex gap-x-14 items-center'>
                            <img className='h-7.5 w-auto' src={weblogo} alt="weblogo" />
                            <div className='flex items-center gap-x-0.75 '>
                                <img className='h-5' src={locationlogo} alt="" />
                                <h4 className='font-[400] text-[16px]'>Chennai , India </h4>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='flex w-[500px] bg-[#f7f7f7] gap-x-1.5 p-1 rounded-[8px]'>
                                <img className='h-6.5 pl-1' src={searchlogo} alt="" />
                                <input onChange={handlechange} value={text} className='w-full rounded-none outline-none' placeholder='Search for restaurants, cuisines...' type="text" />

                            </div>
                            <div style={{ display: dropbox ? 'block' : 'none' }} className='absolute z-5 w-[500px] max-h-[200px] text-black font-[600] rounded-[5px] overflow-auto bg-white/30 backdrop-blur-2xl border border-white/20  [&::-webkit-scrollbar]:w-[7px]
     [&::-webkit-scrollbar-track]:bg-gray-600
     [&::-webkit-scrollbar-thumb]:bg-white
     dark:[&::-webkit-scrollbar-track]:bg-neutral-700
     dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 top-[100%] z-10'>
                                {filtered.map((item, index) => {
                                    return (
                                        <ul >
                                            <li onClick={() => { selectitem(item) }} className='py-2 border-b-1 pl-[10px]' key={index}>{item}</li>
                                        </ul>
                                    )
                                })}
                            </div>

                        </div>
                        <div className='flex gap-x-6'>
                            <img className='h-9' src={cartlogo} alt="" />
                            <img className='h-9' src={accountlogo} alt="" />
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Nav