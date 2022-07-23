import axios from "axios"

export async function getUsers() {
    return await axios.get('/api/categories')
}

export async function createUser(data: object){
    return await axios.post('/api/categories/create', data)
    .then(res => {
        console.log(res.data)
    })
    .catch(error => {
        console.log(error)
    })
}