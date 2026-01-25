"use client"
import Image from 'next/image'
import Profile from "../../../public/129417.webp"
import { BiSolidMessageDetail } from "react-icons/bi";
import { GoHeartFill } from "react-icons/go";
import Comments from './Comments';
import { useState } from 'react';


const CommunityPost = () => {
  const [showComment, setShowComment]= useState(false)
  return (
    <div className='bg-sky-100 rounded-xl p-6'>
      <div className='flex gap-2.5 items-center mb-3'>
        <Image src={Profile} width={70} height={70} alt='title' className='rounded-full w-[40px] h-[40px]'  style={{ objectFit: "cover" }} />
        <div>
          <h5 className='text-[15px] font-semibold text-gray-900 leading-4.5'>Mahdi Hasan</h5>
          <p className='text-[13px] font-medium text-gray-500'>3h ago</p>
        </div>
      </div>
      <div className='mb-4'>
        <h4 className='text-xl font-semibold text-gray-900 mb-2 leading-6'>Just finished 'atomic habits' - fantastic read!</h4>
        <Image src={Profile} width={80} height={80} alt='title' className='w-[100%] rounded-lg'/>
      </div>
      <hr className='text-gray-300' />
      <div className='flex items-center gap-6 mt-2.5'>
        <div className='flex items-center gap-1 text-gray-900 hover:text-purple-600 transition cursor-pointer text-sm leading-3' onClick={()=>setShowComment(!showComment)}><BiSolidMessageDetail /> 12 Comments</div>
        <div className='flex items-center gap-1 text-gray-900 hover:text-purple-600 transition cursor-pointer text-sm leading-3'><GoHeartFill /> 45 Liks</div>
      </div>
      {/* comments */}
      {
        showComment && <Comments Profile={Profile}/>
      }
      
    </div>
  )
}

export default CommunityPost