import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../../db'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    if (req.method === 'DELETE') {
        //const query = 'DELETE FROM category WHERE id = '+ req.query.id +' '
        //await pool.query(query)
        return res.status(200).json("Deleted")
    }
}
export default handler