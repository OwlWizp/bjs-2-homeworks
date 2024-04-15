function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
    this.marks && this.marks(...marks)
}

Student.prototype.getAverage = function () {
    if (this.marks  this.marks.length === 0)  {
        return 0;
    }
    return this.marks.reduce((average, userAge, index, array) => average + userAge / array.length,0);
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

let student1 = new Student("Антон", "male",  18)
let student2 = new Student("Женя", "woman",  23)
let student3 = new Student("Михаил", "male",  33)
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)