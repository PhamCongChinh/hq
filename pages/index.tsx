import type { NextPage } from 'next'

import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'

import Image from 'next/image'
import logo from '../public/images/logo.png'

const Home: NextPageWithLayout = () => {
    return (
        <main>
            <div className="flex">
                <div className="grow h-12 justify-center">
                    <div className="divide-y divide-dashed">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home
