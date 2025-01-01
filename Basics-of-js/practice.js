// Create a variable of type string and try to add a number to it

let a = 'Hello-World';
let b = 5
console.log(a+b)

// use typeof opertaor to find the data type of the string in the last question;

console.log(typeof (a+b));

// create a const object in js can you change it to hold a number later ?

const myDetails = {
        name: 'Hamza',
        age: 19,

}
// myDetails = 9
myDetails['friend'] = "Ali";
myDetails['name'] = "hamad";
console.log(myDetails);


// Create two variables:

// One with your first name.
// One with your last name.
// Combine them into a full name and log it to the console.


const firstName = "Hamza";
const lastName = ' Khanzada';

console.log(firstName+lastName);


// Create a variable x with the value '5' (as a string) and another variable y with the number 10. Add them together and use the typeof operator to check the type of the result.

let x = '5';
let y = 10;

console.log(x+y);
console.log(typeof (x+y));

// Create an object mobile with the following properties:

// brand (e.g., Samsung or Apple)
// model (e.g., Galaxy S21 or iPhone 13)
// price (any number)
// Modify the price property to a new value and add a new property color. Log the updated object.
const mobile = {
    brand : 'Samsung',
    model : 'Galaxy S21',
    price : 100000

}
mobile['price'] = 90000;
mobile['color'] = 'Red'
console.log(mobile)


// 1. Number Comparison
// Write a program that takes two numbers (num1 and num2) and:

// Logs "num1 is greater" if num1 > num2.
// Logs "num2 is greater" if num2 > num1.
// Logs "Both numbers are equal" otherwise.

let num1 = 10;
let num2 = 5;

if(num1 > num2) {
    console.log('num1 is greater than num2 ');

} else if (num2 > num1) {
    console.log('num2 is greater than num1')
} else {
    console.log('Both numbers are equal ')
}


// 2. Grading System
// Write a program that takes a score out of 100 and assigns grades based on the following rules:

// If the score is 90 or above, log "Grade: A".
// If the score is 80–89, log "Grade: B".
// If the score is 70–79, log "Grade: C".
// If the score is 60–69, log "Grade: D".
// If the score is below 60, log "Grade: F".

let score = 100;

if(score >= 90) {
    console.log('Grade: A')
} else if (score >= 80) {
     console.log("Grade: B")
} else if (score > 70 ) {
    console.log('Grade: C')
} else if (score > 60 ) {
    console.log('Grade: D')
} else {
    console.log('Grade: F')
}


// 3. Even or Odd
// Write a program that takes a number and logs whether it is "Even" or "Odd" using the modulus operator (%).


let e = 9

if(e % 2 === 0 ) {
    console.log('its even number')
} else {
    console.log('its odd')
}

// 4. Traffic Light System
// Write a program that takes a string (light) representing a traffic light color:

// If the light is "red", log "Stop".
// If the light is "yellow", log "Get Ready".
// If the light is "green", log "Go".
// If the light is anything else, log "Invalid light color".

let light = 'blue';
if(light === 'red') {
    console.log('Stop')
} else if (light === 'yellow') {
    console.log('Get Ready')
} else if(light === 'green') {
    console.log('Go') 
} else {
    console.log('Invalid Light Color')
}


// 5. Minimum of Three Numbers
// Write a program that takes three numbers (a, b, and c) and logs the smallest number using conditional statements. 

let a1 = 100;
let b2 = 200;
let c3 = 300;

if(a1 < 200) {
console.log('a1 is the smallest number')
} else if(b2 == 100) {
    console.log('the number is large')
} else if (c3 === '300') {
    console.log('the number is too large ')
}















// 6. Leap Year Checker
// Write a program that takes a year and checks whether it is a leap year. A year is a leap year if:

// It is divisible by 4 but not divisible by 100, or
// It is divisible by 400.
// Log "Leap Year" if true, otherwise log "Not a Leap Year".

         

const age = 20;
if(age >= 18) {
    console.log('Ap vote da sakta hen')
} else {
    console.log('Ap vote nhi da sakta hn')
}

const userName = 'Hamza';
const password = 1234;

if(userName === 'Hamza' && password === 1234) {
    console.log('User is logged in')
} else {
    console.log('user is not logged in')
}

// Ek variable temperature define karo. Agar temperature 30 degree se zyada ho, toh output karo "It's a hot day", agar temperature 15 se 30 ke beech ho, toh output karo "It's a pleasant day", aur agar temperature 15 se kam ho, toh output karo "It's a cold day."

const temperature = 45;
if(temperature > 30) {
    console.log("It's a hot day",)
} else if (temperature >= 15 && temperature <= 30) {
    console.log("It's a pleasant day")
} else {
    console.log("It's a cold day.")
}

// 4. Question 4: Discount System
// Ek variable totalAmount define karo. Agar totalAmount 1000 se zyada ho, toh 10% discount calculate karo aur print karo. Agar 500 se zyada ho lekin 1000 se kam ho, toh 5% discount calculate karo aur print karo. Agar 500 se kam ho, toh "No discount available" print karo.

const totalAmount = 1500;
if (totalAmount > 1000) {
    console.log(' 10% discount ')
} else if (totalAmount > 500 && totalAmount < 1000) {
    console.log('5% discount')
} else {
    console.log("No discount available." )
}


// 5. Question 5: Logical Operator
// Do variables define karo: isWeekend aur hasPlans. Agar dono variables true ho (matlab weekend hai aur plans hain), toh output karo "Enjoy your weekend!" Agar weekend hai lekin plans nahi hain, toh output karo "Relax this weekend." Agar weekend nahi hai, toh output karo "It's a working day."

// Inhe solve karne ke baad, apne answers bhejo! Main tumhe review karunga.

const isWeekend = true;
const hasPlans = false;

if(isWeekend === true && hasPlans === true) {
    console.log('Enjoy your weekend!')
} else if (isWeekend === true && hasPlans === false) {
    console.log("Relax this weekend.")
} else {
    console.log("It's a working day")
}

const color = 'Blue';

switch (color) {
    case 'Blue':
     console.log('Thats a Blue color')
        break;
    case 'red':
    console.log('that is red color')

    default:
        console.log('Color are not match')
        break;
}


// const userAge = prompt("What's Your age")
// if(userAge > 10 &&  userAge < 20) {
//     console.log('Thats valid age')
// } else {
//     console.log('This is not valid age')
// }

const userAge = prompt("What's Your age") 

switch (userAge) {
    case '11':
        console.log('You are a Child');
        break;
    case '12':
            console.log('You are a little baby');
            break;
    case '13':
            console.log('You are a little girl');
            break;
    case '14':
             console.log('You are a little dog baby');
             break; 
     case '15':
        console.log('You are a \little donkey baby');
        break;                
    
    default:
        // console.log('You are a dumb buddy ')
        break;
}
const booknumber = prompt("what's your booknumber")
switch (booknumber) {




    
}
