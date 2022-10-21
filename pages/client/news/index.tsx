import type { NextPage } from 'next'

import type { ReactElement } from 'react'
import Layout from '../../../components/Layout'
import type { NextPageWithLayout } from '../../_app'

import Image from 'next/image'
import logo from '../public/images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS } from '@fortawesome/free-solid-svg-icons'

const News: NextPageWithLayout = () => {
    return (
        <main>
            <div className="flex">
                <div className="grow h-12 justify-center">
                    <div className="divide-y divide-dashed">
                        About
                    </div>
                </div>
            </div>
        </main>
    )
}

News.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title="Tin tức">
            {page}
        </Layout>
    )
}

export default News
