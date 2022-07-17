import { NextPage } from "next";
import Layout from "../../components/LayoutDashboard";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './../_app'
const User: NextPageWithLayout = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">User</h1>
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