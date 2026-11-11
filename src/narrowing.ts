// Narrowing: Narrowing down a broad type into a more specific type

// 01. typeof Guard (for primitive types: string, number, boolean)
function printInput(value: number | string) {
    if (typeof value === "number") {
        console.log(value.toFixed(2)); // TS knows it's a number
    } else {
        console.log(value.toUpperCase()); // TS knows it's a string
    }
}

printInput(100);     // Output: 100.00
printInput("hello"); // Output: HELLO

// 02. Truthiness Guard (checks if value exists, filters out null/undefined/empty)
function sayHello(name: string | null) {
    if (name) {
        console.log(`Hi ${name.toUpperCase()}`); // Safe: name is a non-empty string
    } else {
        console.log("Hi Guest!");
    }
}

sayHello("Reyad"); // Output: Hi REYAD
sayHello(null);    // Output: Hi Guest!

// 03. Equality Check (===) (compares exact literal values)
function checkLight(signal: "red" | "green") {
    if (signal === "red") {
        console.log("Stop!");
    } else {
        console.log("Go!");
    }
}

checkLight("red"); // Output: Stop!

// 04. 'in' Operator (checks if a specific property exists in an object)
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim(); // Must be a Fish
    } else {
        animal.fly();  // Must be a Bird
    }
}

// 05. instanceof Check (checks if object is created from Date, Error, or a Class)
function formatDate(value: string | Date) {
    if (value instanceof Date) {
        console.log(value.getFullYear()); // Safe to use Date methods
    } else {
        console.log(value);
    }
}

formatDate(new Date());     // Output: 2026
formatDate("2026-01-01");   // Output: 2026-01-01

// 06. Discriminated Union (uses a common literal property like 'role' to separate types)
type User = { role: "user"; name: string };
type Admin = { role: "admin"; permissions: string[] };

function showInfo(person: User | Admin) {
    if (person.role === "user") {
        console.log(`User Name is: ${person.name}`);
    } else {
        // Added for complete revision: TS automatically knows it's Admin here
        console.log(`Admin Permissions: ${person.permissions.join(", ")}`);
    }
}

// 07. Custom Type Guard ('is' keyword tells TS the exact type if function returns true)
function isString(data: unknown): data is string {
    return typeof data === "string";
}

function process(data: unknown) {
    if (isString(data)) {
        console.log(data.toUpperCase()); // TS trusts isString() and treats data as string
    } else {
        console.log("not a string");
    }
}