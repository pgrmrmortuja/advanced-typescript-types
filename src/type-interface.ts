type ID = number;
//! interface IDk = number;

type Role = "admin" | "member";
//! interface Rolek: "admin" | "member";

interface User {
    name: string;
    id: number;
    role: Role; // role: "admin" | "member"
}

const user: User = {
    name: "AB",
    id: 123,
    role: "admin"
}

//02 extends
interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "Felix Catus",
    breed: "Persian",
}

