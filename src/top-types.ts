// Top Types: unknown and any
// 'unknown' is safe because TypeScript forces you to check the type before using it.
// 'any' turns off type-checking completely (use with caution!).

// 01. Receive Unknown Data from Server
let serverData: unknown = "User_101_Token";

// Type narrowing: Check if it's a string before calling string methods
if (typeof serverData === "string") {
  console.log(serverData.toUpperCase()); // Safe
}

// 02. Handle Dynamic Form Input
let userInput: unknown = 300;

// Type narrowing: Check if it's a number before doing math
if (typeof userInput === "number") {
  console.log(userInput + 100); // Safe (Result: 400)
}

// 03. Read data from browser localStorage
let savedTheme: unknown = "dark-mode";

if (typeof savedTheme === "string") {
  console.log(`Current Theme is ${savedTheme}`);
}

// Difference with 'any'
let flexibleData: any = "Hello";
flexibleData.toUpperCase(); // Allowed without checking (risky if it becomes a number later!)

let safeData: unknown = "Hello";
// safeData.toUpperCase(); // Error! TS forces you to check type first (Type Guard)