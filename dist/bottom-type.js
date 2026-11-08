//Bottom type : never
//01
//System crashed function
function showSystemCrash() {
    throw new Error("System has crashed");
}
//02
// Not assign other type
let count = 100;
function checkOrderStatus(status) {
    if (status === "Pending") {
        return "processing order";
    }
    else if (status === "Delivered") {
        return "order is delivered";
    }
    else if (status === "Cancelled") {
        return "order has cancelled";
    }
    else {
        let extraCheck = status;
        return extraCheck;
    }
}
export {};
//! type OrderStatus = "Pending" | "Delivered" | "Cancelled" | "Shipped" // Error
