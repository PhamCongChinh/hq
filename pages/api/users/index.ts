// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../../config/dbConfig'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const [rows, fields] = await pool.query('SELECT * FROM user')
    return res.status(200).json(rows)
}
