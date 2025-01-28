const express = require('express')
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const port = 3000; 
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')))


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "studenthubdb",
  authPlugin: '123456' 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/',(req,res)=>{
  res.render('home')
})

// app.post("/faculty_reg",(req,res)=>{
//   const id = req.body.id;
//   const name = req.body.name;
//   const query = `insert into `
// })


app.get("/registration",(req,res)=>{
  res.render("registration");
})

app.get("/class",(req,res)=>{
  res.render("class")
})
app.get("/contact",(req,res)=>{
  res.render("contact")
})
app.get("/results",(req,res)=>{
  res.render("results")
})
app.get("/marksEnter",(req,res)=>{
  res.render("marksEnter")
})
app.post('/registration', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const gender = req.body.gender.toLowerCase(); // Convert to lowercase for uniformity


  // Check if gender is valid
  if (gender !== 'male' && gender !== 'female') {
    return res.status(400).send('Invalid gender');
  }

  const sql = `INSERT INTO faculty1 ( name,email, password, gender)
               VALUES (?, ?, ?, ?,)`;
  
  const values = [name,email,password,gender];

  con.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).send(`Error: ${err.message}`);
    } else {
      res.redirect('/success2');
    }
  });
});
app.listen(port, () => {
  console.log(Example app listening on port ${port});
})