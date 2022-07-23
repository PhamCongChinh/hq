import { NextPage } from "next";
import Layout from "../../components/LayoutDashboard";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './../_app'
const Admin: NextPageWithLayout = () => {
    return (
        <div>
            
        </div>
    )
}
Admin.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Admin