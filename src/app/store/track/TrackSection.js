import React from 'react'

const TrackSection = () => {
  return (
    <div className='bg-white p-4 rounded-lg'>
        <h4 className='text-3xl text-gray-900 mb-2 font-semibold'>Thank You, for your order!</h4>
        <h6 className='text-lg text-gray-800 mb-4'>Your Order ID is: <span className='font-bold'>a23iiyi423</span></h6>
        <div className='bg-gray-300 rounded-lg p-4'>
            <p className='text-md text-gray-800 h-100'>Order tracking will come here....</p>
        </div>
    </div>
  )
}

export default TrackSection