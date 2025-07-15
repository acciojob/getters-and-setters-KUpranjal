//complete this code
class Person {
	constructor(name,age){
		this.name=name
		this.age=age
		
	}
}

class Student extends Person {
	constructor(name,age,study){
		super(name,age)
		this.study=study
	}
}

class Teacher extends Person {
	constructor(name , age,study,teach){
		super(name,age,study)
		this.teach=teach
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
