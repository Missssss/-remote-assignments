const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(cookieParser());

app.set('view engine', 'pug');

// Assignment 1
app.get('/', (req, res) => {
    // res.send('Hello My Server!');
    res.render('index');
});

//-------------------------------------
// Assignment 2
//(Optional) Think about what will happen when N is very large?
//the maximum URL length is 2083 characters, if N is too large to fix the length, it may be broken.
app.get('/data', (req, res) => {
    // res.render('data');
    // just printout the data
    var result;
    if(isNaN(req.query.number)){
      result = 'Wrong Parameter';
    }
    else if(req.query.number < 0){
      result = '請輸入正整數';
    }
    else{
      // 總和
      result = (1 + Number(req.query.number))*Number(req.query.number)/2;
    }
    res.send(`${result}`);
});

//-------------------------------------
// Assignment 3: /public/sum.html

//-------------------------------------
// Assignment 4: 
app.get('/myName', (req, res) => {
  // 拿cookies的name
  const name = req.cookies.username;
  res.render('myName', {name: name});
});

app.get('/trackName', (req, res) => {
  const name = req.query.name;
  res.cookie('username', name);
  res.redirect('/myName');
})

// app.post('/trackName', (req, res) => {
//   // set cookies 一筆資料
//   res.cookie('username', req.body.name);
//   res.redirect('/myName');
// });

app.listen(3000, () => {
    console.log('This app is listening on port 3000!')
});



/**
// Express.js Documentation
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 * 
 */