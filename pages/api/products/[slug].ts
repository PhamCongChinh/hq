import type { NextApiRequest, NextApiResponse } from 'next'
import { productRepo } from '../../../repository'
import fs from 'fs'
import path from 'path'
import Products from '../../dashboard/products'
import { Product } from '../../../lib/interfaces/IProduct'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query
    let slugString: string = slug as string
    
    if (req.method === 'GET') {
        const data = await productRepo.getOne(slugString)
        return res.status(200).json(data)
    }
    
}
export default handler