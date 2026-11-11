// Bottom Type: never (Represents values that will NEVER occur)

// 01. System crashed function
// This function throws an error, so it never finishes normally or returns a value.
function showSystemCrash(): never {
  throw new Error("System has crashed");
}

// 02. Cannot assign any value to 'never'
let count: number = 100;
//! let wrongCount: never = 100; // Error: No value can ever be assigned to 'never'

// 03. Exhaustiveness Checking with Order Status
// Ensures all possible union cases are handled safely.
type OrderStatus = "Pending" | "Delivered" | "Cancelled";

function checkOrderStatus(status: OrderStatus) {
  if (status === "Pending") {
    return "processing order";
  } else if (status === "Delivered") {
    return "order is delivered";
  } else if (status === "Cancelled") {
    return "order has cancelled";
  } else {
    // If all cases above are handled, 'status' becomes 'never' here.
    // If you add "Shipped" to OrderStatus later and forget to add an 'else if', TS will show an error here!
    let extraCheck: never = status;
    return extraCheck;
  }
}

//! type OrderStatus = "Pending" | "Delivered" | "Cancelled" | "Shipped" // Error