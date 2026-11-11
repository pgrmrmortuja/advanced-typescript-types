// 1. Basic Union: Can hold either a string OR a number
type Identity = string | number;
const id: Identity = 1234;
const id2: Identity = "EMP-101"; // Also valid

// 2. Literal Type (Unit Type): Only allows this exact value
type Status = "pending";
const status: Status = "pending";

// 3. Literal Union: Only allows one of these specific string values
type Role = "user" | "admin" | "manager";
const userRole: Role = "admin";

// 4. Object Union: User can be either an Admin OR a Member object
type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user: User = { id: 123, role: "member", plans: ["A", "B"] };

//Checking union type inside a function (Type Narrowing)
function printId(id: Identity) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // Safe to use string methods here
  } else {
    console.log(id); // TypeScript knows it's a number here
  }
}