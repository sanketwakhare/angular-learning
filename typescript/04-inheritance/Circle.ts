import { Shape } from "./Shape";

class Circle extends Shape {

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    // override getInfo method
    public getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}

export { Circle }