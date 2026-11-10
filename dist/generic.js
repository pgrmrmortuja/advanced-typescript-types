//Generic
//01
//If not use Generic
//! Separate Function for number 
function getNumber(value) {
    return value;
}
//! Separate Function string 
function getString(value) {
    return value;
}
//!Problem using "any"
function getValue(value) {
    return value;
}
const result = getValue("Hello World");
result.toFixed(); //! using for only number, not string
//02
//Generic
function printData(arg) {
    return arg;
}
const strOutput = printData("Reyad");
const numberOutput = printData(123);
//03
//! Bad Practice
// function showLength<T>(item: T): T{
//     console.log(item.length) ;
// }
// Using "extends"
function showLength(item) {
    console.log(item.length);
}
showLength("Hello");
showLength([1, 2, 3]);
const userBox = {
    content: {
        username: "abc",
        isLoggedIn: true
    }
};
export {};
