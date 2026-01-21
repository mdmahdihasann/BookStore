import React from 'react'
import backgrund from "../../../public/Background.webp"
import Image from 'next/image'
import { FaShoppingBag, FaCartPlus  } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const BooksCard = () => {
  return (
    <div className='bg-white p-4 rounded-lg flex flex-col gap-2 text-center h-[400px]'>
        <h4 className='text-md font-semibold'>The Great</h4>
        <Image src={backgrund} className='rounded-lg h-[100%]' style={{ objectFit: "cover" }}/>
        <div className='flex justify-between mt-2'>
            <div className='flex items-center gap-1 text-sm text-gray-950 font-medium'><FaShoppingBag/> <span>34 in Stock</span></div>
            <div className='flex items-center gap-1 text-sm text-gray-950 font-medium'><FaSackDollar/> <span>230 to buy</span></div>
        </div>
        <h3 className='text-md text-gray-900 mb-1.5'>Rent for 24 dollar per moth Currntly no one has rented this book</h3>
        <hr className='text-gray-200'/>
        <div className='flex justify-evenly mt-3'>
            <button className='bg-purple-700 flex items-center gap-2 w-26 px-2 py-1.5 rounded-sm text-md text-white hover:bg-purple-600 transition justify-center'><FaCartPlus/>to Buy</button>
            <button className='bg-purple-700 flex items-center gap-2 w-26 px-2 py-1.5 rounded-sm text-md text-white hover:bg-purple-600 transition justify-center'><FaCartPlus/>to Rent</button>
        </div>
    </div>
  )
}

export default BooksCard