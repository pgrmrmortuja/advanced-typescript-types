//basic union
type Identity = string | number;
const id: Identity = 1234;

//literal type
type Status = "pending";
const status: Status = "pending";

//literal union
type Role = "user" | "admin" | "manager";
const userRole: Role = "admin";

//object union
type Admin = {id: number, role: "admin", privileges: string[]};
type Member = {id: number, role: "member", plans: string[]};

type User = Admin | Member;

const user: User = {id: 123, role: "member", plans: ['A', 'B']};