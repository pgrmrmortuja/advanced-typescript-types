//Generic
//01
//If not use Generic
//! Separate Function for number 
function getNumber(value: number): number {
    return value;
}

//! Separate Function string 
function getString(value: string): string {
    return value;
}

//!Problem using "any"
function getValue(value: any): any {
    return value;
}

const result = getValue("Hello World");
result.toFixed() //! using for only number, not string

//02
//Generic
function printData<T>(arg: T): T {
    return arg;
}

const strOutput = printData<string>("Reyad");
const numberOutput = printData<number>(123);

//03
//! Bad Practice
// function showLength<T>(item: T): T{
//     console.log(item.length) ;
// }


// Using "extends"
function showLength<T extends { length: number }>(item: T) {
    console.log(item.length);
}

showLength("Hello");
showLength([1, 2, 3]);

//04
//Generic with Interface

interface Box<T> {
    content: T
}

interface UserProfile {
    username: string;
    isLoggedIn: boolean;
}

const userBox: Box<UserProfile> = {
    content: {
        username: "abc",
        isLoggedIn: true
    }
}
