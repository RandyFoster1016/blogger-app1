
const { Client } = require('pg');
const client = new Client({
    user: 'randy',
    host: 'blogger-app1-fbcm5kbwn-randy-fosters-projects.vercel.app
',
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
