import { BsBrowserEdge } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 h-3/12">
        <div className='flex items-center gap-1.5 bg-purple-600 px-4 py-2 rounded-lg mb-0.5'>
           <BsBrowserEdge className="text-3xl text-white" />
           <h4 className='text-2xl font-semibold text-white'>LitLoop</h4>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between md:flex-col md:gap-2">
            <NavLinks/>
        </div>

        <div className='flex h-[48px] bg-white text-sm rounded-lg p-3 items-center gap-2 hover:bg-sky-100 hover:text-purple-600'>
            <TbLogout2 className="w-5 h-5"/>
            <p className=' hidden md:block'>Logout</p>
        </div>
    </div>
  )
}

export default Sidebar