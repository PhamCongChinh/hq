import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import type { ReactElement } from 'react'
import Layout from '../../../components/Layout'
import type { NextPageWithLayout } from '../../_app'

import Image from 'next/image'
import logo from '../public/images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { ParsedUrlQuery } from 'querystring'
import { Product } from '../../../lib/interfaces/IProduct'
import ItemProduct from '../../../components/ProductDetail'

interface Params extends ParsedUrlQuery {
    slug: string;
}
type Props = {
    product: Product[],
}
const ProductDetail: NextPageWithLayout<Props> = ({ product }: Props) => {
    //console.log(product)
    //const data = product.data
    return (
        <main>
            <ItemProduct data={product}/>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params!
    const { params } = context
    const res = await fetch(`http://localhost:3000/api/products/${slug}`)
    const product = await res.json()
    //console.log(product)
    //const result = await axios.get(`http://localhost:3000/api/products/${params.slug}`)
    //const items = result.data


    if (!product) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            product,
        },
        revalidate: 10,
    }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    //const result = await axios.get('http://localhost:3000/api/products')
    //const items = result.data
    let res = await fetch(`http://localhost:3000/api/products`)
    let data = await res.json()

    const paths = data.map((item: any) => {
        return {
            params: { slug: item.slug }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout title={`${page.props.product[0].name}`}>
            {page}
        </Layout>
    )
}

export default ProductDetail
