class Customer {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
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
let myCustomer = new Customer("Robin", "Smith");
myCustomer.firstName = "Lily";
myCustomer.lastName = "Rose";
console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);
