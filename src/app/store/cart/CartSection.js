"use client"
import CartItems from '@/components/OrderDetails/CartItems'
import CartTotal from '@/components/OrderDetails/CartTotal'
import PaymentFrom from '@/components/OrderDetails/PaymentFrom'
import ProductAddCart from '@/hooks/ProductAddCart'
import React, { useState } from 'react'

const CartSection = () => {
    const { cartAdd } = ProductAddCart();
    const [isFromShow, setIsFromShow] = useState(false)
    const handleCheckout = () => {
        setIsFromShow(true)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4'>
            {/* cart items */}
            <div >

                {
                    cartAdd.length > 0 ? <CartItems cartAdd={cartAdd} /> : <div className='bg-white text-center h-46 rounded-lg text-red-500 flex items-center justify-center'>Product Cart Not Added</div>
                }
            </div>
            {/* cart total */}
            <div>
                {
                    cartAdd.length > 0 ? <CartTotal cartAdd={cartAdd} handleCheckout={handleCheckout} /> : <div className='bg-white h-46 rounded-lg text-center text-red-500 flex items-center justify-center'>Product Cart Not Added</div>
                }
            </div>
            {/* payment from */}
            <div>
                {
                    isFromShow === true ? <PaymentFrom /> : <div className='bg-white h-46 rounded-lg text-red-500 flex items-center text-center justify-center'>Payment From Not Found! Before Click Checkout Button Than Show From</div>
                }
            </div>
        </div>
    )
}

export default CartSection