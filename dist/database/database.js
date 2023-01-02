const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config();

const con = mysql.createConnection({
  host     : process.env.HOST ,
  port     : process.env.PORT,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})


module.exports = con;