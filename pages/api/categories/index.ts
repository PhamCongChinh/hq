import type { NextApiRequest, NextApiResponse } from 'next'
import { categoryRepo } from '../../../repository'
import fs from 'fs'
import path from 'path'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const {id, name, slug, image} = req.body
    console.log(req.body)

    if (req.method === 'GET') {
        const data = await categoryRepo.getAll()
        return res.status(200).json(data)
    }

    if (req.method === 'POST') {
        await categoryRepo.create(name, slug, image)
        return res.status(204)
    }

    if(req.method === 'PUT') {
        console.log(req.body.imageOld)
        if(req.body.imageOld !== ''){
            deleteFromFolder(req.body.imageOld)
        }
        await categoryRepo.update(id, name, slug, image)
        return res.status(200)
    }

    if (req.method === 'DELETE') {
        deleteFromFolder(image)
        categoryRepo.remove(JSON.stringify(id))
        return res.status(200).json("Deleted")
    }
    
}
export default handler

const deleteFromFolder = async (image: any) => {
    const imagePath = path.join(process.cwd(), 'public', 'images', image)
    return fs.unlinkSync(imagePath)
}