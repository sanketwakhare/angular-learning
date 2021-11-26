import { Customer } from './Customer';

// new Customer instance
let myCustomer02 = new Customer("Robin", "Smith");
myCustomer02.firstName = "John";
myCustomer02.lastName = "Doe";
console.log(`${myCustomer02.firstName} ${myCustomer02.lastName}`);