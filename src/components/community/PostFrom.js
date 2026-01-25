import Image from "next/image"
import Profile from "../../../public/129417.webp"
import Field from "../common/Field"
import { TbPhotoFilled } from "react-icons/tb";

const PostFrom = () => {
    return (
        <div> 
            <h4 className='text-xl text-center font-semibold mb-4'>Create Post</h4>
            <hr className='text-gray-300 mb-5' />
            <div className='flex gap-2.5 items-center mb-6'>
                <Image src={Profile} width={70} height={70} alt='title' className='rounded-full w-[40px] h-[40px]' style={{ objectFit: "cover" }} />
                <div>
                    <h5 className='text-[15px] font-semibold text-gray-900 leading-4.5'>Mahdi Hasan</h5>
                    <p className='text-[13px] font-medium text-gray-500'>User</p>
                </div>

            </div>
            <Field>
                <textarea className="w-full border border-gray-300 rounded-lg p-2" rows={4} placeholder="what’s on your mind?">

                </textarea>
            </Field>
            <div className="bg-gray-300 h-[160px] rounded-lg mt-4">

            </div>
            <hr className='text-gray-300 my-5' />
            <div className="flex items-center justify-between">
                <button className="w-[126px] flex items-center gap-1 justify-center text-center bg-white rounded-sm px-4 py-1.5 text-black border border-gray-500 hover:text-white hover:bg-purple-500 transition cursor-pointer"><TbPhotoFilled/> Photo</button>
                <button className="w-[126px] text-center bg-purple-600 rounded-sm px-4 py-1.5 text-white hover:bg-purple-500 transition cursor-pointer">Create Post</button>
            </div>
        </div>
    )
}

export default PostFrom