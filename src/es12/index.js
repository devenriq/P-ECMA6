//* Numeric separators
// const value = 100_000_000_000_000_00;
// console.log(value);

// const string =
//   "JavaScript es maravilloso. Con JavaScript puedo crear el futuro de la web";

// const replacedString = string.replace("JavaScript", "Pyton");
// const replacedAllString = string.replaceAll("JavaScript", "Pyton");

// console.log(replacedString);
// console.log(replacedAllString);

//* métodos privados para clases

// class Message {
//   #show(val) {
//     console.log(val);
//   }

//   get #add(val){
//     ...
//   }
// }

// const message = new Message();
// message.show("Hola!");

//* Promise.any()

// const promise1 = new Promise((resolve, reject) => reject("1"));
// const promise2 = new Promise((resolve, reject) => resolve("2"));
// const promise3 = new Promise((resolve, reject) => resolve("3"));

// Promise.any([promise1, promise2, promise3]).then((response) =>
//   console.log(response)
// );

//* this.ref

// class anyClass {
//   constructor(element) {
//     this.ref = new weakRef(element);
//   }
// }

// let isTrue = true;
// let isFalse = false;
// console.log((isTrue &&= isFalse));

// console.log((isTrue ||= isFalse));

// console.log((isTrue ??= isFalse));
