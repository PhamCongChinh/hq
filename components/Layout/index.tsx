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
            <div className="header-content">
                <h1>
                    <span className="light">Stripe Sample</span>
                    <br />
                    Next.js, TypeScript, and Stripe
                </h1>
            </div>
        </header>
        <Header/>
        {children}
    </>
)

export default Layout