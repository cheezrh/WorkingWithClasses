//import Person from './person' ES6

var Person = require ('./person.js');
var Employee = require ('./Employee.js');

var employee1 = new Person('Alberto', 'Botero', 47);
var employee2 = new Person('Alberto', 'Botero', 47, 5253);

employee1._age = 'Forty-Seven';

console.log(`${employee1.firstName} is ${employee1.age} years old`)
console.log(employee2);