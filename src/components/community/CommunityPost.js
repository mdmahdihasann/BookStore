import Image from 'next/image'
import Profile from "../../../public/129417.webp"
import { BiSolidMessageDetail } from "react-icons/bi";
import { GoHeartFill } from "react-icons/go";

const CommunityPost = () => {
  return (
    <div className='bg-purple-300 rounded-xl p-6'>
        <div className='flex gap-3 items-center mb-3'>
            <Image src={Profile} width={80} height={80} alt='title' className='rounded-full'/>
            <div>
              <h5 className='text-lg font-semibold text-gray-900'>Mahdi Hasan</h5>
              <p className='text-sm font-medium text-gray-600'>3h ago</p>
            </div>
        </div>
        <div className='mb-4'>
          <h4 className='text-xl font-semibold text-gray-900 mb-2'>Just finished 'atomic habits' - fantastic read!</h4>
          <Image src={Profile} width={80} height={80} alt='title' className='w-100 rounded-lg'/>
        </div>
        <hr className='text-gray-200'/>
        <div className='flex items-center gap-6 mt-2'>
          <div className='flex items-center gap-1 text-gray-900 hover:text-purple-600 transition'><BiSolidMessageDetail /> 12 Comments</div>
          <div className='flex items-center gap-1 text-gray-900 hover:text-purple-600 transition'><GoHeartFill /> 45 Liks</div>
        </div>
    </div>
  )
}

export default CommunityPost