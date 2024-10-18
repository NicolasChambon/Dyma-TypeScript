import { Shape } from './shape';
import $ from 'jquery';

const circle = new Shape.Circle();
const square = new Shape.Square();

const myH1 = $('h1');

myH1.click((e) => {
  console.log('clicked');
});

console.log(myH1);

console.log(circle);
console.log(square);
