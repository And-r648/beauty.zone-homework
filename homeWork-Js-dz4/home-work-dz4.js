// #### ====== ------ ЗАВДАННЯ № 1 ----- ===== ###

// const studentInfo = {
//   name: "Petro",
//   specialty: "lawyer",
//   showStudentInfo: function (gpa, missed) {
//     console.group(`${name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Speciality is ${this.specialty}`);
//     console.log(`Average point is ${gpa}`);
//     console.log(`Missed lessons is ${missed}`);
//     console.groupEnd();
//   },
// };
// --------------------------------------------------------------
// studentInfo.showStudentInfo.call(studentInfo, "28", "4");
// studentInfo.showStudentInfo.apply(studentInfo, ["28", "4"]);
// studentInfo.showStudentInfo.bind(studentInfo, "28", "4")();
// ----------------------------------------------------------------

// const student1 = {
//   name: "Stepan",
//   specialty: "doctor",
// };

// const student2 = {
//   name: "Iryna",
//   specialty: "dantist",
// };

// const student3 = {
//   name: "Dodik",
//   specialty: "linguist",
// };

// studentInfo.showStudentInfo.call(student1, "23, 3");
// studentInfo.showStudentInfo.call(student2, "33, 1");
// studentInfo.showStudentInfo.call(student2, "48, 0");

// studentInfo.showStudentInfo.apply(student1, ["23", "3"]);
// studentInfo.showStudentInfo.apply(student2, ["33", "1"]);
// studentInfo.showStudentInfo.apply(student3, ["48", "0"]);

// studentInfo.showStudentInfo.bind(student1, "23", "3")();
// studentInfo.showStudentInfo.bind(student2, "33", "1")();
// studentInfo.showStudentInfo.bind(student3, "48", "0")();

// ### ==== ------ ЗАВДАННЯ № 2 ------ ==== ###

// document.querySelector("#html").addEventListener("click", function () {
//   console.log("HTML це - мова розмітки");
// });

// document.querySelector("#css").addEventListener("click", function () {
//   console.log("CSS це - мова стилів");
// });
// ----------------------------------------------------------------------

// document.querySelector("#html").addEventListener("click", function () {
//   document.querySelector("#appear").innerHTML = "HTML це - мова розмітки";
// });

// document.querySelector("#css").addEventListener("click", function () {
//   document.querySelector("#appear").innerHTML = "CSS це - мова стилів";
// });
// -------------------------------------------------------------------------

// document.getElementById("html").onclick = function () {
//   console.log("HTML це - мова розмітки");
// };

// document.getElementById("css").onclick = function () {
//   console.log("CSS це - мова стилів");
// };

// document.getElementById("html").onclick = function () {
//   document.getElementById("appear").innerHTML = "HTML це - мова розмітки";
// };
// document.getElementById("css").onclick = function () {
//   document.getElementById("appear").innerHTML = "CSS це - мова стилів";
// };

// ### ==== ------ ЗАВДАННЯ № 3 ------ ==== ###

// function calcCost(fruit, price, quantity) {
//   const totalCost = price * quantity;
//   return "Товар: " + fruit + ", Вартість: " + totalCost;
// }

// console.log(calcCost("banana", 30, 4.5));
// console.log(calcCost("cherry", 58, 1.3));
// console.log(calcCost("orange", 89, 3.4));
