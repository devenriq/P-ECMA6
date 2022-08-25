// //operador de reposo que obtiene las características de un objeto que aún no se ha construído
// //con esto se puede obtener determinados objetos haciendo que la desestructuración no sea completa; sino de lo que se necesita

// const obj = {
//   name: "Enrique",
//   age: 24,
//   country: "Perú",
// };

// let { country, ...all } = obj;
// console.log(all);

// const obj2 = {
//   name: "Diana",
//   age: 25,
// };

// const obj3 = {
//   ...obj2,
//   country: "Perú",
// };

// console.log(obj3);

// const helloWorld = () => {
//   return new Promise((resolve, reject) => {
//     true
//       ? setTimeout(() => resolve("Hello World"), 3000)
//       : reject(new Error("Test Error"));
//   });
// };

// helloWorld()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{3})-([0-9]{1})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
