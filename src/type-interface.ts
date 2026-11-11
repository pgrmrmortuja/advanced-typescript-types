// Type vs Interface

// 01. Primitives & Unions: Only 'type' can do this, 'interface' is strictly for objects
type ID = number;
//! interface IDk = number; // Error: interface cannot define primitive types

type Role = "admin" | "member";
//! interface Rolek: "admin" | "member"; // Error: interface cannot define union types

// Defining object shape with interface
interface User {
    name: string;
    id: ID; // Using our custom type
    role: Role;
}

const user: User = {
    name: "AB",
    id: 123,
    role: "admin"
};

// 02. Extending Interface: Inheriting properties using 'extends'
interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "Felix Catus",
    breed: "Persian",
};

// 03. Extending Type (Intersection): Combining types using '&'
type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};

const car: Car = {
    model: "Corolla",
    brand: "Toyota",
};

// 04. Declaration Merging (Interface Only):
// Same interface name merges automatically into one combined interface
interface IEmployee {
    name: string;
}

interface IEmployee {
    id: number;
}

const employee: IEmployee = {
    name: "abc",
    id: 123
};

// 05. Duplicate Type Alias is NOT allowed (Throws Error)
//! type TEmployee = { name: string };
//! type TEmployee = { id: number }; // Error: Duplicate identifier 'TEmployee'