const express = require('express')
const router = express.Router()



//gets all students
router.get('/', (req, res) => {
    res.send("ALL STUDENTS")
})


router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

module.exports = router