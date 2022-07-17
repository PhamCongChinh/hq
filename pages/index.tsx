import type { NextPage } from 'next'

import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'

import Image from 'next/image'
import logo from '../public/images/logo.png'

const Home: NextPageWithLayout = () => {
    return (
            <main>
                <div className="flex justify-center">
                    <div className="grow h-14 justify-center">
                        <Image src={logo} alt="Logo" width={100} height={100} priority/>
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
