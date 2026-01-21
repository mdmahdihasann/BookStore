import React from 'react'
import BooksCard from './BooksCard'

const Bookslist = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-2'>
        <BooksCard/>
        <BooksCard/>
        <BooksCard/>
    </div>
  )
}

export default Bookslist