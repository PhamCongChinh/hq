import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar';

interface Props {
    children: React.ReactNode,
    title?: string
}

const Layout = ({
    children,
    title = 'TypeScript Next.js Stripe Example',
}: Props) => (
    <div className='w-full'>
        <div className='flex flex-row w-full'>
            <div className='md:basis-1/5 hidden md:flex'><Sidebar/></div>
            <div className='md:basis-4/5 w-full'>
                <div><Header/></div>
                <div className='p-2 bg-slate-100'>{children}</div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
)

export default Layout

/**
 * <div className='flex flex-col md:flex-row'>
            <div className="md:grid basis-2/12 bg-white shadow-xl">
                <Sidebar/>
            </div>
            <div className="basis-10/12 bg-slate-100">
                <Header/>
                <div className='p-5'>
                    {children}
                </div>
            </div>
        </div>
 */