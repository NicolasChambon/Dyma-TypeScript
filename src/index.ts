const foo: string = 'une string'; // "une string"; // `une ${ 'string' }`;
const bar: number = 0; // 5.5; // -1.2; // 10e2;
const myBool: boolean = true; // false; // 1 === 1;

const myObj: object = []; // new Map(); // { name: 'nico' };
const anything: any = {}; // '123';
const myConst: 5 = 5; // le type est la valeur elle même, il n'y a pas d'autre possibilité

const myArr: number[] = [1, 2, 3];
const myArr1: Array<string> = ['un', 'deux', 'trois'];
const tuple: [number, string] = [1, 'deux'];

enum Couleur {
  Bleu = 10,
  Blanc,
  Rouge = 5
};

let a: Couleur = Couleur.Bleu;
let b: Couleur = Couleur.Blanc;
let c: Couleur = Couleur.Rouge;

console.log(a); // 10
console.log(b); // 11
console.log(c); // 5

enum Couleur2 {
  Bleu = '#2980b9',
  Vert = "#27ae60",
  Rouge = '#c0392b'
};

console.log(Couleur2.Vert); // #27ae60

const foo2: null = null;
const foo3: undefined = undefined;
const foo4: void = undefined; // undefined;

function add(nb1: number, nb2: number): void {
  console.log(nb1 + nb2);
}

function error(message: string): never {
  throw new Error(message);
}

function echec(): never {
  return error('Problème !')
}

function boucleInfinie(): never {
  while(true) {

  }
}

let username: any;
username = 'jean';

// const nbr: number = (<string>username).length;
const nbr: number = (username as string).length;