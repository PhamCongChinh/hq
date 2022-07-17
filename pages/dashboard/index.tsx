import { NextPage } from "next";
import Layout from "../../components/LayoutDashboard";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './../_app'
const Dashboard: NextPageWithLayout = () => {
    return (
        <div>
            
            <h1 className="text-3xl font-bold">Dashboard</h1>
            
        </div>
    )
}
Dashboard.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Dashboard