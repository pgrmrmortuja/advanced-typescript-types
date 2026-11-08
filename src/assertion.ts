//01
//Type Assertion
// "as" syntax

let apiData: any = "data";
let customerName = (apiData as string).toUpperCase();

//02
//Non-Null Assertion Operator (!)

let userName: string | undefined;
userName = "Reyad";

console.log(userName!.toUpperCase());

//03
//Constant Assertion (as const)

const user = {
    role: "admin",
    age: 25
} as const;


//! user.role = "user"; Not possible because it is read only property.