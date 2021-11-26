import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 20);
let myCircle = new Circle(5, 10, 15);
let myRectangle = new Rectangle(10, 20, 40, 50);

// declare array of Shapes
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
}