import Link from "next/link"
import "./top-header.css"
const TopHeader = () => {

    return <div className="flex just justify-between bg-red-600 ">
        <div className="wrapper-hotline pl-5  h-10 flex items-center  bg-black ">
        <p className=" text-white text-sm font-bold">Hotline: <strong className=" text-base"><Link href="tel:0705551668">0705551668</Link></strong></p>
        </div>
       <ul className="flex text-white text-base items-center  h-10 pr-5 ">
        <li>
            <Link href="">Dang ki dai ly</Link>
        </li>
         <li>
            <Link href="">Y kien dong gop</Link>
        </li>
       </ul>
    </div>
}

export default TopHeader