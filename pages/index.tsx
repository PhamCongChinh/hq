import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import type { NextPageWithLayout } from './_app'

import { CONSTANTS } from '../lib/constants'
import { Product } from '../lib/interfaces/IProduct'
import ListProducts from '../components/ProductsList'
import axios from 'axios'

type Props = {
    items: Product[],
    constant: CONSTANTS[]
}

const Home: NextPageWithLayout<Props> = ({items, constant}: Props) => {
    console.log(constant)
    return (
        <ListProducts data={items}/>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await axios.get('http://localhost:3000/api/products')
    const response = result.data
    if (!response) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            items: response
        },
        revalidate: 10,
    }
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={`${page.props.constant}`}>
            {page}
        </Layout>
    )
}

export default Home