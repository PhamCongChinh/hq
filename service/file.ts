import axios from "axios"

export async function saveFile(formData: FormData) {
    return await axios.post('/api/upload-file', formData)
}