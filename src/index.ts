abstract class Engine  {
  constructor(protected type: string){}

  abstract stopEngine(): number;

}

class Vehicule extends Engine {
  wheel = 4;

  protected brand: string;

  constructor(brand: string) {
    super('v8');
    this.brand = brand;
  }

  stopEngine() {
    console.log('stop engine');
    return 0;
  }
}


class Voiture extends Vehicule {
  static className = 'Vehicule';

  static startCar() {
    console.log('car can start');
    
  }

  private maxSpeed: number = 100;
  readonly airbag: boolean;

  move(): void {
    console.log('car move');
  }

  faster(newSpeed: number): void {
    if (newSpeed < this.maxSpeed) {
      this.speed = newSpeed;
    }
  }

  stop(): void {
    console.log('car stop');
  }

  changeBrand(newBrand: string): void {
    this.brand = newBrand;
  }

  constructor(public speed: number) {
    super('dacia');
    this.airbag = true;
    this.speed = speed;
  }
}

let car: Voiture;
car = new Voiture(30);
// car.maxSpeed = 200;
// car.brand = 'tesla';
// car.changeBrand('citroen');

// console.log('car.wheel', car.wheel);
// console.log('car.maxSpeed', car.maxSpeed);
console.log(Voiture.className);
console.log(Voiture.startCar());


console.log('car', car);




//---------------

