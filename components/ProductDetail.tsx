import Link from 'next/link';
import Image from 'next/image'
import Lightbox from 'react-image-lightbox'
import { useState } from 'react'

const DetailProduct = (props: any): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const item = props.data[0]
    return (
        <div className="text-gray-700 leading-6">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="md:col-span-1">
                    <div className="cursor-pointer relative h-64" onClick={() => setIsOpen(true)}>
                        <Image src={`/images/${item.image_link}`} alt={item.name} priority layout='fill' />
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={`/images/${item.image_link}`}
                        onCloseRequest={() => setIsOpen(false)}
                    />
                )}

                <div className="md:col-span-1">
                    <div className="border-b pb-3">
                        <h1 className="text-2xl">{item.name}</h1>
                    </div>
                    <div className="pt-3">
                        <p className="text-sm">Mã hàng : {item.code}</p>
                        <p className="text-sm">Giá : <span className="font-semibold text-red-500">Liên hệ</span></p>
                    </div>
                    <div className="pt-3">
                        <p className="text-sm">Bảo hành : 12 tháng</p>
                        <p className="text-sm">Giao hàng</p>
                        <ul className="text-sm">
                            <li className="">- Giao hàng</li>
                            <li>- Thời gian làm việc từ <span className="text-blue-500">8h30</span> đến <span className="text-blue-500">18h30</span> hằng ngày</li>
                        </ul>
                    </div>
                    <div className="pt-3">
                        <p className="text-sm">Liên hệ mua hàng:</p>
                        <p className="font-semibold text-sm text-gray-700">Nam Định : <span className="text-red-500">0965 990 555</span></p>
                        <p className="font-semibold text-sm text-gray-700">Hà Nội : <span className="text-red-500">0979 342 589</span></p>
                    </div>
                    <div className="flex py-4">
                        <div className="flex-1 pr-1">
                            <button  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Thêm giỏ hàng
                            </button>
                        </div>
                        <div className="flex-1 pl-1">
                            <Link href="/shop/cart">
                                <a>
                                <button  className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Mua ngay
                                </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border-b pb-2">
                    <p className="text-gray-600 font-semibold">Thông tin chi tiết</p>
                </div>
                <div className="py-4 text-gray-800 text-sm leading-6" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
        </div>
    );
}

export default DetailProduct;