"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 20);
let myCircle = new Circle_1.Circle(5, 10, 15);
let myRectangle = new Rectangle_1.Rectangle(10, 20, 40, 50);
// declare array of Shapes
let shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (let shape of shapes) {
    console.log(shape.getInfo());
}
