import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons"

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
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="flex">
                <div>
                    <FontAwesomeIcon icon={faUser} />
                </div>

                <button onClick={() => handlerLogout()} className="pl-3">Đăng xuất</button>
            </div>
            
        </div>
    )
}
export default Header