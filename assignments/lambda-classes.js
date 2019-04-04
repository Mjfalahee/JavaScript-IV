// CODE here for your Lambda Classes


// base class of Person
// props: name, age, location, gender
// method: speak

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }

    speak() {
        return console.log(`Hello, my name is ${this.name}, and I am from ${this.location}.`);
    }
}


// Instructor class
// props: specialty, favLanguage, catchPhrase
// method: demo, grade

class Instructor extends Person {
    constructor(instructorinfo) {
        super(instructorinfo);
        this.specialty = instructorinfo.specialty;
        this.favLanguage = instructorinfo.favLanguage;
        this.catchPhrase = instructorinfo.catchPhrase;
    }

    demo(subject) {
        return console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

//Student Class
//props: previousBackground, className, favSubjects
//methods: listsSubjects, PRAssignment, sprintChallenge

class Student extends Person {
    constructor(studentinfo) {
        super(studentinfo);
        this.previousBackground = studentinfo.previousBackground;
        this.className = studentinfo.className;
        this.favSubjects = studentinfo.favSubjects;
    }

    listsSubjects() {

    }
    
    PRAssignment (subject) {
        return console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge (subject) {
        return console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
}