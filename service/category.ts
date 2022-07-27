import axios from "axios"
import { promises as fs } from 'fs'
import path from 'path'
export async function getCategories() {
    return await axios.get('/api/categories')
}

export async function createCategory(data:object) {
    return await axios.post('/api/categories', data)
}

export async function deleteCategory(data: any) {
    const imagePath = path.join(process.cwd(), 'public', 'images', data.image)
    console.log(imagePath)
    return await fs.rmdir(imagePath)
    //return await axios.delete(`/api/categories/${data.id}`)
}