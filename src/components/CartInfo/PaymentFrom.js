import React from 'react'

const PaymentFrom = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Customer Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Full Name" className="p-2 border rounded hover:border-purple-500 text-sm" />
        <input type="tel" placeholder="Phone Number" className="p-2 border rounded hover:border-purple-500 text-sm" />
        <input type="text" placeholder="City" className="p-2 border rounded hover:border-purple-500 text-sm" />
        <select className="p-2 border rounded hover:border-purple-500 text-sm">
          <option>Bangladesh</option>
          <option>India</option>
          <option>Other</option>
        </select>
        <textarea placeholder="Full Address" className="p-2 border rounded col-span-1 md:col-span-2 hover:border-purple-500"></textarea>
      </div>

      <h3 className="text-xl font-semibold mb-4">Payment Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Cardholder Name" className="p-2 border rounded hover:border-purple-500 text-sm" />
        <input type="text" placeholder="Card Number" className="p-2 border rounded hover:border-purple-500 text-sm" />
        <input type="month" placeholder="Expiry Date" className="p-2 border rounded hover:border-purple-500 text-sm" />
        <input type="password" placeholder="CVV" className="p-2 border rounded hover:border-purple-500 text-sm" />
        <select className="p-2 border rounded ccol-span-1 md:col-span-2 hover:border-purple-500 text-sm">
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>Bkash</option>
          <option>Rocket</option>
        </select>
      </div>

      <button className="mt-6 w-full bg-purple-700 text-white py-2 rounded-lg text-lg font-semibold hover:bg-purple-600 transition">
        Pay Now
      </button>
    </div>
  )
}

export default PaymentFrom