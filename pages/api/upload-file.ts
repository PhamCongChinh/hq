import formidable from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    req.method === "POST" ? post(req, res) : res.status(401).send("")
}

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const uploadFolder = path.join('./', "public", "images")
    const form = formidable({ 
        multiples: true, 
        maxFieldsSize: 50 * 1024 * 1024, //5MB
        keepExtensions: true,
        uploadDir: uploadFolder,
    })
    form.parse(req, async (err: any, fields: any, files: any) => {
        return res.status(201).send(files.file.newFilename)
    })
}