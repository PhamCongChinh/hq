import Link from "next/link"
import Image from 'next/image'
import logo from '../../public/images/logo.png'
const Header = () => {
    return(
        <header>
            <div><Link href={'/'}>Home</Link></div>
            <div className="tablet:px-50">
                <Image src={logo} alt="Logo" width={100} height={100} priority/>
            </div>
            <div className="bg-blue-500 h-8 shadow-md text-white">
                <Link href={'/'}>Home</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/dashboard'}>Dashboard</Link>
            </div>
        </header>
        
    )
}
export default Header