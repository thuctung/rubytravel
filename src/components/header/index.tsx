import Image from "next/image"

const Header = () => {
    return <div className="padding-common">
        <div className="">
            <Image src="/logo.jpg" width={90} height={90} alt="logo"/>
        </div>
    </div>
}

export default Header