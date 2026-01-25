import Image from 'next/image'
import { FaLocationArrow } from "react-icons/fa6";

const Comments = ({Profile}) => {
    return (
        <div className='bg-white p-3 rounded-xl mt-4'>
            <div className='flex items-center gap-2'>
                <Image src={Profile} width={36} height={36} alt='title' className='rounded-full h-[36px]' style={{ objectFit: "cover" }} />
                <div className='bg-gray-100 w-full px-2 py-1 rounded-lg border-gray-200 border'>
                    <p className='text-[12px] font-semibold'>Mahdi Hasan</p>
                    <p className='text-[12px] font-medium'>This is the best book in world</p>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-between w-full bg-purple-100 border border-purple-200 rounded-md pr-2 mt-4">
                <input
                    type="text"
                    className='w-full text-sm py-2 px-3 bg-transparent outline-none focus:outline-none focus:ring-0 rounded-sm'
                    placeholder="Search books, discussions..."
                />
                <button >
                    <FaLocationArrow className='text-lg' />
                </button>
            </div>
        </div>
    )
}

export default Comments