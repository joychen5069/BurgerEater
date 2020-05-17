const mysql = require("mysql");

if(process.send.JAWSDB_URL) {
  connetion = mysql.createConnection(process.env.JAWSDB_URL)
} else {

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "joychen5069",
  database: "burgers_db"
})
};

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
