import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import { Product } from '../lib/interfaces/IProduct'

import { GetStaticProps } from 'next'
import axios from 'axios'
import ListProducts from '../components/ListProducts'

type Props = {
    items: Product[],
}

const Home: NextPageWithLayout<Props> = ({items}: Props) => {
    return (
        <div className=''>
            <ListProducts data={items}/>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await axios.get('http://localhost:3000/api/products')
    const items = result.data
    if (!items) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            items: items
        },
        revalidate: 10,
    }
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title='Công ty TNHH thương mại và sản xuất HQ'>
            {page}
        </Layout>
    )
}

export default Home