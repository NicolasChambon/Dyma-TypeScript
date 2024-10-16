// let userStatus: 'online' | 'offline' | 'busy' = 'online';

// let value: number | string;
// value = 5;
// value = 'hello';
// // value = true; // Error: Type 'boolean' is not assignable to type 'number | string'.

// interface Car {
//   category: 'car';
//   seat: number;
//   drive: () => void;
// };

// interface Truck {
//   category: 'truck';
//   seat: number;
//   load: (amount: number) => void;
//   drive: () => void;
// };

// const myVehicle: Car | Truck = {
//   category: 'truck',
//   seat: 4,
//   load: (amount: number): void => {},
//   drive: () => {}
// };

// function vehiculeFactory(type: 1 | 2): Car | Truck {
//   if (type === 1) {
//     return {
//       category: 'car',
//       seat: 4,
//       drive: () => {}
//     };
//   } else {
//     return {
//       category: 'truck',
//       seat: 2,
//       load: (amount: number): void => {},
//       drive: () => {}
//     };
//   }
// }

// const foo = vehiculeFactory(2);

// if (foo.category === 'truck') {
//   foo.load(5);
// }

// function startTrip(v: Car | Truck) {
//   v.drive ();
//   switch (v.category) {
//     case 'car':
//       break;
//     case 'truck':
//       v.load(5);
//       break;
//   }
// }

// interface Bird {
//   fly(): void;
// }

// interface Whale {
//   swim(): void;
// }

// function isBird(animal: Bird | Whale): animal is Bird {
//   return (animal as Bird).fly !== undefined;
// }

// function move(animal: Bird | Whale) {
//   if (isBird(animal)) {
//     animal.fly();
//   } else {
//     animal.swim();
//   }
// }
  
// function move(animal: Bird | Whale) {
//   if ('fly' in animal) {
//     animal.fly();
//   } else {
//     animal.swim();
//   }
// }

// function foo(a: string | number) {
//   if (typeof a === 'number') {
//     a.toFixed();
//   }
// }

// class A {
//   getA(){}
// }

// class B {
//   getB(){}
// }

// const a = new A();
// const b = new B();

// function bar(x: A | B) {
//   if (x instanceof A) {
//     x.getA();
//   } else {
//     x.getB();
//   }
// }

// interface User {
//   username: string;
// }

// interface Moderator {
//   deleteMessage: () => void;
//   editMessage: () => void;
// }

// interface AddContent {
//   addMessage: () => void;
// }

// interface BasicUser extends User, AddContent {}
// interface Admin extends User, AddContent, Moderator {}

// let newUser: User & AddContent = {
//   username: 'Paul',
//   addMessage: () => {}
// }

// let admin: User & AddContent & Moderator = {
//   username: 'Jean',
//   addMessage: () => {},
//   deleteMessage: () => {},
//   editMessage: () => {}
// }

// type customModulos = 1 | 2 | 3;

// type ObjectId = string;

// type User = {
//   username?: string;
//   age: number;
//   address?: {
//     city: string;
//   }
// };

// const myUser: User = {
//   username: 'Jean',
//   age: 30
// };

// const city = myUser.address?.city;

// const username = myUser.username || 'guest'; // if username is null or undefined then 'guest' is used
// const username = myUser.username ?? 'guest'; // if username is null or undefined then 'guest' is used but not if username is 0 or false of empty string


type UserStatusType = 'online' | 'offline' | 'busy';

let userStatus: UserStatusType = 'online';

function getUserStatus(user): UserStatusType {
  return user.status;
}