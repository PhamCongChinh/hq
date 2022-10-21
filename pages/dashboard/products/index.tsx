import type { NextPageWithLayout } from '../../_app'
import Layout from '../../../components/LayoutDashboard';
import { ReactElement, useState, useEffect } from 'react'
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '../../../lib/fetcher';

const Products: NextPageWithLayout = () => {

    const { data, mutate, error } = useSWR(`/api/products`, fetcher)
    console.log(data)
    return (
        <div className="w-full">
            <h1>Sản phẩm</h1>
            <Link href={'/dashboard/products/create'}>Tạo mới</Link>
            <table className="table-auto w-full bg-white border-collapse">
                <thead className="bg-slate-300 text-center font-bold">
                    <tr className="">
                        <td>ID</td>
                        <td>Ảnh</td>
                        <td>Tên</td>
                        <td>Slug</td>
                        <td>Price</td>
                        <td>Discount</td>
                        <td>Created</td>
                        <td>View</td>
                        <td>Status</td>
                        <td>Chỉnh sửa</td>
                        <td>Xóa</td>
                    </tr>
                </thead>
                {data ? (
                    <tbody>
                        {Object.keys(data).map((item) => {
                            return (
                                <tr key={data[item].id}>
                                    <td >{data[item].id}</td>
                                    <td >{data[item].image}</td>
                                    <td >{data[item].name}</td>
                                    <td >{data[item].slug}</td>
                                    <td >{data[item].price}</td>
                                    <td >{data[item].discount}</td>
                                    <td >{data[item].created}</td>
                                    <td >{data[item].view}</td>
                                    <td >{data[item].status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                ) : (
                    <tbody>
                        <tr><td>Loading...</td></tr>
                    </tbody>
                )}
            </table>
        </div>
    )
}

Products.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Products