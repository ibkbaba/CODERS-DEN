//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i =0; i <= 10; i++) {
    console.log(i)
}
let i = 0
while (i <=10){
console.log(i)
i++
}
let a = 0
do {
    console.log(a)
    a++
}while (a <= 10)
//Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let x = 10; x >= 0; x--) {
    console.log(x)
}
let x = 10
do {
    console.log(x)
    x--
}while (x >= 0)
let c = 10;
while (c >= 0) {
    console.log(c)
    c--
}
//Iterate 0 to n using for loop
let n = 10;
for (x = 0; x <= n; x++){
    console.log(x)
}
let d = 7;
let string = "";
for (let i = 0; i <= d; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string); 

for (let n= 0 ; n < 11; n++){
    console.log(`${n} x ${n} = ${n * n} \n`)
}
/*
Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

    let pow = 'i  1^2  i^3'
    var result = '';

for (var v=0; v <= 10; v++) {
    result += (`${v + ' '}   ${v**2 + ' ' }   ${v **3 +' '}\n`)
}
var power =pow +'\n' + result 
console.log(power)
//Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
    if (i % 2 !==0)
    continue
    console.log(i)
}
//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
    continue
    console.log(i)
}
//Use for loop to iterate from 0 to 100 and print only prime numbers
for (let a = 1; a <= 100; a++) {

    let notPrime = false;
    for (let i = 2; i <= a; i++) {
        if (a%i===0 && i!==a) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(a);
    }
}
//Use for loop to iterate from 0 to 100 and print the sum of all numbers
let sum=0 
for(i=1;i<=100;i++)
{
    sum=sum+i
}
console.log(sum)
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let add = 0 
for(i=1;i<=100;i++)
{
  if(i%2==0)
  {
    add=add+i
  }
}
console.log(add)
let odd=0 
for(i=1;i<=100;i++)
{
  if(i%2!==0)
  {
    odd=odd+i
  }
}
console.log(odd)
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr =[add, odd]
console.log(arr)

//Develop a small script which generate array of 5 random numbers
let script1 =""
for(let i =0; i<5; i++){
    let rand =Math.floor(Math.random()*10)
    script1 +=rand
}
console.log(script1)
//Develop a small script which generate array of 5 random numbers and the numbers must be unique
const array = Array.from({ length: 10 }, (v, i) => i)
 .sort((a, b) => 0.5 - Math.random())
 .slice(0, 5);
console.log(array)
//Develop a small script which generate a six characters random id:
let randomid =[1,"a",2,"s",3,"d",4,"e",4,"f",5,"g",6,"y",6,"h","u","9","u","g","d","c",6]
let first= Math.round(Math.random()* 10)+ 4
let randchar=[]
for (let i =0; i<6; i++){
    randchar.push(randomid[~~(Math.random()*10)])
}
console.log(randchar.join(''));
let scriptid =[]
for (let i =0; i < first; i++){
    scriptid.push(randomid[~~(Math.random()*10)])
    //Develop a small script which generate any number of characters random id:
}
let randid=scriptid.join('')
    console.log(randid)
    //Write a script which generates a random hexadecimal number.
let hexadecimal = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9', 'A', 'B','C', 'D', 'E', 'F']
hexnumber =[]
let hex= (~~(Math.random()* hexadecimal.length))
for (let i =0; i < hex; i++){
    hexnumber.push(hexadecimal[~~(Math.random()*hexadecimal.length)])
}
console.log(hexnumber.join(''));
//Write a script which generates a random rgb color number.
let blue=(~~(Math.random()*255 +1))
let red =(~~(Math.random()*255 +1))
let green=(~~(Math.random()*255 +1))
console.log(`rgb(${red},${green},${blue})`);

//Using the above countries array, create the following new array
let countries =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND","ICELAND", "JAPAN", "KENYA"]
newarray =[]
for (const country of countries){
    
    newarray.push(country.length)
}
console.log(newarray)
//Write a script which generates a random rgb color number.
let r =Math.round(Math.random()*50)
let b = Math.round((Math.random())*50 )
let g = (Math.round(Math.random())*50 +10)
let rgb =(`rgb ${r} ${g} ${b}`)
console.log(rgb)
//Use the countries array to create the following array of arrays:
/*
[
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
    */
   let country=countries.map(each=>each.charAt(0).toUpperCase() + each.slice(1).toLowerCase())
   let arrays =country.map(each=>([each,each.slice(0,3).toUpperCase(),each.length]))
   console.log(arrays);

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
land = country.filter(each=>(each.match(/land/gi)))
console.log(land)
//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let endwith=country.filter(each=>each.slice(-2).match('ia'))
console.log(endwith);
//Using the above countries array, find the country containing the biggest number of characters.
let index = Math.max(...countries.map(each=>each.length))
let highestlength = country.filter((each) =>(each.length===index))
console.log(highestlength)
let fiveletter=countries.filter(each=>each.length===5)
console.log(fiveletter);
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  //Find the longest word in the webTechs array
  let web =Math.max(...webTechs.map(each=>each.length))
  let highestwebtech =webTechs.filter(each =>each.length===web)
  console.log(highestwebtech);
  //Use the webTechs array to create the following array of arrays
let webarray = webTechs.map(each=>[each, each.length])
console.log(webarray)
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let stack =mernStack.map(each=>each.slice(0,1))
mern = stack.join("")
console.log(mern)
let pro =["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const print of pro){
    console.log(print)
}
//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method
let rversefruit = []
let fruit =['banana', 'orange', 'mango', 'lemon']
for (let i = fruit.length -1; i >= 0; i--){
    rversefruit.push(fruit[i])
} 
console.log(rversefruit)
//Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  let [front,back]=fullStack
  let full =[...front, ...back]
  console.log(full.join(" "))
  //Copy countries array(Avoid mutation)

 let copycountries =[]
 for (const country of countries){
    copycountries.push(country)
 }
 console.log(copycountries);
  //Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
  let sortcountries =[]
  for (const country of countries){
  sortcountries.push(country)
  }
  sortcountries.sort()
  console.log(sortcountries);
  //Sort the webTechs array and mernStack array
  let sortweb =[]
  for (const web of webTechs){
    sortweb.push(web)
//Sort the webTechs array and mernStack array
  }
  sortweb.sort()
  console.log(sortweb)
  console.log(webTechs);
  let merns =[]
  for (const men of mernStack){
    merns.push(men)
  merns.sort()
}
console.log(merns);
const Countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
console.log(merns);
//Extract all the countries contain the word 'land' from the countries array and print it as array
let lands =Countries.filter(each=>each.match(/land/gi))
console.log(lands);
//Find the country containing the hightest number of characters in the countries array
let high =Countries.map(each=>(each.length))
let indx =Countries[high.findIndex(each=>each===(Math.max(...high)))]
console.log(indx);
//Extract all the countries contain the word 'land' from the countries array and print it as array
let coiuntriesland =Countries.filter(each=>each.match(/land/gi))
console.log(coiuntriesland)
//Extract all the countries containing only four characters from the countries array and print it as array
extract = Countries.filter(each=>each.length ===4)
console.log(extract);
//Extract all the countries containing two or more words from the countries array and print it as array
twoword =Countries.filter(each=>each.match(/ /gi))
console.log(twoword);
//Reverse the countries array and capitalize each country and stored it as an array
let reversecountries =[]
for (const rev of Countries){
    reversecountries.push(rev)
}
let cd= reversecountries.reverse().map(each=> each.toUpperCase())
console.log(cd)