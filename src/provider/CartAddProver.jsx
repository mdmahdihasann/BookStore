"use client"
import { CartAddContext } from '@/context'
import { useState } from 'react'

const CartAddProver = ({ children }) => {
    const [cartAdd, setCartAdd] = useState([]);
    return (
        <CartAddContext.Provider value={{ cartAdd, setCartAdd }}>
            {children}
        </CartAddContext.Provider>
    )
}

export default CartAddProver