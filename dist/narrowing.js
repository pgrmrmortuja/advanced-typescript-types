//Narrowing
//01
//typeof Guard (for string, number, boolean)
function printInput(value) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value.toUpperCase());
    }
}
printInput(100); // Output: 100.00
printInput("hello"); // Output: HELLO
//02
// Truthiness Guard - Truthy or Falsy (for null , undefined)
function sayHello(name) {
    if (name) {
        console.log(`Hi ${name.toUpperCase()}`);
    }
    else {
        console.log("Hi Guest!");
    }
}
sayHello("Reyad"); // Output: Hi REYAD
sayHello(null); // Output: Hi Guest!
//03
// Equality Check (===)
function checkLight(signal) {
    if (signal === "red") {
        console.log("Stop!");
    }
    else {
        console.log("Go!");
    }
}
checkLight("red"); // Output: Stop!
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
// 05
// instanceof Check (is the object from Date, Error or Class)
function formatDate(value) {
    if (value instanceof Date) {
        console.log(value.getFullYear());
    }
    else {
        console.log(value);
    }
}
formatDate(new Date()); // Output: 2026 (current year)
formatDate("2026-01-01"); // Output: 2026-01-01
formatDate("Value"); // Output: Value
function showInfo(person) {
    if (person.role === "user") {
        console.log(`User Name is: ${person.name}`);
    }
}
//07
// Custom Type Guard - is keyword (custom function)
//Custom Function
function isString(data) {
    return typeof data === "string";
}
//Main Function
function process(data) {
    if (isString(data)) {
        console.log(data.toUpperCase());
    }
    else {
        console.log("not a string");
    }
}
export {};
// Narrowing - typeof, truthiness, equality ===, in operator, instanceof, discriminated union, custom type
//1048
