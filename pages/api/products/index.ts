import type { NextApiRequest, NextApiResponse } from 'next'
import { productRepo } from '../../../repository'
import fs from 'fs'
import path from 'path'
import Products from '../../dashboard/products'
import { Product } from '../../../lib/interfaces/IProduct'

const handler = async (req: NextApiRequest, res: NextApiResponse, product: Product) => {

    const {id, id_category, name, slug, image_link, image_list, price, content, discount, created, status} = req.body
    product = req.body
    console.log("product",product)
    
    if (req.method === 'GET') {
        const data = await productRepo.getAll()
        return res.status(200).json(data)
    }

    if (req.method === 'POST') {
        //await productRepo.create(id_category, name, slug, image_link, image_list, price, content, discount, created, status)
        await productRepo.create(product)
        return res.status(204)
    }
    
}
export default handler

const deleteFromFolder = async (image: any) => {
    const imagePath = path.join(process.cwd(), 'public', 'images', image)
    return fs.unlinkSync(imagePath)
}