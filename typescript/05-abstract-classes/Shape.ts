abstract class Shape {

    // constructor
    constructor(private _x: number, private _y: number) { }

    // getters and setters
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }

    // method
    public getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }

    // abstract method
    abstract calculateArea(): number;
}

export { Shape };