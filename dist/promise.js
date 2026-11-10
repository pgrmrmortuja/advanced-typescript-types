//01
//Promise without Generic
const fetchUser = async () => {
    const res = await fetch("/user/01");
    const data = await res.json();
    return data;
};
const user = await fetchUser();
console.log(user.height); //! undefined or app crash because there will be no "height" property
const fetchUser2 = async () => {
    const res = await fetch("/user/2");
    const data = await res.json(); //as syntax
    return data;
};
const user2 = await fetchUser2();
//console.log(user2.age); //! crash because there will no age property;
console.log(user2.name); //No crash
const fetchUser3 = async () => {
    const res = await fetch("/user/3");
    const data = await res.json(); //as syntax
    return data;
};
const user3 = await fetchUser3();
if (user3) {
    console.log(user3.name);
}
//OR optional chaining
console.log(user3?.role);
const fetchUser4 = async () => {
    const res = await fetch("/user/4");
    const data = await res.json();
    return data;
};
const user4 = await fetchUser4();
console.log(user4?.data.role);
const fetchUser5 = async () => {
    try {
        const res = await fetch("/user/5");
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
};
const user5 = await fetchUser5();
console.log(user5?.name);
export {};
