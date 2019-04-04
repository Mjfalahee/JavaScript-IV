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
        
    }
}