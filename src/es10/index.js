let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array1 = [1, 2, 3, 4, 5];

console.log(array1.flatMap((value) => [value, value * 2]));

let hello = "     Hello World";
console.log(hello.trimStart());

//* Object.fromEntries()

let entries = [
  ["name", "Enrique"],
  ["age", 25],
];

console.log(Object.fromEntries(entries));

//* Symbols

let mySymbol = "my symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
