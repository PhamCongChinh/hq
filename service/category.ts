import axios from "axios"

export async function getCategories() {
    return await axios.get('/api/categories')
}

export async function createCategory(data:object) {
    return await axios.post('/api/categories/create', data)
}