const express = require('express')
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "cloud",
  password: "secret",
  database: "test_db"
}

let con = null

const app = express()
app.engine('html', require('ejs').renderFile);


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect();

    const sql3 = `SELECT * FROM students`
    con.query(sql3, function (err, result, fields) {
      if (err) throw err;
      // res.send(JSON.stringify(result))
      res.render(__dirname + "/index1.html", {gpa1: result[0].GPA, gpa2: result[1].GPA ,gpa3: result[2].GPA ,gpa4: result[3].GPA,gpa5: result[4].GPA,gpa6: result[5].GPA,gpa7: result[6].GPA
        ,pic1: result[0].Picture,pic2: result[1].Picture ,pic3: result[2].Picture ,pic4: result[3].Picture,pic5: result[4].Picture,pic6: result[5].Picture,pic7: result[6].Picture
        ,name1: result[0].Name,name2: result[1].Name,name3: result[2].Name ,name4: result[3].Name,name5: result[4].Name,name6: result[5].Name,name7: result[6].Name
        ,id1: result[0].ID, id2: result[1].ID ,id3: result[2].ID,id4: result[3].ID ,id5: result[4].ID,id6: result[5].ID,id7: result[6].ID
      });
    });
  });

app.listen(3000)

console.log("listening on port 3000")