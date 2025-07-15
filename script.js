class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
}

class Student extends Person {
	constructor(name, age, study) {
		super(name, age);
		this.study = study;
	}

	studyInfo() {
		console.log(`${this.name} is studying ${this.study}.`);
	}
}

class Teacher extends Person {
	constructor(name, age, teach) {
		super(name, age);
		this.teach = teach;
	}

	teachInfo() {
		console.log(`${this.name} teaches ${this.teach}.`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
