"use client"
import ProductAddCart from '@/hooks/ProductAddCart';
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify';

const BooksCardDetails = ({ product }) => {
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
        <div className='p-4 rounded-lg flex flex-col gap-2 text-center h-[100%] items-center'>

            <Image src={product?.cover} width={300} height={100} className='rounded-lg w-[50%] max-h-[100%]' alt={product?.title} style={{ objectFit: "cover" }} />
            <h4 className='text-md font-semibold'>{product?.title}</h4>
            <h3 className='text-md text-gray-900 mb-1.5'>{product?.description}</h3>
            <p>{product?.genre} - {product?.pages} pages - {product?.stock} pieces are in stock</p>
            <div className='flex flex-col sm:flex-row justify-evenly mt-3 gap-3'>
                <button onClick={(event) => AddtoCart(event, "buy")} className='bg-purple-700 flex items-center gap-2 w-full px-4 py-1.5 rounded-sm text-md text-white hover:bg-purple-600 transition justify-center'>Buy this book for {product?.sellPrice}$</button>
                <button onClick={(event) => AddtoCart(event, "rent")} className='bg-purple-700 flex items-center gap-2 w-full px-4 py-1.5 rounded-sm text-md text-white hover:bg-purple-600 transition justify-center'>Rent this book for {product?.rentPrice}$</button>
            </div>
        </div>
    )
}

export default BooksCardDetails