import axios from "axios"

export async function login(data:JSON){
    return await axios.post('/api/auth/login', data)
}