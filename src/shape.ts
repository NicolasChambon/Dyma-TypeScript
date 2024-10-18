export namespace Shape {
  export class Circle {
  }
  export class Square {
    width: number;
    getArea(): number {
      return this.width * this.width;
    }
  }
}