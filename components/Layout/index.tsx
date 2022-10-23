import React, { useContext } from 'react';
import Head from 'next/head';
import Header from './Header'
import Footer from './Footer';
import Sidebar from './Sidebar';
import { GetStaticProps } from 'next';
//import { getAll } from '../../service/category';
//import { Category } from '../../lib/interfaces';

import useSWR from 'swr';
const fetcher = (url:string) => fetch(url).then((res) => res.json())

interface Props {
    children: React.ReactNode,
    title?: string,
    //items?: Category[],
    result?:any
}

const Layout = ({
    children,
    title = ''
}: Props) => {

    const { data, mutate, error } = useSWR(`/api/categories`, fetcher)

    return(
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <Header/>
        <div className='container mx-auto flex flex-col md:flex-row my-5'>
            <div className='basis-1/5'>
                <Sidebar data={data}/>
            </div>
            <main className='basis-4/5'>
                {children}
            </main>
        </div>
        <Footer/>
    </>
    )
}

export default Layout