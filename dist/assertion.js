//01
//Type Assertion
// "as" syntax
let apiData = "data";
let customerName = apiData.toUpperCase();
//02
//Non-Null Assertion Operator (!)
let userName;
userName = "Reyad";
console.log(userName.toUpperCase());
//03
//Constant Assertion (as const)
const user = {
    role: "admin",
    age: 25
};
export {};
//! user.role = "user"; Not possible because it is read only property.
