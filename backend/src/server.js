const express = require('express');
const app = express();
require('dotenv').config();

const mysql = require('mysql');


// connecting to mysql
const db = mysql.createConnection({
    user: process.env.mysql_USER,
    host: process.env.mysql_HOST,
    password: process.env.mysql_PASSWORD,
    database: process.env.mysql_DATABASE
});

app.get("/select", (req, res) => {
    db.query("SELECT * FROM  students", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });

});


app.get("/insert", (req, res) => {
    const email = 'zalsaheb.ieu2022@student.ie.edu';
    const password = 'hispassword';
    const myname = 'Zaid Nopicture'

    db.query("INSERT INTO students (email, password, name) VALUES (?, ?, ?)",
    [email, password, myname],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// connection.connect()


app.get("/", (req, res) => {
    console.log("ok");
    res.send('hello');
})


const port = 3001;
app.listen(port, () => console.log("Listening on Port "+ port));
