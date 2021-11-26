var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Robin", "Smith");
// myCustomer.firstName = "Lily";
// myCustomer.lastName = "Rose";
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
