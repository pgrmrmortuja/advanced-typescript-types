//01
//Promise without Generic
const fetchUser = async () => {
    const res = await fetch("/user/01");
    const data = await res.json();
    return data;
}

const user = await fetchUser();

console.log(user.height); //! undefined or app crash because there will be no "height" property

//02
//Promise with Generic
interface User {
    name: string;
    role: string;
}

const fetchUser2 = async (): Promise<User> => {
    const res = await fetch("/user/2");
    const data = await res.json() as User; //as syntax
    return data;
}

const user2 = await fetchUser2();
//console.log(user2.age); //! crash because there will no age property;
console.log(user2.name); //No crash

//03
// Using "undefined" for not app crash, sometimes server can be down
interface User { //duplicate interface
    name: string;
    role: string;
}

const fetchUser3 = async (): Promise<User | undefined> => {
    const res = await fetch("/user/3");
    const data = await res.json() as User; //as syntax
    return data;
}

const user3 = await fetchUser3();

if(user3){
    console.log(user3.name);
}
//OR optional chaining
console.log(user3?.role);

//04
// With Generic Interface and Interface under Interface
// not use "Promise"

interface User {
    name: string;
    role: string;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const fetchUser4 = async() => {
    const res = await fetch("/user/4");
    const data = await res.json() as ApiResponse<User>;
    return data ;
}

const user4 = await fetchUser4();
console.log(user4?.data.role);

//05
//Using "try-catch" for not app crash, sometimes server can be down
// Handled Promise rejection
interface User {
    name: string;
    role: string;
}

const fetchUser5 = async(): Promise<User | undefined> => {
    try {
        const res = await fetch("/user/5");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const user5 = await fetchUser5();
console.log(user5?.name);

