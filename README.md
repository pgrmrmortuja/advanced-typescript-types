# 🚀 Advanced TypeScript 

Welcome to the **Advanced TypeScript** repository! This project serves as a comprehensive, beginner-friendly collection of essential TypeScript concepts, code examples, and structured revision notes.

Each topic is documented with clear, real-world examples and simple inline explanations to help master TypeScript core principles efficiently.

## 📚 Topics Covered

Here is a summary of the concepts included in this repository:

| \# | Topic / File | Key Concepts & Features | 
| ----- | ----- | ----- | 
| **01** | `union-type.ts` | Basic Union, Literal / Unit Types, Object Unions | 
| **02** | `unit-types.ts` | Strict Literal Values (Roles, Payment Methods, Order Status) | 
| **03** | `top-types.ts` | `unknown` vs `any`, Safe Type Checking before execution | 
| **04** | `nullish-type.ts` | Handling `null` & `undefined`, Nullish Coalescing Operator (`??`) | 
| **05** | `bottom-type.ts` | `never` type, Exhaustiveness Checking in switch/if-else | 
| **06** | `type-interface.ts` | `type` vs `interface`, Extends, Intersections (`&`), Declaration Merging | 
| **07** | `assertion.ts` | Type Assertion (`as`), Non-Null Assertion (`!`), Readonly Const Assertion (`as const`) | 
| **08** | `narrowing.ts` | `typeof`, `in` operator, `instanceof`, Equality checks, Custom Type Guards (`is`) | 
| **09** | `generic.ts` | Reusable Generic Functions (`<T>`), Generic Constraints (`extends`), Generic Interfaces | 
| **10** | `promise.ts` | `async/await` with `Promise<T>`, Safe API fetching, Try-Catch error handling | 

## 🛠️ Quick Reference & Syntax Guide

### 1. Union Type & Unit Type
* **What it is & Why we need it:** When we want to allow only specific values in a variable or argument, and nothing else (for example, it can only be "admin" or "user", and nothing else).
* **Keywords/Syntax needed:** Pipe or vertical bar (`|`) sign.
* **Small Code:**
```typescript
type Role = "admin" | "user"; // You cannot give anything outside of these two
let myRole: Role = "admin";
```

---

### 2. Type Alias vs Interface
* **What it is & Why we need it:** Making a blueprint or template to show how an object's structure (shape) will look. Usually, interface is used for objects, and type is used for primitives or unions.
* **Keywords/Syntax needed:** `type` or `interface` keyword.
* **Small Code:**
```typescript
// Object structure using Interface
interface User {
    name: string;
    age: number;
}

// Primitive or Union type using Type
type ID = string | number;
type Status = "active" | "inactive";
```

---

### 3. Top Types (unknown & any)
* **What it is & Why we need it:** When data is coming from a server or outside, and you do not know its type. `unknown` is safe (you must check it before using), but `any` is unsafe (TypeScript stops all checks).
* **Keywords/Syntax needed:** `unknown` or `any` keyword.
* **Small Code:**
```typescript
// Using unknown (Safe - checking is mandatory)
let inputData: unknown = "hello";
if (typeof inputData === "string") {
    console.log(inputData.toUpperCase());
}

// Using any (Unsafe - works without any checking, risky)
let dynamicData: any = 100;
dynamicData.toUpperCase(); // No error at compile time, but can crash at runtime!
```

---

### 4. Nullish Types (null & undefined)
* **What it is & Why we need it:** To show that a variable's value is currently missing or empty.
* **Keywords/Syntax needed:** `null`, `undefined`, and the union (`|`) operator.
* **Small Code:**
```typescript
// Using null (Value is unknown or intentionally empty)
let userEmail: string | null = null; 

// Using undefined (No value has been assigned yet)
let userPhone: string | undefined = undefined;
```

---

### 5. Bottom Type (never)
* **What it is & Why we need it:** To show a situation that will never happen, or a function that will never finish normally (like crashing the system or catching extra cases after all conditions are checked).
* **Keywords/Syntax needed:** `never` keyword.
* **Small Code:**
```typescript
function throwError(): never {
    throw new Error("System crashed!"); // This function will never return normally
}
```

---

### 6. Type Narrowing (Checking types in different ways)
* **What it is & Why we need it:** When a variable has multiple types, using if-else to check and make sure which exact type you are working with right now.
* **Keywords/Syntax needed:** `typeof`, `in`, `instanceof`, or `===`.
* **Small Code:**
```typescript
// A. typeof (for primitive types)
function checkType(val: string | number) {
    if (typeof val === "number") {
        console.log(val.toFixed(2));
    }
}

// B. in operator (to check if a property exists in an object)
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
    }
}

// C. instanceof (to check instances of a class or Date)
function checkDate(val: string | Date) {
    if (val instanceof Date) {
        console.log(val.getFullYear());
    }
}
```

---

### 7. Type Assertion
* **What it is & Why we need it:** When TypeScript cannot properly understand the type of something, the developer forcefully tells it: "Assume this is the type, I am sure about it."
* **Keywords/Syntax needed:** `as` keyword or the non-null `!` operator.
* **Small Code:**
```typescript
// A. Type Assertion using the 'as' keyword
let someData: any = "Hello TypeScript";
let strLength = (someData as string).length; 

// B. Ensuring it is not null or undefined using Non-Null Assertion (!)
let userName: string | undefined = "Reyad";
console.log(userName!.toUpperCase());
```

---

### 8. Custom Type Guard (is keyword)
* **What it is & Why we need it:** When you want to make your own custom logic inside a function to check if data belongs to a specific type, you use the `is` keyword.
* **Keywords/Syntax needed:** `parameter is Type` syntax in custom functions.
* **Small Code:**
```typescript
// Custom guard function
function isString(data: unknown): data is string {
    return typeof data === "string";
}

function processData(data: unknown) {
    if (isString(data)) {
        console.log(data.toUpperCase()); // TS will now trust that this is a string
    }
}
```

---

### 9. Generics (<T>)
* **What it is & Why we need it:** Making code or functions that can work with any type of data, without losing type safety.
* **Keywords/Syntax needed:** Diamond brackets or angle brackets `<T>`.
* **Small Code:**
```typescript
function identity<T>(arg: T): T {
    return arg; // Will return whatever type is sent
}
let output = identity<string>("Reyad");
```

---

### 10. Promise & Async/Await (Promise<T>)
* **What it is & Why we need it:** When it takes some time to bring data from a server (async/await), this tells the code what type of data will return from the server in the future.
* **Keywords/Syntax needed:** `async`, `await`, and `Promise<...>`.
* **Small Code:**
```typescript
interface User {
    name: string;
}

async function fetchUserData(): Promise<User> {
    const res = await fetch("/api/user");
    const data = await res.json() as User;
    return data; // Will return a User object in the future
}
```

## 💡 About This Project

This repository is built as a hands-on learning log for mastering **TypeScript**. It emphasizes clear code patterns, step-by-step concepts, and well-explained comments for future revisions.

Happy Coding! 🚀