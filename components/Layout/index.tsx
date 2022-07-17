import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from './Header'

interface Props {
    children: React.ReactNode,
    title?: string
}

const Layout = ({
    children,
    title = 'TypeScript Next.js Stripe Example',
}: Props) => (
    <>
        <header>
            <div className="w-full fixed z-10 bg-gray-50 pt-2 border px-4 md:px-0">
                <div className="flex mx-auto max-w-6xl justify-between">
                    {/**Tab */}
                    <div className="md:hidden flex cursor-pointer">
                        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <Link href="/" >
                        <a className="text-xs text-blue-500 font-normal cursor-pointer">Công ty TNHH thương mại và sản xuất HQ</a>
                    </Link>
                    <div>
                        <Link href="/shop/cart">
                            <a>
                                <span className="relative inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 18 18" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <span className="absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">

                                    </span>
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500">
                <div className="hidden md:flex mx-auto max-w-6xl py-3 text-white font-semibold">
                    <ul className="flex">
                        <li className="pr-5">
                            <Link href="/">
                                <a>Trang chủ</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/gioi-thieu.html">
                                <a>Giới thiệu</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/san-pham.html">
                                <a>Sản phẩm</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/tin-tuc.html">
                                <a>Tin tức</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/khach-hang.html">
                                <a>Khách hàng</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/nha-san-xuat.html">
                                <a>Nhà sản xuất</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/tuyen-dung.html">
                                <a>Tuyển dụng</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/dich-vu.html">
                                <a>Dịch vụ</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/lien-he.html">
                                <a>Liên hệ</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <Header />
        {children}
    </>
)

export default Layout