import mysql from "mysql";

const db = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '1234',
    database : 'intern'
  });

  db.connect((err: { stack: string; }) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
});

module.exports = db