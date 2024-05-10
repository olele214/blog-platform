const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'me7712214',
    database:'blog_platform'
});
connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to the database.');
});
module.exports = connection;
const db = require('./blog_platform/blog');
db.query('SELECT * FROM blog', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});
