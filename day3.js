const prompt = require('prompt');
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'falade'
let lastname = 'ibukun'
let country = 'nigeria'
 let age =  40
 let isMarried = false
 let year = 2022
 console.log(typeof(firstName))
 console.log(typeof(lastname))
 console.log(typeof(country))
 console.log(typeof(age))
 console.log(typeof(isMarried))
 console.log(typeof(year))

 //Check if type of '10' is equal to 10
 console.log('10'== 10)
// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10 )
/*
Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/
console.log(12 > 10)
console.log(1 < 4)
console.log(1 > -4)

console.log(10 === '10')
console.log(2 <= 1)
console.log(4 === '4')

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
//Find the length of python and jargon and make a falsy comparison statement.
let prog = 'python'
let non = 'jargon'
console.log(prog.length == non.length)
//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//There is no 'on' in both dragon and python
let pro = 'python'
let pres = pro.includes('on')
let nons = 'jargon'
let abs = nons.includes('on')
console.log(pres== abs)
/* Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
let day = new Date()
console.log(day.getFullYear())
console.log(day.getMonth())
console.log(day)
console.log(day.getHours())
console.log(day.getMinutes())
console.log(day.getTime())
/*
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
let base =prompt('enter base')
let height =prompt('enter height')
let area = ( 0.5 * base * height)
console.log(`the area of the triangle ${area}`)
