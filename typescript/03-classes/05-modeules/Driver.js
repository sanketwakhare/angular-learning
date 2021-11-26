"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
// new Customer instance
let myCustomer02 = new Customer_1.Customer("Robin", "Smith");
myCustomer02.firstName = "John";
myCustomer02.lastName = "Doe";
console.log(`${myCustomer02.firstName} ${myCustomer02.lastName}`);
