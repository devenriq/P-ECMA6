// function newFunction(name, age, country) {
//   var name = name || "oscar";
//   var age = age || 32;
//   var country = country || "MX";
//   // console.log(name, age, country);
// }

// //es6
// function newFunction2(name = "Enrique", age = 25, country = "Pe") {
//   // console.log(name, age, country);
// }

// newFunction();

// let hello = "Hello";
// let world = "World";
// let epicPhrase = hello + " " + world;

// // console.log(epicPhrase);

// let epicPhrase2 = `${hello} ${world}`;
// // console.log(epicPhrase2);

// let lorem =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam, \n voluptate necessitatibus odit doloribus nemo. Iste nulla qui itaque ex. Illo possimus animi delectus iusto modi qui incidunt, consequuntur nulla?";

// let lorem2 = `otra frase cualquiera
//   que necesito para seguir viendo
//   las diferencias entre ECS6 y
//   versiones anteriores`;

// // console.log({
// //   lorem,
// //   lorem2,
// // });

//* desestructuración

// let person = {
//   name: "Enrique",
//   age: 24,
//   country: "Perú",
// };
// let { name, age, country } = person;

// console.log(name, age, country);

//* let

// const objeto = {
//   name: "enrique",

//   age: 24,
// };

// objeto = {
//   name: "Diana",

//   age: 23,
// };

// //console.log(objeto); Arroja un error de asignación

//* propiedad de objetos mejorada

// let name = "Enrique";
// let age = 24;

// //antes
// obj = { name: name, age: age };

// //es6
// obj2 = { name, age };

// //* Arrow Functions

// const names = [
//   { name: "Enrique", age: 24 },
//   { name: "Diana", age: 24 },
// ];

// let listOfNames = names.map((item) => console.log(item.name));

// let listOfNames2 = (name, age, country) => {};

// const square = (num) => num * num;

// console.log(square(4));

// //* asincronismo

// const helloPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve("Hey!");
//     } else {
//       reject("Ups!");
//     }
//   });
// };

// helloPromise()
//   .then((response) => console.log(response))
//   .then(() => console.log("Hello"))
//   .catch((error) => console.log(error));

//* Clases

// class calculator {
//   constructor() {
//     this.valueA = 0;
//     this.valueB = 0;
//   }
//   sum(valueA, valueB) {
//     this.valueA = valueA;
//     this.valueB = valueB;

//     return this.valueA + this.valueB;
//   }
// }

// const calc = new calculator();
// console.log(calc.sum(2, 3));

// import { hello } from "./module";

// hello();

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
