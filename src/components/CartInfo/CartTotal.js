import React from 'react'

const CartTotal = ({cartAdd, handleCheckout}) => {
  const BuyPrice = cartAdd.filter(item=>item.type === "buy").reduce((sum, item)=> sum + item.sellPrice, 0);
  const RentPrice = cartAdd.filter(item=>item.type === "rent").reduce((sum, item)=> sum + item.rentPrice, 0);
  const totalPrice = BuyPrice + RentPrice;
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-3">
      <h3 className="font-semibold text-lg">Cart Summary</h3>
      <p>Total Items: {cartAdd?.length}</p>
      <p>Total Price: {totalPrice}$</p>
      <button onClick={handleCheckout} className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
        Checkout
      </button>
    </div>
  )
}

export default CartTotal;