var express = require('express');
var router = express.Router();
var controller = require('../controller/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/fetch', controller.fetchUsers)

module.exports = router;
