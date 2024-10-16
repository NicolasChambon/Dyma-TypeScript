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
