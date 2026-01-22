"use client";
import React from 'react'
import BooksCard from './BooksCard'
import { products } from "@/database/database"

const Bookslist = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-4'>
      {
        products.map((product) => (
          <BooksCard key={product.id} product={product} />
        ))
      }

    </div>
  )
}

export default Bookslist