import Image from 'next/image'
import Link from 'next/link'
const ListProducts = (props:any): JSX.Element => {
    let items = props.data
    return (
        <>
            <div className='grid grid-cols-4'>
                {items.map((item:any) => {
                    return (
                        <Link href={`/client/san-pham/${item.slug}`} key={item.id}>
                            <a>
                                <div  className='border cursor-pointer'>
                                    <div className='relative h-64'>
                                        <Image src={`/images/${item.image_link}`} alt={item.name} priority layout='fill'/>
                                    </div>
                                    <div><h1 className='text-lg font-semibold p-2'>{item.name}</h1></div>
                                    <div><p className='text-lg font-semibold p-2'>{item.status}</p></div>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </>
    );
}

export default ListProducts;