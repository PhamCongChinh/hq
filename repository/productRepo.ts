import pool from "../config/dbConfig"
import { Product } from "../lib/interfaces/IProduct"

const getAll = async () => {
    const [rows] = await pool.query('SELECT id, id_category, name, slug, image_link, image_list, price, content, discount FROM product')
    return rows
}

const getOne = async (slug:string) => {
    const [row] = await pool.query('SELECT * FROM product WHERE slug = "'+ slug +'"')
    return row
}

const create = async (item: Product) => {
    const query = 'INSERT INTO product (id_category, name, slug, image_link, image_list, price, content, discount, created, status) VALUES ("'+ item.id_category +'", "'+ item.name +'", "'+ item.slug +'", "'+ item.image_link +'", "'+ item.image_list +'", "'+ item.price +'", "'+ item.content +'", "'+ item.discount +'", "'+ item.created +'", "'+ item.status +'")'
    return await pool.query(query)
}

/*const update = async (id: any, name: any, slug: any, image: any) => {
    console.log(id)
    const query = `UPDATE category SET name = "`+ name +`", slug = "`+ slug +`", image = "`+ image +`" WHERE id = "`+ id +`"`
    return await pool.query(query)
}*/

/*const remove = async (id: string) => {
    const query = 'DELETE FROM category WHERE id = '+ id +''
    return await pool.query(query)
}*/

export const productRepo = {
    getAll,
    getOne,
    create,
    //update,
    //remove
}