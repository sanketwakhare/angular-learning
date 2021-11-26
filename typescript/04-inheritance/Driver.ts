import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 20);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 15);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(10, 20, 40, 50);
console.log(myRectangle.getInfo());