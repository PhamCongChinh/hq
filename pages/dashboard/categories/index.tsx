import Layout from "../../../components/LayoutDashboard";
import { ReactElement, useState, useEffect } from 'react'
import type { NextPageWithLayout } from '../../_app'

import { fetcher } from '../../../lib/fetcher'
import useSWR from "swr";
import Image from "next/image";
//React hook form
import { useForm, SubmitHandler } from "react-hook-form"
//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";

type Category = {
    id: number,
    name: string,
    slug: string,
    image: string
}

const Category: NextPageWithLayout = () => {
    //const [pageIndex, setPageIndex] = useState(0)
    const { register, handleSubmit, reset } = useForm<Category>()
    const { data, mutate, error } = useSWR(`/api/categories`, fetcher)//, {refreshInterval: 1000}
    const [createModal, setCreateModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [removeModal, setRemoveModal] = useState(false)
    const [result, setResult] = useState<Category>()
    const [selectedImage, setSelectedImage] = useState(null)

    //Create
    const createItem: SubmitHandler<Category> = async (data) => {
        const formData = new FormData()
        const image = data.image[0]
        if (data.image.length > 0) {
            formData.append("image", image)
        }
        await axios.post('/api/upload-file', formData).then( res => {
            const body = {
                name: data.name,
                slug: data.slug,
                image: res.data
            }
            axios.post('/api/categories', body)
            setSelectedImage(null)
            mutate()
            setCreateModal(false)
        })
    }
    //Update
    const updateItem: SubmitHandler<Category> = async (data) => {
        if (data.image === result?.image){
            let body = {
                id: data.id,
                name: data.name,
                slug: data.slug,
                image: data.image,
                imageOld: ''
            }
            await axios.put(`/api/categories`, body)
        }else{
            const formData = new FormData()
            const image = data.image[0]
            if (data.image.length > 0) {
                formData.append("image", image)
            }           
            await axios.post('/api/upload-file', formData).then( res => {
                let body = {
                    id: data.id,
                    name: data.name,
                    slug: data.slug,
                    image: res.data,
                    imageOld: result?.image
                }
                axios.put('/api/categories', body)
                
            })
        }
        //setUpdateModal(false)  
        mutate()// refresh data
    }
    //Delete
    const removeItem = async (item?: Category) => {
        await axios.delete(`/api/categories`, {data: item})
        mutate()
    }
    // Change when update
    useEffect(() => {
        reset(result)
    }, [reset, result])
    const imageChange = async (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    }
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    return (
        <div className="w-full">
            <div className="flex justify-center">
                <h1 className="text-xl font-bold">Danh sách chuyên mục</h1>
            </div>
            <div className="flex justify-end">
                <button className="bg-blue-500 my-2 px-4 py-1 font-semibold text-white border-gray-400 rounded shadow"
                    onClick={() => {
                        setCreateModal(true)
                    }}>Tạo mới</button>
            </div>
            <button onClick={() => mutate()}>Làm mới dữ liệu</button>
            <div className="">
                <table className="table-auto w-full bg-white border-b">
                    <thead className="bg-slate-300 text-center font-bold">
                        <tr className="">
                            <td>ID</td>
                            <td>Ảnh</td>
                            <td>Tên</td>
                            <td>Slug</td>
                            <td>Chỉnh sửa</td>
                            <td>Xóa</td>
                        </tr>
                    </thead>
                    <tbody>
                    {data ? (
                        data.map((item:Category) => {
                            return (
                                <tr key={item.id} className="">
                                    <td className="text-center">{item.id}</td>
                                    <td className="text-center">
                                        <Image src={'/images/'+ item.image + ''} alt="Logo" width={75} height={50} priority={true} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.slug}</td>
                                    <td className="text-center">
                                        <button className="bg-blue-500 rounded shadow px-2 py-1 text-gray-100" 
                                            onClick={() => {
                                                setUpdateModal(true)
                                                setResult(item)
                                            }}><FontAwesomeIcon icon={faPenToSquare}/></button>
                                    </td>
                                    <td className="text-center">
                                        <button className="bg-red-500 rounded shadow px-2 py-1 text-gray-100" 
                                            onClick={() => {
                                                setResult(item)
                                                setRemoveModal(true)
                                            }}><FontAwesomeIcon icon={faTrash}/></button>
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
            {createModal && 
                <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
                    <div className="bg-white max-w-sm px-3 py-2 rounded shadow-xl">
                        <form onSubmit={handleSubmit(createItem)} encType="multipart/form-data">
                            <div className="text-center">
                                <h4 className="text-2xl font-bold">Tạo mới</h4>
                            </div>
                            <div className="my-2">
                                <div className="flex flex-row my-2">
                                    <label htmlFor="" className="basis-1/4">Tên</label>
                                    <input type="text" className="basis-3/4 border-2" placeholder="Tên" {...register("name", { required: true })}/>
                                </div>
                                <div className="flex flex-row my-2">
                                    <label htmlFor="" className="basis-1/4">Slug</label>
                                    <input type="text" className="basis-3/4 border-2" placeholder="Slug" {...register("slug", { required: true })}/>
                                </div>
                                {selectedImage && (
                                    <div className="flex flex-row my-2">
                                        <Image src={URL.createObjectURL(selectedImage)} alt="Logo" width={300} height={250} priority />
                                    </div>
                                )}
                                
                                <div className="flex flex-row my-2">
                                    <label htmlFor="" className="basis-1/4">Ảnh</label>
                                    <input type="file" className="basis-3/4" {...register("image", { required: true })} onChange={imageChange}/>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                                <button type="submit" className="bg-blue-700 rounded px-2 py-1 text-white cursor-pointer">Lưu</button>
                                <button type="button" className="rounded px-2 py-1 text-white bg-gray-400" 
                                    onClick={() => {
                                        setCreateModal(false)
                                        setSelectedImage(null)
                                    }}>Thoát</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {updateModal && 
                <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
                    <div className="bg-white max-w-sm px-3 py-2 rounded shadow-xl">
                        <form onSubmit={handleSubmit(updateItem)} encType="multipart/form-data">
                            <div className="text-center">
                                <h4 className="text-2xl font-bold">Cập nhật</h4>
                            </div>
                            <div className="my-2">
                                <div className="flex flex-row my-2">
                                    <label htmlFor="" className="basis-1/4">ID</label>
                                    <input type="text" className="basis-3/4" {...register("id")}/>
                                </div>
                                <div className="flex flex-row my-2">
                                    <label htmlFor="" className="basis-1/4">Tên</label>
                                    <input type="text" className="basis-3/4" {...register("name")}/>
                                </div>
                                <div className="flex flex-row my-2">
                                    <label htmlFor="" className="basis-1/4">Slug</label>
                                    <input type="text" className="basis-3/4" {...register("slug")}/>
                                </div>

                                {selectedImage && (
                                    <div className="flex flex-row my-2">
                                        <Image src={URL.createObjectURL(selectedImage)} alt="Logo" width={200} height={150} priority={true} />
                                    </div>
                                )}
                                
                                <div className="flex flex-row my-2">
                                    <Image src={'/images/'+ result?.image + ''} alt="Logo" width={200} height={200} priority={true} />
                                </div>

                                <div className="flex flex-row my-2">
                                    <label htmlFor="" className="basis-1/4">Ảnh</label>
                                    <input type="file" className="basis-3/4" {...register("image")} onChange={imageChange}/>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                                <button type="submit" className="bg-blue-700 rounded px-2 py-1 text-white">Lưu</button>
                                <button type="button" className="rounded px-2 py-1 text-white bg-gray-400" 
                                onClick={() => {
                                    setUpdateModal(false)
                                    setSelectedImage(null)
                                }}
                                    >Thoát</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            {removeModal && 
            
                <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
                    <div className="bg-white max-w-sm px-3 py-2 rounded shadow-xl">
                        <div className="justify-between items-center">
                            <FontAwesomeIcon icon={faTrash} className="w-full h-7 py-2 text-red-600"/>
                        </div>
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-bold">Bạn có muốn xóa không?</h4>
                        </div>
                        <div className="flex justify-center space-x-3 mt-3 text-white">
                            <button className="px-3 py-1 bg-red-600 rounded w-full"
                                onClick={() => {
                                    removeItem(result)
                                    setRemoveModal(false)
                                }}>Có</button>
                            <button type="button" className="px-3 py-1 bg-gray-400 rounded w-full"
                                onClick={() => setRemoveModal(false)}>Không</button>
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
/**flex h-screen justify-center items-center  */