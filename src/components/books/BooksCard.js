"use client"

import ProductAddCart from '@/hooks/ProductAddCart';
import Image from 'next/image'
import Link from 'next/link';
import { FaShoppingBag, FaCartPlus } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { toast } from 'react-toastify';

const BooksCard = ({ product }) => {
  const { setCartAdd } = ProductAddCart();
  const AddtoCart = (e, reason) => {
    e.preventDefault();
    setCartAdd(prev => [
      ...prev,
      {
        ...product,
        type: reason
      }
    ])
    toast.success("Product Cart Added Successfully")
  }

  return (
    <div className='bg-white p-4 rounded-lg flex flex-col gap-2 text-center h-[100%]'>
      <h4 className='text-md font-semibold'>{product?.title}</h4>
      <Image src={product?.cover} width={300} height={100} className='rounded-lg w-[100%] max-h-[100%]' alt={product?.title} style={{ objectFit: "cover" }} />
      <Link href={`store/${product?.id}`}>
        <div className='flex justify-between mt-2 mb-2'>
          <div className='flex items-center gap-1 text-sm text-gray-950 font-medium'><FaShoppingBag /> <span>{product?.stock} in Stock</span></div>
          <div className='flex items-center gap-1 text-sm text-gray-950 font-medium'><FaSackDollar /> <span>{product?.sellPrice} to buy</span></div>
        </div>
        <h3 className='text-md text-gray-900 mb-1.5'>{product?.description?.slice(0, 80)}</h3>
      </Link>
      <hr className='text-gray-200' />
      <div className='flex justify-evenly mt-3'>
        <button onClick={(event) => AddtoCart(event, "buy")} className='bg-purple-700 flex items-center gap-2 w-26 px-2 py-1.5 rounded-sm text-md text-white hover:bg-purple-600 transition justify-center'><FaCartPlus />to Buy</button>
        <button onClick={(event) => AddtoCart(event, "rent")} className='bg-purple-700 flex items-center gap-2 w-26 px-2 py-1.5 rounded-sm text-md text-white hover:bg-purple-600 transition justify-center'><FaCartPlus />to Rent</button>
      </div>
    </div>
  )
}

export default BooksCard