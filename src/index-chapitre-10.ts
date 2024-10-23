// LESSON 1
// function Component(target: any) { // target correspond au constructeur de la classe
//   console.log('LOG : component MyComponent');
// }

// function LogFactory() {
//   console.log('in log factory');
//   return Component
// }

// function ComponentFactory({selector, template}: { template: string, selector: string }) {
//   console.log('in component factory');
//   const elem = document.querySelector(selector);
//   elem.innerHTML = template;
//   return (target: any) => {
//     console.log('decorator component');
//   }
// }

// function Method(
//   target: any,
//   propName: string,
//   propertyDescriptor: PropertyDescriptor
// ) {
  // console.log({
  //   target,
  //   propName,
  //   propertyDescriptor,
  // });

//   return {
//     value: function() {
//       if (this.name) {
//         propertyDescriptor.value.call(this);
//       } else {
//         console.log('Bonjour !');
//       }
//     }
//   }
// }

// function Method2(
//   target: any,
//   propName: string,
//   propertyDescriptor: PropertyDescriptor
// ) {
//   console.log({
//     target,
//     propName,
//     propertyDescriptor,
//   });
// }

// function Prop(target: any, propName: string) {
//   console.log({ target, propName });
// }

// @LogFactory()
// @ComponentFactory({
//   template: '<h1>Hello</h1>',
//   selector: 'app'
// })
// class MyComponent {
//   @Prop
//   public name: string;

//   // @Method
//   public greeting() {
//     console.log(`Hello ${this.name}`);
//   }

  // @Method2
//   get fancyName() {
//     return `Hello Monsieur ${this.name}`;
//   }

//   constructor(name?: string) {
//     this.name = name;
//   }
// }

//----------


// LESSON 2
// const foo = new MyComponent('toto');
// const bar = new MyComponent('marie');

//----------

// console.log(foo);

// for(let key in foo) { // for in permet de parcourir les clés d'un objet nous devrions avoir sur le log name mais pas greeting car enumerable est false
//   console.log(key);
// }

// foo.greeting();
