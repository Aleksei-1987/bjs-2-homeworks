function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student('Мария', 'женский', 18);
let student2 = new Student('Максим', 'мужской', 19);
let student3 = new Student('Вика', 'женский', 19);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks === undefined) {
		return this.marks;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	}
	return this.marks.reduce((a, v) => a + v, 0) / this.marks.length;

}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}