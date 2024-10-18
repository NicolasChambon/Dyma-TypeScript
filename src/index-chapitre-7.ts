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

// console.log(myFruits[0].price);
// console.log(myCars[0].speed);

class Stack<T> {
  items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  display(): void {
    console.log(this.items);
  }
}

const newStackNumber = new Stack<number>();
newStackNumber.push(1);
newStackNumber.display();
newStackNumber.push(2);
newStackNumber.display();
const myNumber = newStackNumber.pop();
newStackNumber.display();
console.log(myNumber);

const newStackString = new Stack<string>();
newStackString.push('hello');
newStackString.display();
newStackString.push('world');
newStackString.display();
const myString = newStackString.pop();
newStackString.display();
console.log(myString);

interface Name {
  name: string;
}

function displayName<T extends Name>(object: T): void {
  console.log(object.name);
}

function displayProp<T, U extends keyof T>(object: T, prop: U): void {
  console.log(object[prop]);
}

displayProp({ name: 'toto' }, 'name');

// interface User {
//   username: string;
// }

// const myUser: Readonly<User> = {
//   username: 'toto',
// };

// myUser.username = 'tutu';

// interface User {
//   username: string;
//   age: number;
//   adress: {
//     city: string;
//   };
// }

// const newUser: User = {
//   username: 'toto',
//   age: 30,
//   adress: {
//     city: 'Paris',
//   },
// };

function editUser(user: User, editedUser: Partial<User>) { // Partial rend les propriétés optionnelles
  return { ...user, ...editedUser };
}

editUser(newUser, { age: 31 });

interface Page {
  title: string;
}

type PageType = 'home' | 'about' | 'contact';

const pages: Record<PageType, Page> = {
  home: {
    title: 'homepage',
  },
  about: {
    title: 'about',
  },
  contact: {
    title: 'contact',
  },
  signin: {           // Error: Type '{ title: string; }' is not assignable to type 'Page'.
    title: 'signin',
  },
}

interface User {
  username: string;
  age: number;
  adress: {
    city: string;
  };
}

// type LightUser = Pick<User, 'username' | 'age'>;

type LightUser = Omit<User, 'adress'>;