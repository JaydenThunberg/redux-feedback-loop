const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST route to add a new feedback with feeling, understanding, support, & comments.

router.post('/', (req, res) => {
    console.log(req.body);
    const queryString = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    const values= [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(queryString, values)
      .then((result) => {
        console.log(`added feedback to DB`, result.rows);
        res.sendStatus(201);//send ok with feedback to db
      })
      .catch((error) => {
        console.log(`error with DB ${queryString}`, error);
        res.sendStatus(500); // server response if error
      })
  })// end POST 

  router.get('/admin', (req, res) => {
    const sqlString = `SELECT * FROM feedback ORDER BY id ASC;`;
    pool.query(sqlString)
      .then((result) => {
        console.log(`feedback from GET:`, result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`error with database ${sqlString}`, error);
        res.sendStatus(500); 
      })
  })// end GET

  module.exports = router;