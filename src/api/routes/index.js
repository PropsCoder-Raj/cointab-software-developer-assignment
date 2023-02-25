var express = require('express');
const User = require("../models/users")
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Developer Assignment - Home' });
});

router.get('/user-details', function(req, res, next) {
  User.getUsers((err, result) => {
    if(err){
      res.render('user_details', { title: 'User-Details', userData: [] });
    }

    if(result){
      res.render('user_details', { title: 'User-Details', userData: result.data });
    }
  })
});

module.exports = router;
