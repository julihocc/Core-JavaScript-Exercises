import {Academic, Student, Teacher } from './Roles.js';
let academic 
academic = new Academic("user123", 'holaMundo');
academic = new Student("user123", "holaMundo");
academic = new Teacher("user123", "holaMundo");
academic.addClass('Math');
academic.addClass('Science');
console.log(academic.classes)
console.log(academic.username)
academic.changeUsername('holaMundo', 'user1234');
console.log(academic.username)
console.log(academic.role)