const mysql2 = require('mysql2')

interface Data {
    query_string: string,
    values: []
}

const connection = mysql2.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_NAME
})

/*async function sql(query_string: string, values: []) {
    try {
        const result = await connection.query(query_string, values)
        await connection.end()
        return result
    } catch (error:any) {
        throw Error(error.message)
    }
}*/

export default connection