// interface User 
// {
//   readonly username: string;
//   age: number;
//   isDrinking?: boolean; // '?' veut dire que la propriété est optionnelle
//   isSmoking?: boolean;
//   isHealthy?: boolean;
//   [propName: string]: any;
// };

// const ids: readonly string[] = ['1', '2', '3'];
// ids.push('1'); // erreur car readonly

// const user: User = 
// {
//   username: 'Jean',
//   age: 30,
//   isDrinking: true,
//   isSmoking: true,
//   isHealthy: false
// }

// user.username = "Pierre"; // erreur car readonly

// const newUser: User = 
// {
//   username: 'Paul',
//   age: 50,
//   isOnline: true,
//   isOffline: false
// };

// function greet (user: { username: string }): void
// {
//   console.log(`hello ${user.username}`); 
// }

// function death(user: User) {}

// function goodShape(user: User) {}

// greet(user);

// interface FonctionDeRecherche {
//   (critere1: number, critere2: string): boolean;
// }

// let recherche: FonctionDeRecherche = (crit1, crit2) => {
//   return true;
// }

// interface User2 {
//   prenom: string;
//   direBonjour(nom: string): void;
// }

// const user2: User2 = {
//   prenom: 'Jean',
//   direBonjour(nom: string) {
//     console.log(`Bonjour, je m'appelle ${this.prenom} ${nom}`);
//   }
// }

interface Vehicule {
  name: string;
  drive: () => void;
}

interface Engine {
  type: string;
}

// interface Car extends Vehicule, Engine {
//   wheels: number;
// }

// const newCar: Car = {
//   name: 'Tesla',
//   type: 'electric',
//   wheels: 4,
//   drive() {}
// }

class Car implements Vehicule, Engine {
  drive() {}
  constructor(public name: string, public type: string, public wheels: number) {}
}

class Player {
  constructor(private isPlaying: boolean) {}
}

interface PlayerBasic extends Player {
  play: () => void;
}

class Mp3Player extends Player implements PlayerBasic {
  play() {}
}

class Game extends Player implements PlayerBasic {
  play() {}
}