let score = "44"

//console.log(typeof score); // one way
//console.log(typeof(score)); // another way

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);

// "44" => 44
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Smith" => true

let someNumber = 34;

let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);

/**********************Operations*******************/

let value = 3;
let negValue = -value;
//console.log(negValue);



let str1 = "hello"
let str2 = " Smith"
let str3 = str1 + str2
console.log(str3);

// here we see some magic

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" +  2 + 2) // 122
console.log(1 + 2 + "2") // 32

