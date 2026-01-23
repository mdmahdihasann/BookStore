"use client"
import ProductAddCart from "@/hooks/ProductAddCart";
import Image from "next/image";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const CartItems = ({ cartAdd }) => {
  const { setCartAdd } = ProductAddCart();
  const handleDelete = (itemToDelete) => {
    const updatedCart = cartAdd?.filter(item => item.id !== itemToDelete.id);
    setCartAdd(updatedCart)
    toast.info(`${itemToDelete.title} removed from cart`);
  }
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
      <h3 className="font-semibold text-lg">Product Items</h3>
      {
        cartAdd?.map(cartData => (
          <div key={cartData.id} className='bg-gray-200 rounded-lg p-4 flex flex-row justify-between items-center'>
            <div className="flex gap-2">
              <div>
                <Image src={cartData.cover} height={50} width={50} className="rounded-lg" alt={cartData?.title}/>
              </div>
              <div>
                <h4 className='text-lg font-semibold'>{cartData?.title}</h4>
                <p className='text-sm font-medium'>Price: {cartData?.type === "buy" ? cartData?.sellPrice : cartData?.rentPrice}$</p>
                <p className='text-sm font-medium'>Type:  {cartData?.type}</p>
              </div>
            </div>
            {/* action */}
            <div>
              <button onClick={() => handleDelete(cartData)} className="w-9 h-9 bg-white text-center justify-center flex flex-row items-center rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition"><RiDeleteBin5Fill className="text-lg" /></button>
            </div>
          </div>
        ))
      }

    </div>

  )
}

export default CartItems