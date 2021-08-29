const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.method)
    console.log(req,'king')
    res.json('user route')
  })
module.exports = router;