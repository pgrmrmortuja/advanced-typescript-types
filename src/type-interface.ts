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

//03 type from type
//intersection
type Vehicle = {
    brand: string
}

type Car = Vehicle &{
    model: string
}

const car: Car = {
    model: "Corolla",
    brand: "Toyota",
}

//04
//Interface Duplicate Name Only
interface IEmployee {
    name: string
}

interface IEmployee {
    id: number
}

const employee: IEmployee = {
    name: "abc",
    id: 123
}

//05
//! Not Possible Duplicate Type Alias
// type TEmployee = {
//     name: string
// }

// type TEmployee = {
//     id: number
// }


