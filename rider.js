const express = require("express");
const router = express.Router();

router.get('/:id', (req, res, next) => {
  console.log(req,'req')
    console.log(req.params.id,'id')
    console.log(req.query,'query')
    const {limit,offset} = req.query;
    console.log('get value is',limit);
    console.log('get value is',offset);
    res.json('Hello World');
  })


module.exports = router;