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
    <>
        <div className='flex flex-row'>
            <div className="basis-2/12 bg-white shadow-xl">
                <Sidebar/>
            </div>
            <div className="basis-10/12 bg-slate-100">
                <Header/>
                <div>
                    {children}
                </div>
            </div>
        </div>
        <Footer/>
    </>
)

export default Layout