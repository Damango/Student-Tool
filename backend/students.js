const express = require('express')
const router = express.Router()
const Student = require("./models/student")


//gets all students
router.get('/', async (req, res) => {
    try {


        //res.send("ALL STUDENTS")



        const students = await Student.find()
        res.json(students)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})


router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        res.json(student)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }

})


router.post('/', async (req, res) => {


    const student = new Student({
        name: req.body.name,
        dateJoined: req.body.dateJoined,
        level: req.body.level,
        premium: req.body.premium,
        courses: req.body.courses
    })

    try {
        const newStudent = await student.save()
        res.status(201).json(newStudent)
    }
    catch (err) {

        res.status(400).json({ message: err.message })

    }

})


router.get('/:id', (req, res) => {
    res.send(req.params.id)
})







router.post('/test', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        level: 0,
        topic: req.body.topic
    })
})

module.exports = router