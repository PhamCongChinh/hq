import Layout from "../../../components/LayoutDashboard";
import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../../_app'
import Link from "next/link";

import { urlGetAllCategories } from "../../../lib/api";
import { fetcher } from '../../../lib/fetcher'
import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router";
import { deleteCategory } from "../../../service/category";

const Category: NextPageWithLayout = () => {
    const router = useRouter()
    const { data, error } = useSWR(urlGetAllCategories, fetcher)
    const [removeModal, setRemoveModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)

    const [result, setResult] = useState(Object)
    
    const updateItem = async (item:any) => {
        setResult(item)
        console.log(item)
        
    }

    const removeItem = async (data: any) => {
        console.log(data)
        deleteCategory(data)
    }
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    return (
        <div>
            <div>
                <Link href={'/dashboard/categories/create'}>
                    <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-2 px-4 border border-gray-400 rounded shadow">Thêm mới</a>
                </Link>
            </div>
            <div className="w-full p-4">
                <h1>Danh sách chuyên mục</h1>
                <table className="w-full bg-white box-border">
                    <thead className="bg-slate-300 text-center font-bold">
                        <tr className="">
                            <td>Ảnh</td>
                            <td>Tên</td>
                            <td>Slug</td>
                            <td>Chỉnh sửa</td>
                            <td>Xóa</td>
                        </tr>
                    </thead>
                    <tbody>
                    {data ? (
                        data.map((item:any) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <Image src={'/images/'+ item.image + ''} alt="Logo" width={75} height={75} priority />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.slug}</td>
                                    <td>
                                        <button className="bg-orange-500 rounded px-2" 
                                            onClick={() => {
                                                updateItem(item)
                                                setUpdateModal(true)
                                            }}>Update</button>
                                    </td>
                                    <td>
                                        <button className="bg-red-500 rounded px-2" 
                                            onClick={() => {
                                                setResult(item)
                                                setRemoveModal(true)
                                            }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <div>Loading...</div>
                    )}
                    </tbody>
                </table>
            </div>
            {updateModal && 
                <div className="bg-slate-400 w-full fixed inset-0 z-50 opacity-80 rounded">
                    <div className="flex h-screen justify-center items-center">
                        <div className="h-48 w-96 bg-white rounded">
                            <div className="text-center">Cập nhật</div><hr/>
                            <div>
                                <label htmlFor="">Tên : <span><input type="text" className="border-2" defaultValue={result.name}/></span></label><br/>
                                <label htmlFor="">Slug : <span><input type="text" className="border-2" defaultValue={result.slug}/></span></label><br/>
                                <label htmlFor="">Ảnh : <span><input type="file" className="border-2" defaultValue={result.image}/></span></label><br/>
                            </div>
                            <hr/>
                            <button className="bg-red-700 rounded px-4 py-2 text-white">Save</button>
                            <hr/>
                            <button className="rounded px-4 py-2 text-white bg-green-400" 
                                onClick={() => setUpdateModal(false)}>Đóng</button>
                        </div>
                    </div>
                </div>
            }
            {removeModal && 
                <div className="bg-slate-400 w-full fixed inset-0 z-50 opacity-80 rounded">
                    <div className="flex h-screen justify-center items-center">
                        <div className="h-36 w-96 bg-white rounded">
                            <div className="">
                                <h1 className="p-5 text-center text-lg">Bạn có muốn xóa không?</h1>
                            </div>
                            <div className="flex justify-center">
                                <button className="rounded px-4 py-2 text-white bg-green-600 w-20 mr-2"
                                onClick={() => {
                                    removeItem(result)
                                    setRemoveModal(false)
                                }}>Có</button>
                                <button className="rounded px-4 py-2 text-white bg-red-600 w-20 ml-2"
                                onClick={() => setRemoveModal(false)}>Không</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
Category.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Category