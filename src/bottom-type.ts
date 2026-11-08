//Bottom type : never
//01
//System crashed function

function showSystemCrash(): never {
    throw new Error("System has crashed");
}

//02
// Not assign other type
let count: number = 100;

//! let count: never = 100 

//03
// Order status

type OrderStatus = "Pending" | "Delivered" | "Cancelled";

function checkOrderStatus(status: OrderStatus) {
    if (status === "Pending") {
        return "processing order";
    } else if (status === "Delivered") {
        return "order is delivered";
    } else if (status === "Cancelled") {
        return "order has cancelled";
    } else {
        
        let extraCheck: never = status;
        return extraCheck;
    }
}

//! type OrderStatus = "Pending" | "Delivered" | "Cancelled" | "Shipped" // Error