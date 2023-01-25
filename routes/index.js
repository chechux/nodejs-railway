const express = require('express');
const router = express.Router();
const pool = require("../db.js")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [rows] = await pool.query("SELECT * FROM users")
  res.json(rows)
});

router.get('/create', async function(req, res, next) {
  const result = await pool.query("SELECT 'hello word' AS RESULT")
  console.log(result)
  res.json(result[0])
});

router.get('/ping', async function(req, res, next) {
  const result = await pool.query("INSERT INTO users(name) VALUES('KITTY')")
  console.log(result)
  res.json(result)
});


module.exports = router;
