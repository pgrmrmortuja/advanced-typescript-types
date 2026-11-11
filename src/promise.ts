// Promises & Async/Await with Generics

// Shared interface used across the examples below
interface User {
    name: string;
    role: string;
}

// 01. Promise without Generic (Returns Promise<any> by default - risky!)
const fetchUser = async () => {
    const res = await fetch("/user/01");
    const data = await res.json(); // 'data' is 'any'
    return data;
};

const user = await fetchUser();
console.log(user.height); //! Risky: No TS error, even though 'height' doesn't exist

// 02. Promise with Generic (Safe: TS knows the exact shape of returned data)
const fetchUser2 = async (): Promise<User> => {
    const res = await fetch("/user/2");
    const data = await res.json() as User; // Type assertion
    return data;
};

const user2 = await fetchUser2();
//! console.log(user2.age); // TS Error: Property 'age' does not exist on type 'User'
console.log(user2.name); // Safe

// 03. Promise with Union (User | undefined)
// Useful when data might not exist or server returns nothing
const fetchUser3 = async (): Promise<User | undefined> => {
    const res = await fetch("/user/3");
    const data = await res.json() as User;
    return data;
};

const user3 = await fetchUser3();

if (user3) {
    console.log(user3.name);
}
// Or use Optional Chaining (?.) to avoid crashes
console.log(user3?.role);

// 04. Nested Generic Interface (Real-world API response wrapper)
interface ApiResponse<T> {
    data: T;
    success: boolean;
}

// TS automatically infers the return type as Promise<ApiResponse<User>>
const fetchUser4 = async () => {
    const res = await fetch("/user/4");
    const data = await res.json() as ApiResponse<User>;
    return data;
};

const user4 = await fetchUser4();
console.log(user4?.data.role);

// 05. Error Handling with try-catch
// Prevents app crashes when network fails or server is down
const fetchUser5 = async (): Promise<User | undefined> => {
    try {
        const res = await fetch("/user/5");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return undefined; // Explicitly return undefined on error
    }
};

const user5 = await fetchUser5();
console.log(user5?.name);