import pool from "../config/dbConfig"

const getAll = async () => {
    const [rows] = await pool.query('SELECT * FROM category')
    return rows
}

const getOne = async (id:any) => {
    const [row] = await pool.query('SELECT * FROM category WHERE id = '+ id +'')
    return row
}

const create = async (name: string, slug: string, image: string) => {
    const query = 'INSERT INTO category (name, slug, image) VALUES ("'+ name +'", "'+ slug +'", "'+ image +'")'
    return await pool.query(query)
}

const update = async (id: any, name: any, slug: any, image: any) => {
    console.log(id)
    const query = `UPDATE category SET name = "`+ name +`", slug = "`+ slug +`", image = "`+ image +`" WHERE id = "`+ id +`"`
    return await pool.query(query)
}

const remove = async (id: string) => {
    const query = 'DELETE FROM category WHERE id = '+ id +''
    return await pool.query(query)
}

export const categoryRepo = {
    getAll,
    getOne,
    create,
    update,
    remove
}