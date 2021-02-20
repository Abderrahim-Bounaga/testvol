const express = require('express');
const router = express.Router();
const sequelizeDb = require('../bin/database');
const Add = require('../models/Add');
// const Op = Sequelize.Op;

// Get Ticket 
// router.get('/', (req, res) =>
// Add.findAll()
//     .then(Adds => res.render('Adds', {
//         Adds
//     }))
//     .catch(err => res.render('error', { error: err })
//     ));

router.get('/add', function(req, res, next) {
    res.render('register');
  });
  router.post('/add', function(req, res, next) {
    let name = req.body.firstname;
    let lastName = req.body.lastname;
    let email = req.body.email;
    let NumberPhone = req.body.contact;
    let Password = req.body.password;
    console.log(name + lastName + email);
    // let hash = bcrypt.hashSync(Password, 10);
    Add.create({
      firstName:name,
      lastName:lastName,
      email:email,
      contact:NumberPhone,
      password:Password,
      
    }).then(() =>{
      alert("Add created")
    })
    
    res.redirect("/users/add");
  
  });


module.exports = router; 