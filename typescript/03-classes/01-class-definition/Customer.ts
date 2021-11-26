class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


// new Customer instance
let myCustomer = new Customer("Robin", "Smith");
// myCustomer.firstName = "Lily";
// myCustomer.lastName = "Rose";

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);