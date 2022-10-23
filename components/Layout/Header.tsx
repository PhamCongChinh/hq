import Link from "next/link"
import Image from 'next/image'
import logo from '../../public/static/logo.png'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = (): JSX.Element => {
    return(
        <header className="">
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 py-1">
                <div className="flex flex-wrap justify-between items-center container mx-auto">
                    <div>
                        <Link href={'/'}><a className="text-xs text-blue-600 font-semibold">Công ty TNHH thương mại và sản xuất HQ</a></Link>
                    </div>
                    <div className="">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-blue-600"/>
                    </div>
                </div>
            </nav>

            <nav className="bg-white">
                <div className="container mx-auto mt-8">
                    <div className="flex flex-row">
                        <div className="basis-1/5">
                            <Image src={logo} alt="Logo" width={100} height={100} className=""/>
                        </div>
                        <div className="basis-3/5 self-center">
                            <input tabIndex={1} type="text" className=" block w-full text-gray-900 bg-gray-50 rounded-sm border border-gray-300"></input>
                        </div>
                        <div className="basis-1/5">
                            <Image src={logo} alt="Logo" width={100} height={100}/>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="bg-blue-500">
                <div className="container mx-auto ">
                    <div className="hidden md:flex py-3 text-white font-semibold">
                        <ul className="flex">
                            <li className="pr-3">
                                <Link href={'/'} aria-current="page">Trang chủ</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/client/introduce'}>Giới thiệu</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/client/san-pham'} >Sản phẩm</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/'}>Tin tức</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/'}>Khách hàng</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/'}>Nhà sản xuất</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/'}>Tuyển dụng</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/'}>Dịch vụ</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/'}>Liên hệ</Link>
                            </li>
                            <li className="px-3">
                                <Link href={'/login'}>Login</Link>
                            </li>
                            <li className="px-3">
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
//flex flex-wrap justify-between items-center mx-auto max-w-6xl px-4 md:px-6 py-1