"use strict";
class MyCustomer {
    // parameter properties
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // getters and setters for _firstName and _lastName
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// new Customer instance
let myCustomer02 = new MyCustomer("Robin", "Smith");
myCustomer02.firstName = "Rohit";
myCustomer02.lastName = "Sharma";
console.log(`${myCustomer02.firstName} ${myCustomer02.lastName}`);
