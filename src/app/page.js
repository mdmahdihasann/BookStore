import Image from "next/image";
import backgroundImaged from "../../public/Background.webp"
import { BsBrowserEdge } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col relative justify-center items-center h-screen">
        <Image src={backgroundImaged} alt="Book image" fill sizes="100vw" style={{ objectFit: "cover" }} />
        <div className="bg-white absolute w-72 h-52 sm:w-100 rounded-lg flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 justify-center">
            <BsBrowserEdge className="text-3xl" />
            <h2 className="text-2xl font-semibold">Litloop</h2>
          </div>
          <Link href={"/store"} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Take me to the store
          </Link>
        </div>


      </div>

    </>
  );
}
