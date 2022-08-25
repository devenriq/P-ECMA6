const data = {
  frontend: "Enrique",
  backend: "Diana",
  design: "Eric",
};

//Object.entries convierte un objeto en una matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values devuelve los valores de un objeto a un arreglo. Omite la llave y devuelve el valor de la misma.
const values = Object.values(data);
console.log(values);
console.log(values.length);

//.padStart y .padEnd añaden una cantidad de caracteres, los cuales pueden ser indicados
const string = "Hello";
console.log(string.padStart(9, "hi, "));
console.log(string.padEnd(12, "-----e"));

//async / await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World", 3000))
      : reject(new Error("test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunciton = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunciton();
