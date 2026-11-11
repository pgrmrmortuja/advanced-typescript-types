# 📘 Advanced TypeScript রিভিশন নোট (Bengali Revision Guide)

TypeScript-এর advance কনসেপ্টগুলো সহজে মনে রাখার জন্য এই নোটটি তৈরি করা হয়েছে।

---

### ১. Union Type & Unit Type
- **এটি আসলে কী ও কেন লাগে:** যখন তুমি চাও যে একটা ভেরিয়েবল বা আর্গুমেন্টে শুধু নির্দিষ্ট কিছু মানই দেওয়া যাবে, অন্য কিছু না (যেমন: শুধু "admin" বা "user" হতে পারবে, এর বাইরে কিছু না)।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** পাইপ বা ভার্টিক্যাল বার (`|`) চিহ্ন।
- **ছোট কোড:**
```typescript
type Role = "admin" | "user"; // এই দুটোর বাইরে কিছু দেওয়া যাবে না
let myRole: Role = "admin";
```

---

### ২. Type Alias vs Interface
- **এটি আসলে কী ও কেন লাগে:** কোডে কোনো অবজেক্টের কাঠামো (shape) কেমন হবে, তার একটা ব্লুপ্রিন্ট বা টেমপ্লেট বানিয়ে রাখা। অবজেক্টের জন্য সাধারণত interface আর প্রাইমিটিভ বা ইউনিয়নের জন্য type ব্যবহার করা হয়।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** `type` অথবা `interface` কিওয়ার্ড।
- **ছোট কোড:**
```typescript
// Interface দিয়ে অবজেক্ট স্ট্রাকচার
interface User {
    name: string;
    age: number;
}

// Type দিয়ে Primitive বা Union টাইপ
type ID = string | number;
type Status = "active" | "inactive";
```

---

### ৩. Top Types (unknown & any)
- **এটি আসলে কী ও কেন লাগে:** সার্ভার বা বাইরে থেকে এমন কোনো ডেটা আসছে যার টাইপ তুমি জানো না। `unknown` হলো সেফ (ব্যবহারের আগে চেক করতে হয়), আর `any` হলো আনসেফ (TypeScript সব চেকিং বন্ধ করে দেয়)।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** `unknown` বা `any` কিওয়ার্ড।
- **ছোট কোড:**
```typescript
// unknown ব্যবহার (সেফ - চেকিং বাধ্যতামূলক)
let inputData: unknown = "hello";
if (typeof inputData === "string") {
    console.log(inputData.toUpperCase());
}

// any ব্যবহার (আনসেফ - কোনো চেকিং ছাড়াই কাজ করবে, রিস্কি)
let dynamicData: any = 100;
dynamicData.toUpperCase(); // কম্পাইল টাইমে কোনো এরর দেবে না, কিন্তু রানটাইমে ক্র্যাশ করতে পারে!
```

---

### ৪. Nullish Types (null & undefined)
- **এটি আসলে কী ও কেন লাগে:** কোনো ভেরিয়েবলের মান যে এই মুহূর্তে নেই বা ফাঁকা আছে, তা বোঝাতে এগুলো ব্যবহার করা হয়।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** `null`, `undefined` এবং ইউনিয়ন (`|`) অপারেটর।
- **ছোট কোড:**
```typescript
// null ব্যবহার (ভ্যালু জানাশোনা নেই বা ইচ্ছাকৃত ফাঁকা)
let userEmail: string | null = null; 

// undefined ব্যবহার (এখনো কোনো ভ্যালু অ্যাসাইন করা হয়নি)
let userPhone: string | undefined = undefined;
```

---

### ৫. Bottom Type (never)
- **এটি আসলে কী ও কেন লাগে:** এমন একটা অবস্থা বোঝাতে এটি লাগে যা কখনো ঘটবে না বা ফাংশন কখনো স্বাভাবিকভাবে শেষ হবে না (যেমন: ক্র্যাশ করা বা সব কন্ডিশন চেক হয়ে যাওয়ার পর এক্সট্রা কেস ধরা)।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** `never` কিওয়ার্ড।
- **ছোট কোড:**
```typescript
function throwError(): never {
    throw new Error("System crashed!"); // এই ফাংশন কখনো নরমালি রিটার্ন করবে না
}
```

---

### ৬. Type Narrowing (বিভিন্ন উপায়ে টাইপ চেক করা)
- **এটি আসলে কী ও কেন লাগে:** যখন একটা ভেরিয়েবলের একাধিক টাইপ থাকে, তখন `if-else` দিয়ে চেক করে নিশ্চিত হওয়া যে এই মুহূর্তে ঠিক কোন টাইপটি নিয়ে কাজ করছি।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** `typeof`, `in`, `instanceof`, বা `===`।
- **ছোট কোড:**
```typescript
// A. typeof (primitive এর জন্য)
function checkType(val: string | number) {
    if (typeof val === "number") {
        console.log(val.toFixed(2));
    }
}

// B. in operator (অবজেক্টে প্রপার্টি আছে কিনা চেক করতে)
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
    }
}

// C. instanceof (ক্লাস বা Date এর ইনস্ট্যান্স চেক করতে)
function checkDate(val: string | Date) {
    if (val instanceof Date) {
        console.log(val.getFullYear());
    }
}
```

---

### ৭. Type Assertion
- **এটি আসলে কী ও কেন লাগে:** TypeScript যখন কোনো কিছুর টাইপ ঠিকমতো বুঝতে পারে না, তখন ডেভেলপার নিজে জোর করে বলে দেয় যে "এটার টাইপ এটা ধরে নাও, আমি শিওর"।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** `as` কিওয়ার্ড অথবা নন-নাল নিশ্চিত করার জন্য `!` অপারেটর।
- **ছোট কোড:**
```typescript
// A. as কিওয়ার্ড দিয়ে Type Assertion
let someData: any = "Hello TypeScript";
let strLength = (someData as string).length; 

// B. Non-Null Assertion (!) দিয়ে নিশ্চিত করা যে এটি null বা undefined নয়
let userName: string | undefined = "Reyad";
console.log(userName!.toUpperCase());
```

---

### ৮. Custom Type Guard (is keyword)
- **এটি আসলে কী ও কেন লাগে:** যখন নিজের পছন্দমতো লজিক দিয়ে একটা ফাংশন বানিয়ে চেক করতে চাও যে ডেটাটি নির্দিষ্ট কোনো টাইপের কি না, তখন `is` কিওয়ার্ড ব্যবহার করা হয়।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** কাস্টম ফাংশনে `parameter is Type` সিনট্যাক্স।
- **ছোট কোড:**
```typescript
// কাস্টম গার্ড ফাংশন
function isString(data: unknown): data is string {
    return typeof data === "string";
}

function processData(data: unknown) {
    if (isString(data)) {
        console.log(data.toUpperCase()); // TS এখন বিশ্বাস করবে এটি স্ট্রিং
    }
}
```

---

### ৯. Generics (<T>)
- **এটি আসলে কী ও কেন লাগে:** এমন কোড বা ফাংশন বানানো যা যেকোনো টাইপের ডেটার সাথেই কাজ করতে পারে, কিন্তু টাইপ সেফটি হারায় না।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** ডায়মন্ড ব্র্যাকেট বা এঙ্গেল ব্র্যাকেট `<T>`।
- **ছোট কোড:**
```typescript
function identity<T>(arg: T): T {
    return arg; // যে টাইপ পাঠাবে, সেটাই রিটার্ন করবে
}
let output = identity<string>("Reyad");
```

---

### ১০. Promise & Async/Await (Promise<T>)
- **এটি আসলে কী ও কেন লাগে:** যখন সার্ভার থেকে ডেটা আনতে একটু সময় লাগে (`async/await`), তখন কোডটি বলে দেয় যে সার্ভার থেকে ফিউচারে কি টাইপের ডেটা ফিরে আসবে।
- **কী কিওয়ার্ড/সিনট্যাক্স লাগে:** `async`, `await`, এবং `Promise<...>`.
- **ছোট কোড:**
```typescript
interface User {
    name: string;
}

async function fetchUserData(): Promise<User> {
    const res = await fetch("/api/user");
    const data = await res.json() as User;
    return data; // ফিউচারে একটি User অবজেক্ট রিটার্ন করবে
}
```