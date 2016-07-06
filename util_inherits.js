var util = require('util')

function Student() {
  this.name = 'Name',
  this.work = 'learn',
  this.code = 111,
  this.sayHello = function() {
    console.log('Hello' + this.name);
  }
}

Student.prototype.showName = function() {
  console.log(this.name);
}

function SubStudent() {
  this.name = 'peng liu'
}

util.inherits(SubStudent, Student)
//SubStudent 仅仅继承了 Student 在原型中定义的函数， 而不会继承在构造函数内部定义的属性和方法
var objStudent = new Student()
objStudent.showName()
objStudent.sayHello()

console.log(objStudent + '\n-----------' );
var objSubStudent = new SubStudent()
objSubStudent.showName()
// objSubStudent.sayHello()
