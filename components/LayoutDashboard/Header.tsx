import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
const Header = () => {
    
    const router = useRouter()
    const handlerLogout = async () => {
        await axios.get('/api/auth/logout')
        .then(res => {
            if(res.status === 200){
                router.push("/login")
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div className="flex justify-between bg-slate-900 font-bold text-sm text-white p-2">
            <div>
                <Link href={'/'}>Trang chủ</Link>
            </div>
            <div className="flex">
                <p>Người dùng</p>
                <button onClick={() => handlerLogout()} className="">Đăng xuất</button>
            </div>
            
        </div>
    )
}
export default Header