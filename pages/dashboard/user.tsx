import { NextPage } from "next";

import { useState } from "react";


import Layout from "../../components/LayoutDashboard";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './../_app'
const User: NextPageWithLayout = () => {
    const [ user, setUser] = useState()
    return (
        <div>
            <h1 className="text-3xl font-bold">User</h1>
            {user?(
                    <h1>user</h1>
                ): <p>No user</p>
            }
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