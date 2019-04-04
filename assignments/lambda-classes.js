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
// props: specialty, favLanguage, catchPhrase // props from parent: name, age, location, gender
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
//props: previousBackground, className, favSubjects // props from parent: name, age, location, gender
//methods: listsSubjects, PRAssignment, sprintChallenge

class Student extends Person {
    constructor(studentinfo) {
        super(studentinfo);
        this.previousBackground = studentinfo.previousBackground;
        this.className = studentinfo.className;
        this.favSubjects = studentinfo.favSubjects;
    }

    // takes array of strings and spits out first string  for each iteration of loop until all subjects have been listed.
    listsSubjects() {
        for (let i=0; i=this.favSubjects.length; i++) {
            console.log(this.favSubjects.shift());
        }
    }

    PRAssignment (subject) {
        return console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge (subject) {
        return console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
}

// Project Manager class
// props: gradClassName, favInstructor // props from parents: specialty, favLanguage, catchPhrase, name, age, location, gender
// methods: standUp, debugsCode
class ProjectManager extends Instructor {
    constructor(PMinfo) {
        super(PMinfo);
        this.gradClassName = PMinfo.gradClassName;
        this.favInstructor = PMinfo.favInstructor;
    }

    standUp(channel) {
        return console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// Test objects for classes

const igeorge = new Instructor({
    name: 'George',
    location: 'Paris',
    age: 31,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I like to move it.`
  });

const sphil = new Student({
    name: 'Phil',
    location: 'London',
    age: 25,
    gender: 'male',
    previousBackground: 'Barrista',
    className: 'Web19',
    favSubjects: ['JavaScript', 'Video Editing', 'Greek Philosophy', 'Cooking']
}) 

sphil.listsSubjects();