var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET method route. */
router.get('/:id', function(req, res) {
  res.json('Get request to the homepage' + req.params.id);
});

/* GET method route. */
router.get('/', function(req, res) {
  res.json('Get request to the homepage');
});

/* POST method route. */
router.post('/', function(req, res) {
  res.json('Post request to the homepage');
});

/* PUT method route. */
router.put('/:id', function(req, res) {
  res.json('Put request to the homepage');
});

/* DELETE method route. */
router.delete('/:id', function(req, res) {
  res.json('Delete request to the homepage');
});

module.exports = router;
