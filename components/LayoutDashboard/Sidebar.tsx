import Link from 'next/link';
import MenuBarResponsive from '../MenuBarResponsive';

const Sidebar = () => {
    return (
        <div className="w-full h-full bg-white">
            <MenuBarResponsive/>
            <div className="overflow-y-auto py-4 px-3 text-black-500">
                <ul className="space-y-2">
                    <li className='cursor-pointer'>
                        <Link href={'/dashboard'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 hover:ml-5">Dashboard</span>
                        </Link>
                    </li>
                    <hr/>
                    <li className='cursor-pointer'>
                        <Link href={'/dashboard/users'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 hover:ml-5">Người dùng</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link href={'/dashboard/categories'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 hover:ml-5">Chuyên mục</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link href={'/dashboard/products'} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 hover:ml-5">Sản phẩm</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar