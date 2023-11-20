const express = require('express');
const app = express();

// setting up mysql
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'grouppassword',
    database: 'attendancedb'
})

connection.connect()


app.get("/", (req, res) => {
    console.log("ok");
    res.send('hi');
})




const port = 3000;
app.listen(port, () => console.log("Listening on Port "+ port));

connection.end();