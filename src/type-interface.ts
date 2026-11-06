type ID = number;
//! interface IDk = number;

type Role = "admin" | "member";
//! interface Rolek: "admin" | "member";

interface User{
    name: string;
    id: number;
    role: Role; // role: "admin" | "member"
}

const user: User = {
    name: "AB",
    id: 123,
    role: "admin"
}