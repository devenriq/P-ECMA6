// //* dynamic import
// const button = document.getElementById("btn");

// button.addEventListener("click", async function () {
//   const module = await import("./file.js");
//   module.hello();
// });

// //* Big number

// const aBigNumber = 94100395812983919049012n;

// const anotherBitNumber = BigInt(94100395812983919049012);

// console.log(aBigNumber);
// console.log(anotherBitNumber);

// //* Promise.allSettled

// const promise1 = new Promise((resolve, reject) => reject("reject"));
// const promise2 = new Promise((resolve, reject) => resolve("resolve"));
// const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

// Promise.allSettled([promise1, promise2, promise3]).then((response) =>
//   console.log(response)
// );

//* Global this

// console.log(window);
// console.log(globalThis);

// //* Operador null

// const fooo = null ?? "default string";
// console.log(fooo);

// const user = {};

// console.log(user?.profile?.email);

// if (user?.profile?.email) {
//   console.log("Existe email");
// } else {
//   console.log("No existe email");
// }

const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, kiwi, apple, orange, ";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
