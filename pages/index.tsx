import type { NextPage } from 'next'

import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'

import Image from 'next/image'
import logo from '../public/images/logo.png'

const Home: NextPageWithLayout = () => {
    return (
        <div>
            <main>
                <div className="flex">
                    <div className="flex-none w-14 h-14">
                        01
                    </div>
                    <div className="grow h-14">
                        <h1 className="text-3xl font-bold">
                            Hello world!
                        </h1>
                        <Image src={logo} alt="Logo" width={100} height={100} priority/>
                    </div>
                    <div className="flex-none w-14 h-14">
                        03
                    </div>
                </div>
            </main>
        </div>
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
