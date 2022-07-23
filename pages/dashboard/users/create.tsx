import Layout from "../../../components/LayoutDashboard";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../../_app'

import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import { createUser } from "../../../service/user";

type Category = {
    name: string,
    slug: string,
    image: string
}

const Create: NextPageWithLayout = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm<Category>()
    const onSubmit: SubmitHandler<Category> = data => {
        const res = JSON.stringify(data)
        console.log(data)
        createUser(data)
    }
    return (
        <div>
            <h1>Tạo mới</h1>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder={'Name'}/><br/><br/>
                    <input {...register("slug")} placeholder={'Slug'}/><br/><br/>
                    <input {...register("image")} placeholder={'Image'}/><br/><br/>
                    <input type="submit" className="cursor-pointer bg-slate-700"/>
                </form>
            </div>
        </div>
    )
}
Create.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Create