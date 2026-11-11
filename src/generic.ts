// Generics: Write reusable code that works safely with any data type

// 01. Why we need Generics (Problems without Generics)

// Problem A: Writing duplicate functions for each type
function getNumber(value: number): number {
    return value;
}

function getString(value: string): string {
    return value;
}

// Problem B: Using 'any' loses type safety (TS won't catch mistakes)
function getValue(value: any): any {
    return value;
}

const result = getValue("Hello World");
//! result.toFixed(); // Runtime Error! No TS warning because 'result' is 'any'

// 02. Generic Function (<T> acts as a placeholder for the type)
function printData<T>(arg: T): T {
    return arg;
}

const strOutput = printData<string>("Reyad"); // T becomes string
const numberOutput = printData<number>(123);   // T becomes number

// 03. Generic Constraints (Using "extends" to limit allowed types)
//! Bad Practice: TS doesn't know if 'T' has a '.length' property
// function showLength<T>(item: T) {
//     console.log(item.length); // Error
// }

// Good Practice: Only allow types that have a 'length' property (like string or array)
function showLength<T extends { length: number }>(item: T) {
    console.log(item.length);
}

showLength("Hello");   // Valid (Output: 5)
showLength([1, 2, 3]); // Valid (Output: 3)

// 04. Generic with Interface (Reusable object structure)
interface Box<T> {
    content: T;
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
};