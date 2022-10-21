import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import type { NextPageWithLayout } from './_app'
import Image from 'next/image'
import { Category } from '../lib/interfaces'

//Icon
//import { getAll } from '../service/category'
import { GetStaticProps } from 'next'
import axios from 'axios'

type Props = {
    items: Category[],
}

const Home: NextPageWithLayout<Props> = ({items}: Props) => {
    return (
        <div className=''>
            <div className='grid grid-cols-4'>
                {items.map((item) => {
                    return <div key={item.id} className='border cursor-pointer'>
                        <div className='relative h-64'>
                            <Image src={`/images/${item.image}`} alt={item.name} priority layout='fill'/>
                        </div>
                        <div><h1 className='text-lg font-semibold p-2'>{item.name}</h1></div>
                    </div>
                })}
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    //const items = await getAll()
    const result = await axios.get('http://localhost:3000/api/categories')
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