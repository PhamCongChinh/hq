import axios from "axios"

export async function login(data:object){
    return await axios.post('/api/auth/login', data)
}