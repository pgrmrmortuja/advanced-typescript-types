// Unit Types (Literal Types): Restricts a variable to exact, specific values only

// 01. Define User Role (Only these 3 exact strings are allowed)
type UserRole = "admin" | "editor" | "user";
let currentUser: UserRole = "admin";

// Error: "super_admin" is not part of UserRole type
//! currentUser = "super_admin";

// 02. Select Payment Method
type PaymentMethod = "Bkash" | "Nagad" | "Card";
let myMethod: PaymentMethod = "Bkash";

// 03. Track Order Status
type OrderStatus = "Pending" | "Delivered" | "Shipped";
let currentStatus: OrderStatus = "Delivered";

// Using literal types in function parameters for strict checking
function updateOrder(status: OrderStatus) {
  console.log(`Order is now: ${status}`);
}

updateOrder("Shipped"); // Valid
//! updateOrder("Cancelled"); // Error: Not in OrderStatus