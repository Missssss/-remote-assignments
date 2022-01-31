const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

//create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  // port: '3306',
  database : 'assignment'
});
//connect
db.connect((err) => {
    if(err){
      throw err;
    }
    console.log('mysql connected!');
});

// //create db
// app.get('/createdb',(req,res) => {
//   let sql = 'CREATE DATABASE assignment';
//   db.query(sql, (err, result)=> {
//     if(err) {
//       throw err;
//     }
//     console.log(result);
//     res.send('Database created....');
//   })
// })
// // create table
// app.get('/createusertable',(req, res) => {
//   let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255) ,password VARCHAR(255), username VARCHAR(255), PRIMARY KEY(id))';
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('User table created...');
//   })
// })

app.get('/member', (req, res) => {
  const name = req.cookies.username;
  res.render('member', {name: name});
})

app.get('/home', (req, res) => {
  res.render('home');
})

app.post('/createUser', (req, res) => {
  console.log(req);
  console.log(req.body);

  let post_email = req.body.email;
  let post_password = req.body.password;
  let post_username = req.body.username;
  
  //check
  console.log(post_email);
  let sql_check = `SELECT email FROM user WHERE email = '${post_email}'`;
  let insert_query = `INSERT INTO user (username,email,password) VALUES ('${post_username}','${post_email}', '${post_password}')`;
  db.query(sql_check, (err,result) => {
    if(err) throw err;
    if(result.length != 0){
      // let responseText = JSON.stringify({message: '此email已經註冊！'})
      // res.status(409).send(responseText);
      res.status(409).jsonp({msg: '此email已經註冊！'});
      return
    }
    else{
      console.log(result);
      // 寫進資料庫
      db.query(insert_query, (err, result) => {
        if(err) throw err;
        else{
          console.log("result",result);
          //set cookie
          res.cookie('username', post_username);
          //成功導到member
          // res.status(200).jsonp({msg: '註冊成功！重新導回登入頁'});
          // setTimeout(() => {
          res.redirect('/member');
          // }, 1000)
          // return
        }
      })
    }
  })
});

// check user
app.post('/loginUser', (req, res) => {
  // console.log(req);
  console.log('body',req.body);
  let post_email = req.body.email;
  let post_password = req.body.password;
  console.log('heh',post_email, post_password);

  let sql_check_email = `SELECT * FROM user WHERE email = '${post_email}' AND password = '${post_password}'`;

  db.query(sql_check_email, (err,result) => {
    if(err) throw err;
    if(result.length == 0){
      res.status(409).jsonp({msg: '輸入email或密碼錯誤，找不到此帳號！'});
    }
    else{
      console.log(result);
      let username = result[0].username;
      res.cookie('username', username);
      res.redirect('/member');
    }
  })
})
// select users
// app.get('/getusers',(req, res) => {
//   let sql = 'SELECT * FROM user';
//   let query = db.query(sql, (err, results) => {
//     if(err) throw err;
//     console.log(results);
//     res.send('users fetched......');    
//   })
// })

app.listen(3000, () => {
  console.log(`app listening on port 3000!`);
})