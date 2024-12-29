// Todays 29 december 2024 im starting js 
// var vs let and const in javascript

// var is globally scoped while let and const are block scope 
// var can be upated and redeclare its scope yani var ko update bhi kiya ja sakta ha or redeclare bhi to ya purana code base ma use hota tah lakin jab Es6 aya yani Ecma Script 6 to wo kuch new features laya js ma wo tah let or const or bhi tah wo hum aga dheaka ga lakin zaida tar hum let or const use kara ga  

// for example 
// its a var example var is a globally scope yani var ko hum na bahir declare kiya phir ek block ma declare kiya to wo change ho gaya globally 

var a = 6

{
    var a = 'This'
    console.log(a)
}

console.log(a);

// let example so let ma kiya hota ha hota ya ha ka block scope yani us ka block ki bat us ka andar hi rehti ha or us ka bahir nhi jati jesa var ma howa tah to is liya hama let use karna chai ha 

let b = 30;

{
    let b = 'Hamza'
    console.log(b)
}
console.log(b)

// const example 

const c = 98;
// const neither be upated nor be redclared yani hum const ko update bhi nhi kar sakta or redeclare bhi nhi kar sakta 
// c = 8 const ko hum redeclare nhi kar sakta bs ek dafa variable create kar diya to us ko change nhi kar sakta lakin var ma kar sakta hn or let ma bs hum us ko bol tah han ka memory ma let name ka variable bana diya jai to wo ban jata ha agar huma us ki value change karni ha to hum kuch esa bol ta hn like this 
 
// let can be updated but not be redeclare yani hum let ko update to kar sakta hn magar us ko redeclare nhi kar sakta jesa var ko kar raha tah 
let d = 4;
d = 'hello world'
console.log(d)

// jesa or kuch bhi examples hn let var or const ki jin ma sa kuch ma ap ko bata ta hon
// var varibales are initillized with undefined where as it let and const variable are not intillized
// for example ya upar wali line ya bol rahi ha ka ap let variable ko kahli initilized nhi kar sakta ap ko us ko koi value assign karni hogi jis sa wo intillized ho jai wahi cheez const ka liya bhi apply hoti ha lakin agar is ki jiga var hota to wo ho jata
 var a;
 
