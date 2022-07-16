import axios from "axios"
const Header = () => {
    const handlerLogout = async () => {
        await axios.get('/api/auth/logout')
    }
    return(
        <div className="bg-slate-900 font-bold text-xl py-1 border-b-2">
            <h1 className="text-white">Header</h1>
            <button onClick={() => handlerLogout()} className="text-white">Logout</button>
        </div>
    )
}
export default Header