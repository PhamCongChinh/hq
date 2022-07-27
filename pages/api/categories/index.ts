import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../../db'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    
    if (req.method === 'GET') {
        const [rows, fields] = await pool.query('SELECT * FROM category')
        return res.status(200).json(rows)
    }

    if (req.method === 'POST') {
        const query = 'INSERT INTO category (name, slug, image) VALUES ("'+req.body.name+'", "'+req.body.slug+'", "'+req.body.file+'")'
        await pool.query(query)
        return res.status(204)
    }
    
}
export default handler