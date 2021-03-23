const mongoose = require('mongoose')



const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    sections: {
        type: Number,
        required: true
    },

    completedSections: {
        type: Number,
        required: true,
        default: 0,

    },

    difficulty: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }

})


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date,
        required: true,
        default: Date.now
    },
    level: {
        type: Number,
        required: true,
        default: 0
    },
    premium: {
        type: Boolean,
        required: true,
        default: false
    },
    id: {
        type: Number,
        required: true,
        default: Math.floor(Math.random() * 100000)
    },
    courses: {
        type: [courseSchema],
        required: true,
        default: []

    },
    completedPracticeProblems: {
        type: Number,
        required: true,
        default: 0
    }

})



module.exports = mongoose.model('Student', studentSchema)






















/*class Student {
    constructor(name, age, id, level, problemsSolved) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.level = level;
        this.problemsSolved = problemsSolved;
    }



    solvingProblem() {
        this.problemsSolved += 1;
        this.level += 0.21;
    }
}


module.exports = Student*/