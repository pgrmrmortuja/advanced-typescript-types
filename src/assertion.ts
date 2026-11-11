// Type Assertion & Const Assertion

// 01. Type Assertion ("as" syntax)
// Tells TypeScript: "Trust me, I know the exact type of this variable better than you."
let apiData: any = "data";
let customerName = (apiData as string).toUpperCase(); // Treated as string

// 02. Non-Null Assertion Operator (!)
// Tells TypeScript: "I am 100% sure this value is NOT null or undefined right now."
let userName: string | undefined;
userName = "Reyad";

console.log(userName!.toUpperCase()); // Safe because we know it has a value

// 03. Constant Assertion (as const)
// Makes the entire object deeply immutable (readonly) and uses literal types for values.
const user = {
    role: "admin",
    age: 25
} as const;

//! user.role = "user"; // Error: Cannot assign to 'role' because it is a read-only property.