import axios from "axios"
import { useRouter } from "next/router"
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
        <div className="bg-slate-900 font-bold text-xl py-1 border-b-2">
            <h1 className="text-white">Header</h1>
            <button onClick={() => handlerLogout()} className="text-white">Logout</button>
        </div>
    )
}
export default Header