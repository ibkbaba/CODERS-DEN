let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(2))
console.log(challenge.substring(2,0))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(social.split(','))
console.log(challenge.replace('JavaScript','python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.lastIndexOf('because'))
console.log(string.indexOf('because'))
let trim = ' 30 Days Of JavaScript '
console.log(trim.trim())
console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
console.log(challenge.match('a'))
let jav = '30 Days of'
let scrip = ' JavaScript'
console.log(jav.concat(scrip))
console.log(challenge.repeat(2))
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
let first =  '10'
console.log(first == 10 )
let nums = parseFloat('9.8')
console.log(Math.round(nums) == 10 )
let str = 'python'
let jar = 'jargon'
console.log(jar.includes('on'))
console.log(str.includes('on'))
let course = 'I hope this course is not full of jargon'
console.log(course.includes('jargon'))
let randnum = Math.round(Math.random()* 101)
console.log(randnum)
let rand = Math.round(Math.random()* 51)
console.log(rand + 50)
let randum = Math.round(Math.random()* 256)
console.log(randum)
let ran = 'javaScript'
let lent = ran.length
let ranletter = Math.round(Math.random()* 11)
console.log(ran.charAt(ranletter))
let sent = 'You cannot end a sentence with because because because is a conjunction'
let firt = sent.indexOf('because')
let second =sent.lastIndexOf('because')
console.log(`1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125`)
console.log(sent.substr(firt, second))
let count = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let number = /love/gi 
console.log(count.match(number))
let cause = 'You cannot end a sentence with because because because is a conjunction'
let amount = /because/gi
console.log(cause.match(amount))
const  sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let rep =sentence.replace(/%/g , '')
let reflex = rep.replace(/@/g, '')
let naira = reflex.replace(/#/g, '')
let dollar = naira.replace(/$/, '')
let and = dollar.replace(/&/g, '')
let semi = and.replace(/;/g, '' )
let pam = semi.replace(/\$/g, '')
console.log(pam)
//Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let monthly = 5000
let anual = 1000
let online = 1500
let totalmonthly = monthly* 12
totalonline = online * 12
console.log(anual + totalmonthly + totalonline)














