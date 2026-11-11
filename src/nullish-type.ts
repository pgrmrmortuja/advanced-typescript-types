// Nullish Types: null (intentional absence of value) and undefined (not assigned yet)

// 01. Get user profile photo
let profilePicUrl: string | null = null;

if (profilePicUrl !== null) {
  console.log("Picture uploaded");
} else {
  console.log("No picture");
}

// 02. User social media bio
let userBio: string | undefined = undefined; 

if (userBio !== undefined) {
  console.log(`User Bio is: ${userBio}`);
} else {
  console.log("No Bio uploaded");
}

// Nullish Coalescing Operator (??)
// It checks if a value is null or undefined, and provides a default fallback value.
let customBio: string | undefined = undefined;
let displayBio = customBio ?? "Default: Hello there! I am using TypeScript.";
console.log(displayBio); // Output: "Default: Hello there! I am using TypeScript."