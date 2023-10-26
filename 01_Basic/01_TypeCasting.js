let score = "44"

console.log(typeof score); // one way
console.log(typeof(score)); // another way

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "44" => 44
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Smith" => true

let someNumber = 34;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



