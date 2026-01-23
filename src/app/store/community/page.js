import React from 'react'
import CommunitySection from './CommunitySection'

const page = () => {
  return (
    <>
      <div className='bg-white rounded-lg p-4'>
        <h4 className='text-xl font-semibold text-gray-900 mb-1'>Community</h4>
        <p className='text-sm font-medium text-gray-500 mb-3'>Connect with book lovers around the world</p>
        <hr className='text-gray-200 mb-4' />
        <CommunitySection />
      </div>

    </>
  )
}

export default page