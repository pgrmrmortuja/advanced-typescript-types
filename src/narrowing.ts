//Narrowing
//01
//typeof Guard (for string, number, boolean)

function printInput(value: number | string) {

    if (typeof value === "number") {
        console.log(value.toFixed(2));
    } else {
        console.log(value.toUpperCase());
    }
}

printInput(100);    // Output: 100.00
printInput("hello"); // Output: HELLO

//02
// Truthiness Guard - Truthy or Falsy (for null , undefined)

function sayHello(name: string | null) {
    if (name) {
        console.log(`Hi ${name.toUpperCase()}`)
    } else {
        console.log("Hi Guest!")
    }
}

sayHello("Reyad"); // Output: Hi REYAD
sayHello(null);    // Output: Hi Guest!


//03
// Equality Check (===)

function checkLight(signal: "red" | "green") {
    if (signal === "red") {
        console.log("Stop!");
    } else {
        console.log("Go!");
    }
}

checkLight("red"); // Output: Stop!

// 04
// in Operator (for checking adject object property)

type Fish = {swim: () => void};
type Bird = { fly: () => void };

function move(animal: Fish | Bird){
    if("swim" in animal){
        animal.swim();
    } else{
        animal.fly();
    }
}


// 05
// instanceof Check (is the object from Date, Error or Class)

function formatDate (value: string | Date){
    if(value instanceof Date){
        console.log(value.getFullYear());
    } else{
        console.log(value);
    }
}

formatDate(new Date()); // Output: 2026 (current year)
formatDate("2026-01-01");// Output: 2026-01-01
formatDate("Value"); // Output: Value

//06
// Discriminated Union (common property)

type User = { role: "user"; name: string };
type Admin = { role: "admin"; permissions: string[] };

function showInfo(person: User | Admin){
    if(person.role === "user"){
        console.log(`User Name is: ${person.name}`)
    }
}

//07
// Custom Type Guard - is keyword (custom function)

//Custom Function
function isString(data: unknown): data is string{
    return typeof data === "string";
}

//Main Function
function process(data: unknown){
    if(isString(data)){
        console.log(data.toUpperCase());
    } else{
        console.log("not a string")
    }
}

// Narrowing - typeof, truthiness, equality ===, in operator, instanceof, discriminated union, custom type