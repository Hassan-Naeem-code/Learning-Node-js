const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.method)
    console.log(req,'king')
    const array = [
    {
        name: 'Usama Ahmed',
        class: 'First Semester',
        subject: 'English Basic Compulsary',
        address: 'Nazimabad Karachi'
    },
    {
        name: 'Taimoor Ghouri',
        class: 'First Semester',
        subject: 'English Basic Compulsary',
        address: 'Nazimabad Karachi'
    }
  ];
    res.json(array)
  })
module.exports = router;