import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../../db'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const [rows, fields] = await pool.query('INSERT INTO user (name, slug, image) VALUES ('+"BANC"+",olajsdkl"+",oiauso"+')')
    return res.status(200).json(rows)
}