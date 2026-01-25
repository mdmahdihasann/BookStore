import { FaSearchPlus } from "react-icons/fa";
import PostFromPopup from "./PostFromPopup";
const CommunityHeader = () => {
    return (
        <div className="flex items-center gap-4 mb-4.5">
            <div className="bg-gray-200 rounded-sm flex gap-2 pr-1 items-center justify-between w-full">
                <input
                    type="text"
                    className='w-full py-2 px-4 bg-transparent outline-none focus:outline-none focus:ring-0'
                    placeholder="Search books, discussions..."
                />
                <button className='bg-purple-600 text-white cursor-pointer hover:bg-purple-500 px-2.5 rounded-sm h-8 w-9 text-sm'>
                    <FaSearchPlus  />
                </button>
            </div>
            <div>
                
                <PostFromPopup/>
            </div>
        </div>

    )
}

export default CommunityHeader