
const { Client } = require('pg');
const client = new Client({
    user: 'randy',
    host: '127.0.0.1',
    database: 'blogdb',
    password: 'randy',
    port: 5432,
});

async function check(){
    await client.connect()
    // const res = await client.query('SELECT * from blogs')
    // console.log(res.rows[0]) // Hello world!
    // await client.end()  
}

check();
module.exports = client;
