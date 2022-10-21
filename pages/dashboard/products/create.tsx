import type { NextPageWithLayout } from '../../_app'
import Layout from '../../../components/LayoutDashboard';
import { ReactElement, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { fetcher } from '../../../lib/fetcher'
import useSWR from 'swr';
import axios from 'axios';
import { Product } from "../../../lib/interfaces/IProduct"

const ProductCreate: NextPageWithLayout = () => {
    const { register, handleSubmit } = useForm<Product>()
    const { data, mutate, error } = useSWR(`/api/categories`, fetcher)
    const createItem: SubmitHandler<Product> = async (data) => {
        await axios.post('/api/products', data)
    }
    return (
        <div className="w-full">
            <h1>Sản phẩm</h1>
            <form onSubmit={handleSubmit(createItem)} encType="multipart/form-data">
                <div className="text-center">
                    <h4 className="text-2xl font-bold">Tạo mới</h4>
                </div>
                <div className="my-2">
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Mã chuyên mục</label>    
                        {data ? (
                            <select className="basis-3/4 border-2" placeholder="Mã chuyên mục" {...register("id_category", { required: true })}>
                            {Object.keys(data).map((item) => {
                                return(
                                    <option key={data[item].id} value={data[item].id}>
                                        {data[item].name}
                                    </option>
                                )
                            })}
                            </select>
                        ):(
                            <div>Đang tải...</div>
                        )}
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Tên sản phẩm</label>
                        <input type="text" className="basis-3/4 border-2" placeholder="Tên" {...register("name", { required: true })} />
                    </div>
                    
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Đường dẫn</label>
                        <input type="text" className="basis-3/4 border-2" placeholder="Đường dẫn" {...register("slug")} />
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Ảnh</label>
                        <input type="file" className="basis-3/4 border-2" placeholder="Ảnh" {...register("image_link")} />
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Danh sách ảnh</label>
                        <input type="text" className="basis-3/4 border-2" placeholder="Danh sách ảnh" {...register("image_list")} />
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Đơn giá</label>
                        <input type="number" className="basis-3/4 border-2" placeholder="Đơn giá" {...register("price")} />
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Nội dung</label>
                        <input type="text" className="basis-3/4 border-2" placeholder="Nội dung" {...register("content")} />
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Chiết khấu</label>
                        <input type="number" className="basis-3/4 border-2" placeholder="Chiết khấu" {...register("discount")} />
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Ngày tạo</label>
                        <input type="date" className="basis-3/4 border-2" placeholder="Ngày tạo" {...register("created")} />
                    </div>
                    <div className="flex flex-row my-2">
                        <label htmlFor="" className="basis-1/4">Trạng thái</label>
                        <input type="text" className="basis-3/4 border-2" placeholder="Trạng thái" {...register("status")} />
                    </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                    <button type="submit" className="bg-blue-700 rounded px-2 py-1 text-white cursor-pointer">Lưu</button>
                    <button type="button" className="rounded px-2 py-1 text-white bg-gray-400"
                        onClick={() => {
                        }}>Thoát</button>
                </div>
            </form>
        </div>
    )
}

ProductCreate.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default ProductCreate