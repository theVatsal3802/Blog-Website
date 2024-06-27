const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'ENTER YOUR USERNAME HERE',
    password: 'ENTER YOU PASSWOR HERE'
});

module.exports = pool;
