// const arr: string[] = ['pomme', 'banane', 'orange'];
const arr: Array<string> = ['pomme', 'banane', 'orange'];

const fruit = arr[0];

interface User {
  username: string;
}

const promise: Promise<User> = new Promise((resolve, reject) => {
  resolve({ username: 'toto' });
});

promise.then((res) => {
  res.username;
});

interface Fruit {
  name: string;
  price: number;
}

interface Car {
  speed: number;
}

const newCar: Car = {
  speed: 50,
};

const newFruit: Fruit = {
  name: 'pomme',
  price: 1,
};

interface AddItemFunction {
  <T>(item: T, collection: T[]): T[];
}

const addItemToCollection: AddItemFunction = (item, collection) => {
  return [...collection, item];
}

const myFruits = addItemToCollection(newFruit, []);
const myCars = addItemToCollection(newCar, []);

console.log(myFruits[0].price);
console.log(myCars[0].speed);