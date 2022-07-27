import Layout from "../../../components/LayoutDashboard";
import { ReactElement, useState } from 'react'
import type { NextPageWithLayout } from '../../_app'
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import { createCategory } from "../../../service/category";
import { saveFile } from "../../../service/file";
type Category = {
    name: string,
    slug: string,
    file: string
}
const CategoryCreate: NextPageWithLayout = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm<Category>()

    const onSubmit: SubmitHandler<Category> = async data => {
        const formData = new FormData()
        const file = data.file[0]
        if (data.file.length > 0) {
            formData.append("file", file)
        }
        await saveFile(formData).then((res) => {
            const body = {
                name: data.name,
                slug: data.slug,
                file: res.data
            }
            createCategory(body)
            router.push('/dashboard/categories')
        })
    }

    return (
        <div>
            <h1>Tạo mới</h1>
            
            <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <input {...register("name")} placeholder={'Name'}/><br/><br/>
                    <input {...register("slug")} placeholder={'Slug'}/><br/><br/>
                    <input {...register("file")} type="file"/><br/><br/>
                    <input type="submit" className="cursor-pointer bg-slate-700"/>
                </form>
            </div>
        </div>
    )
}
CategoryCreate.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default CategoryCreate

//onSubmit={handleSubmit(onSubmit)}
/*
    const [file, setFile] = useState({image: ''})
    const handleChangeFile = (event:any) => {
        setFile({ image : event.target.files[0] })
    }
    console.log(file)
    const handleSubmit1 = async (event:any) => {
        event.preventDefault()
        const form = new FormData()
        form.append('image', file.image)
        console.log(file.image)
        //await axios.post('/api/upload-file', form).then((res) => console.log("onSubmit: ", res))
    }*/
/**
 *              
                <form onSubmit={handleSubmit1} encType="multipart/form-data">
                    <input type="file" name='image' onChange={handleChangeFile}/>
                    <input type="submit" className="cursor-pointer bg-slate-700"/>
                </form>
 */