import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from './Header'
import Footer from './Footer'

interface Props {
    children: React.ReactNode,
    title?: string
}

const Layout = ({
    children,
    title = 'TypeScript Next.js Stripe Example',
}: Props) => (
    <>
        <div className='flex flex-row'>
            <div className="basis-2/12 bg-white shadow-xl">
                <h1 className='text-center font-bold text-xl py-1 border-b-2'>Admin</h1>
                <ul className="list-disc text-black">
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                    <li className='pl-3'>Now this is </li>
                </ul>
            </div>
            <div className="basis-10/12">
                <Header/>
                <div className='bg-slate-100'>
                    {children}
                </div>
                
            </div>
        </div>
        
        
        <Footer/>
    </>
)

export default Layout