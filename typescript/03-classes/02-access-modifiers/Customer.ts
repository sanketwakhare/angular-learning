class Customer {

    // by default properties are public in typescript
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // getters and setters for _firstName and _lastName
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}


// new Customer instance
let myCustomer = new Customer("Robin", "Smith");
myCustomer.firstName = "Lily";
myCustomer.lastName = "Rose";

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);