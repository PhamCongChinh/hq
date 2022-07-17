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
        <Header />
        {children}
    </>
)

export default Layout