import Link from "next/link"
import Image from 'next/image'
import getConfig from 'next/config'
import logo from '../../public/images/logo.png'
const Header = () => {
    //const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
    //console.log(publicRuntimeConfig.staticFolder)
    return(
        <header>
            <nav className="bg-slate-200">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                        <div className="flex items-center">
                            <Link href={'/'} >Công ty TNHH thương mại và sản xuất HQ</Link>
                        </div>
                        <div className="flex items-center">
                            <Link href={'/'}>Home</Link>
                            <Link href={'/'}>Home</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto">
                <Image src={logo} alt="Logo" width={100} height={100} priority/>
            </div>

            <nav className="bg-blue-500">
                <div className="container mx-auto shadow-md text-white py-3 px-4 max-w-screen-xl md:px-6 ">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <Link href={'/'} className="" aria-current="page">Trang chủ</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Giới thiệu</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Sản phẩm</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Tin tức</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Khách hàng</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Nhà sản xuất</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Tuyển dụng</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Dịch vụ</Link>
                            </li>
                            <li>
                                <Link href={'/login'}>Login</Link>
                            </li>
                            <li>
                                <Link href={'/dashboard'}>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header