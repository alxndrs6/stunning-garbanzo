//definiowanie zmiennej jako obiekt
let myVariable = {
  a: "text1",
  b: "text2",
};
console.log(myVariable);

//zastępowanie elementu zmiennej
myVariable.a = "new text1";
console.log(myVariable);

//dodanie kolejnego elementu do zmiennej
myVariable.c = "text3";
console.log(myVariable);

//zastępowanie całej zmiennej
myVariable = {
  a1: "text4",
};
console.log(myVariable);

//definiowanie stałej
const myConstant = {
  d: "text5",
  e: "text6",
};

//zastępowanie elementu stałej
//nie można zastąpić całej stałej, ale można zmieniać jej elementy
myConstant.d = "new text5";
console.log(myConstant);
