"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import Field from '../common/Field';
import { useRouter } from 'next/navigation';
import ProductAddCart from '@/hooks/ProductAddCart';

const PaymentFrom = () => {
  const router = useRouter();
  const {setCartAdd} = ProductAddCart();
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const onSubmit = (formData) => {
    console.log(formData)
    setCartAdd(null)
    router.push('/store/track')
  }
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Customer Information</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Field error={errors.fullName}>
            <input {...register('fullName', { required: "Full Name is required" })} type="text" id='fullName' placeholder="Full Name" className="p-2 border rounded hover:border-purple-500 text-sm w-full" />
          </Field>

          <Field error={errors.phone}>
            <input {...register('phone', { required: "Phone is required" })} type="tel" id='phone' placeholder="Phone Number" className="p-2 border rounded hover:border-purple-500 text-sm w-full" />
          </Field>

          <Field error={errors.city}>
            <input {...register('city', { required: "City is required" })} type="text" id='city' placeholder="City" className="p-2 border rounded hover:border-purple-500 text-sm w-full" />
          </Field>

          <Field error={errors.country}>
            <select {...register('country', { required: "Country is required" })} id='country' className="p-2 border rounded hover:border-purple-500 text-sm w-full">
              <option>Bangladesh</option>
              <option>India</option>
              <option>Other</option>
            </select>
          </Field>

          <Field error={errors.address}>
            <textarea {...register('address', { required: "Address is required" })} id='address' placeholder="Full Address" className="p-2 border rounded col-span-1 md:col-span-2 hover:border-purple-500 w-full"></textarea>
          </Field>
        </div>

        <h3 className="text-xl font-semibold mb-4">Payment Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field error={errors.cd_name}>
            <input {...register('cd_name', { required: "Cardholder Name is required" })} type="text" id='cd_name' placeholder="Cardholder Name" className="p-2 border rounded hover:border-purple-500 text-sm w-full" />
          </Field>

          <Field error={errors.cd_number}>
            <input {...register("cd_number", { required: "Cardholder Number is required" })} id='cd_number' type="text" placeholder="Card Number" className="p-2 border rounded hover:border-purple-500 text-sm w-full" />
          </Field>

          <Field error={errors.expiry_date}>
            <input {...register("expiry_date", { required: "Expiry date is required" })} id='expiry_date' type="month" placeholder="Expiry Date" className="p-2 border rounded hover:border-purple-500 text-sm w-full" />
          </Field>

          <Field error={errors.ccv}>
            <input {...register("ccv", { required: "CCV is required" })} type="password" placeholder="CVV" className="p-2 border rounded hover:border-purple-500 text-sm w-full" />
          </Field>

          <Field error={errors.atm_card}>
            <select {...register("atm_card", { required: "ATM Card is required" })} id='atm_card' className="p-2 border rounded ccol-span-1 md:col-span-2 hover:border-purple-500 text-sm w-full">
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Bkash</option>
              <option>Rocket</option>
            </select>
          </Field>

        </div>
        <Field>
          <button  className="mt-6 w-full bg-purple-700 text-white py-2 rounded-lg text-lg font-semibold hover:bg-purple-600 transition">
            Pay Now
          </button>
        </Field>

      </form>


    </div>
  )
}

export default PaymentFrom