import { NextPage } from "next";
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import { useForm } from "react-hook-form";


const Signup: NextPageWithLayout = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:object) => console.log(data);

    return (
        <div className="flex justify-center">
            <form className="w-96 bg-slate-100 shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center text-xl py-3">Sign up</h1>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label>Tài khoản</label>
                    </div>
                    <div className="md:w-2/3">
                        <input type="text" placeholder="Username" {...register("username")}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label>Mật khẩu</label>
                    </div>
                    <div className="md:w-2/3">
                        <input type="password" placeholder="Pass" {...register("password")}/>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Signup
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Quên mật khẩu?
                    </a>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </form>
        </div>
    )
}
Signup.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Signup