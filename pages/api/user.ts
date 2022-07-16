// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sql from './../../db'

import connection from './../../db'

type Data = {
    username: string,
    password: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data = connection.query('SELECT * FROM user', (err:any, results:Data, fields:any) => {
        console.log("Ket qua: ", results)
        res.status(200).send(results)
    })
}
