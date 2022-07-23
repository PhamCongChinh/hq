import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../../db'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.body)
    const query = 'INSERT INTO category (name, slug, image) VALUES ("'+req.body.name+'", "'+req.body.slug+'", "'+req.body.image+'")'
    await pool.query(query)
    return res.status(204)
}