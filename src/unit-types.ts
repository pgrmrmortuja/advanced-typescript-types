//Unit Types - Literal Types

//01
//Define User Role

type UserRole = "admin" | "editor" | "user";
let currentUser: UserRole = "admin";

//! currentUser = "super_admin";

//02
//Select Payment Method

type PaymentMethod = "Bkash" | "Nagad" | "Card";
let myMethod: PaymentMethod = "Bkash";

//03
//Track Order Status

type OrderStatus = "Pending" | "Delivered" | "Shipped";
let currentStatus: OrderStatus = "Delivered";