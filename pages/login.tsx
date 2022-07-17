import { NextPage } from "next";
import type { NextPageWithLayout } from './_app'
import { ReactElement, useState } from 'react'
import Layout from '../components/Layout'
import { useForm } from "react-hook-form";
import axios from "axios";
const jwt = require('jsonwebtoken')

import { useRouter } from "next/router";

const Login: NextPageWithLayout = () => {
    const router = useRouter()
    const [message, setMessage] = useState<string>('You are not logged in')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data:object) => {
        await axios.post('/api/auth/login', data)
        .then(res => {
            console.log(res.data)
            if (res.status === 200) {
                router.push("/dashboard")
            }
        })
        .catch(error => {
            console.log(error)
        })
    };

    return (
        <div className="flex justify-center">
            <form className="w-96 bg-slate-100 shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center text-xl py-3">Đăng nhập</h1>
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
                        Đăng nhập
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
Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
export default Login