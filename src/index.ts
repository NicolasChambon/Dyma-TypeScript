// LESSON 1
// function Component(target: any) { // target correspond au constructeur de la classe
//   console.log('LOG : component MyComponent');
// }

function ComponentFactory({selector, template}: { template: string, selector: string }) {
  const elem = document.querySelector(selector);
  elem.innerHTML = template;

  return (target: any) => {
  }
}

@ComponentFactory({
  template: '<h1>Hello</h1>',
  selector: 'app'
})
class MyComponent {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
//----------
// LESSON 2
const foo = new MyComponent('jean');
const bar = new MyComponent('marie');

//----------
