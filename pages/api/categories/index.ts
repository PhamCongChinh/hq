import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../../db'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const [rows, fields] = await pool.query('SELECT * FROM category')
    return res.status(200).json(rows)
}