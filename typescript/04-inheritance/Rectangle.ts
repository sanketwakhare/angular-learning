import { Shape } from "./Shape";

export class Rectangle extends Shape {

    // parameter properties
    constructor(theX: number, theY: number, private _width: number, private _height: number) {
        super(theX, theY);
    }

    // getter and setters
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }

    // getInfo impl
    public getInfo(): string {
        return `width=${this._width}, height=${this._height}`;
    }
}