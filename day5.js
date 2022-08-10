//Declare an empty array;
let arr1 = []
 arr1 =[1,2,3,4,5]
console.log(arr1)
console.log(arr1.length)
console.log(arr1[0])
console.log(arr1[2])
console.log(arr1[arr1.length-1])
let  mixedDataTypes = ['java', 'c#', 'python', true, 12, false, 32]
console.log(mixedDataTypes.length)
let Companies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
console.log(Companies)
console.log(Companies.length)
//Print the first company, middle and last company
console.log(Companies[0])
console.log(Companies[(Companies.length -1) / 2])
console.log(Companies[Companies.length -1])
console.log(Companies.toString( ))
for (let i = 0; i < Companies.length; i++)
console.log(Companies[i].toUpperCase())
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
for (let a = 0; a < Companies.length; a++)
console.log(`${Companies[a.toString()]} are big IT company`)

//Sort the array using sort() method
console.log(Companies.sort())
//Reverse the array using reverse() method
console.log(Companies.reverse())
//Slice out the first 3 companies from the array
console.log(Companies.slice(3))
//Slice out the last 3 companies from the array
console.log(Companies.slice(0, -3))
//Slice out the middle IT company or companies from the array
let front = Companies.slice(0,3)
let back = Companies.slice(-3)
middle = [...front, ...back]
console.log(middle)
//Remove the first IT company from the array
console.log(Companies.slice(1))
//Remove the middle IT company or companies from the array
let bigcompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle', 'Amazon']
let fronts = bigcompanies.slice(3)
let backs = bigcompanies.slice(-3)
console.log([...fronts,...backs])
//Remove the last IT company from the array
console.log(bigcompanies.slice(0, -1))
//Remove all IT companies
console.log(bigcompanies.splice())
//First remove all the punctuations and change the string to array and count the number of words in the array
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let rep =(text.replace(/,/g, ''))
console.log(rep.split(' '))
//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift('meat'))
console.log(shoppingCart)
console.log(shoppingCart.push('sugar'))
console.log(shoppingCart.splice(4, 1))
console.log(shoppingCart)
shoppingCart[3] = 'green tea'
console.log(shoppingCart)
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
if (countries.includes('Ethiopia')) {
  console.log('Ethiopia')
}else {
  console.log(countries.push('Ethiopia'))
console.log(countries)
}
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.includes('Sass')){
  console.log(`Sass`)
}else{
  console.log(webTechs.push('Sass'))
}
console.log(webTechs)
//concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = (frontEnd).concat(backEnd)
console.log(fullStack)
/*The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log(ages[ages.length / 2])        

//average
let plus = 0;
for (let i= 0; i < ages.length; i++){
plus += ages[i]
}let average=(plus/ages.length)
console.log(average)
//range
let maxs = ((Math.max.apply(null, ages)))
console.log(maxs)
let mins = Math.min.apply(null, ages)
console.log(mins) 
let range = maxs - mins
console.log(range)
let comp1 = Math.round(Math.abs(maxs - average))
let comp2 = Math.round(Math.abs(mins -average)) 
console.log(comp2 - comp1)
console.log(countries.slice(10))
//Find the middle country(ies) in the countries array
let mid = countries[(Math.round((countries.length -1)/2))]
console.log(mid)
//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
let even = countries.filter(function(value) {
return countries.indexOf(value) % 2 == 0 });
  
  console.log(even)
  let odd =countries.filter(function(value) {
return countries.indexOf(value) % 2 != 0});
console.log(odd)


  