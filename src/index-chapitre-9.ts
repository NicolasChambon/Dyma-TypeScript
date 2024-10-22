// LESSON 1

// const h1 = document.querySelector('h1');

// const img = document.createElement('img');

// img.addEventListener('click', (e: MouseEvent) => {
//   e.
// });

// LESSON 2

// interface Person {
//   username: string;
//   age: number;
// }

// interface Car {
//   wheels: number;
// }

// interface PartialPerson {
//   username?: string;
//   age?: number;
// }

// type MyPartialPerson = {
//   [P in keyof Person]?: Person[P];
// }

// type MyPartial<T> = { [P in keyof T]?: T[P]; };

// const user: Person = {
//   username: 'john',
// };

// const user2: PartialPerson = {
//   username: 'john',
// };

// const user3: MyPartialPerson = {
//   username: 'marie',
// };

// const user4: MyPartial<Person> = {
//   username: 'tutu',
// };

// const car1: MyPartial<Car> = {
// };

// LESSON 3

// interface Lengthy {
//   length: number;
// }

// function func<T extends Lengthy>(x: T) {
//   return x.length;
// }

// declare function f<T>(x: T): T extends string ? string : boolean;

// f(1); // boolean
// f('1'); // string

// type MyType = Exclude<'a' | 'b', 'a'>;

// type MyExcludeType<T, U> = T extends U ? never : T;

// type MyType2 = MyExcludeType<'a' | 'b', 'a'>;

// type MyType3 = Extract<'a' | 'b', 'a'>;

// type MyExtractType<T, U> = T extends U ? T : never;

// type MyType4 = MyExtractType<'a' | 'b', 'a'>; 

// LESSON 4

// interface Func {
//   (tests: string, test2: number): boolean;
// }

// type MyReturnValueType<T> = T extends (...args: any[]) => infer FunctionReturn ? FunctionReturn : any;

// type FuncReturnType = MyReturnValueType<Func>;

// type MyFunctionParamsType<T> = T extends (...args: infer Params) => any 
//   ? Params
//   : void;

// type MyParameters = MyFunctionParamsType<Func>;

