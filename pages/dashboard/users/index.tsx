import Layout from "../../../components/LayoutDashboard"
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../../_app'

import { urlGetAllUsers } from "../../../lib/api"
import useSWR from 'swr'
import { fetcher } from "../../../lib/fetcher"
//import { IUserResponse } from "../../../lib/interfaces"

const User: NextPageWithLayout = () => {

    const { data, error } = useSWR(urlGetAllUsers, fetcher)

    if (error) return <h1>Something went wrong!</h1>;
    if (!data) return <h1>Loading...</h1>;

    return (
        <div className="w-full">
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="w-1/4">Username</th>
                        <th className="w-1/4">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? (
                        data.map((user:any) => {
                            return(
                                <tr key={user.id}>
                                    <td className="border px-4 py-2">{user.username}</td>
                                    <td className="border px-4 py-2">{user.password}</td>
                                </tr>
                            )
                        })
                    ) : (
                        <div>Đang tải ...</div>
                    )}
                </tbody>
            </table>
        </div>
    )
}
User.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default User

/**
 * <div className="">
                <table className="text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? (
                            data.map((user: any) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.username}
                                        </th>
                                        <td className="py-4 px-6">
                                            {user.password}
                                        </td>
                                        <td className="py-4 px-6">
                                            {user.refreshToken}
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
 */