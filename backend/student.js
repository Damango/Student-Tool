class Student {
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


module.exports = Student