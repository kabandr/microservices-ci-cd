var express = require('express');
var router = express.Router();

const users = [
  {
    firstname: "Andrew",
    lastname: "Davis",
    age: 32
  },
  {
    firstname: "David",
    lastname: "Smith",
    age: 30
  },
  {
    firstname: "Jim",
    lastname: "Simmons",
    age: 25
  }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users);
});

module.exports = router;
