/* Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18
*/
let driveage = prompt('enter your age')
if (driveage < 18){
    console.log(`you are left with ${18 - driveage}`)
} else if (driveage < 18){
    console.log(`you are old enough to drive`) 
}
 

/*
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/
let yourage = prompt('enter your age')
let myage = 19
if (yourage > myage){
console.log(`you are ${yourage - myage} older than me`) 
}else if (myage > yourage){
    console.log(`you are ${myage - yourage} younger than me`)
}
/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
*/
let a = 4;
let b = 3;
if (a > b){
    console.log(`${a} is greater than ${b}`)
}else {
    console.log(`${a} is less than ${b}`)
}
 if (a > b)  true ? console.log(`${a} is greater than {b}`) : console.log(`${a} is less than ${b}`)


/*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.*/
let number = 9
if (number % 2 ==0){
    console.log(`${number} is even number`)
}else {
    console.log(`${number} is odd number`) 
}
/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let grade = 70
switch (true){
case (grade <= 100 && grade >= 80) :
console.log('A')
break;
case (grade >= 70 && grade <= 79 ) :
    console.log('B')
 break;
 case (grade >= 60 && grade <= 69 ) :
    console.log('C')
 break;
case(grade >= 50 && grade <= 59) :
console.log('D')
break;
case (grade >= 0 && grade <= 49 ):
console.log('F')
break;
default:
    console.log(`you did not write exam`)
}
/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let season = 'july'
switch(true) {
    case (season == 'september' || season == 'october' || season == 'november'):
        console.log(`${season} is Autumn`)
        break;
        case season == 'december' || season == 'january' || season == 'february' :
            console.log(`${season} is Winter` )
            break;
            case season == 'march' || season == 'april' || season == 'may' :
                console.log(`${season} is spring`)
                break;
                case season == 'june' || season == 'july' || season == 'august' :
                    console.log(`${season} is summer`)
                    break;
                    default :
                    console.log(`write correct month`) 
}
/*Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/
    let day = 'Friday'
    switch (true) {
        case day == 'Saturday' || day == 'SaturDay' :
            console.log(`${day} is a weekend`)
            break;
            case day == 'Friday' || day == 'FriDay' :
                console.log(`${day} is working day`)
                break;
                default :
                console.log(`${day} is not present`) 
    }
    /*
    Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/
  let month = 'February'
  switch(true){
    case month == 'January' || month =='JANUARY'||month == 'march' ||month == 'may' ||month == 'july'||month == 'august' ||'october'|| 'november': 
        console.log(`${month} has 31 days `)
        break;
        case month == 'april' || month == 'june' || month == 'november' || month =='september':
            console.log(`${month} has 30 days`)
            break;
            case month =='FEbruary' || month == 'February':
                console.log(`${month} has 28 days or 29 days leap year`) 
                break;
                default:
                    console.log(`not a month`)
  }
  