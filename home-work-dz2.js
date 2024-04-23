// ----- Завдання № 1 ----

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const fruitNames = fruts.map((item) => item.name);

// console.log(fruitNames);

// ----- Завдання № 2 -----

// for (let i = 2; i <= 10; i += 2) console.log(i);

// --- те ж саме, але з continue ----

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) continue;

//   console.log(i);
// }

// ---- Завдання 3 ----

// let a = 0;
// while (a < 5) {
//   a++;
//   console.log(`цифра ${a}!`);
// }

// --- Завдання 4 -----

// let number;
// do {
//   number = prompt("Введіть число більше 100", "");
//   if (!number) {
//     break;
//   }
// } while (number <= 100);

// --- Завдання 5 ----

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let totalAge = 0;
// for (let i = 0; i < girls.length; i++) {
//   totalAge += girls[i].age;
// }

// const averageAge = totalAge / girls.length;
// console.log("Середній вік:", averageAge);
