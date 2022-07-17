import Link from "next/link"

const Header = () => {
    return(
        <div className="bg-blue-500 h-8 shadow-md text-white">
            <Link href={'/'}>Home</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/dashboard'}>Dashboard</Link>
        </div>
    )
}
export default Header