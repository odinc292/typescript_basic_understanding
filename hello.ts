/*
to run this code in vs code editor 
add quokka.js extension
ctr+shift+p   "quokka.js start on current file"
ref:typescript documentation
*/

// some random example
console.log("Hello world!");
console.log("test");

// describing customer obj type
interface Customer {
  name: string;
  age: number;
}
// params checking
function checkparams(params: Customer) {
  console.log("params...", params);
}

console.log("checkparams........", checkparams({ name: "3", age: 5 }));
// return relevent type
function returnObj(): Customer {
  return {
    name: "odin",
    age: 4,
  };
}
console.log("returnObj..........", returnObj());

// class implementation

class createUse {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let newUser: Customer = new createUse("ahcjsad", 4);
console.log("newUser........", newUser);

// no need to write type explicitly every time
let msg = "hello odin";
let age = 40;

// age="30"
// assignig array in typescript
let arr: number[] = [2, 2];
let arr2: string[] = ["abc", "3"];
let ar3: Array<number> = [4, 4];
let ar4: Array<string> = ["sds", "vdfv"];
let ar5: Array<boolean> = [true, false];

// typescript any type

let obj: any = { name: "odin", id: 3 };
// obj.foo();
// obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
// names.forEach(function (s) {
//   console.log(s.toUppercase());
// });

// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toUppercase());
// });
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
console.log("names..........", names);

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties
function printName(obj: { first: string; last?: string }) {
  console.log("name is:  ", obj.first + " " + (obj.last ? obj.last : ""));
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union Types

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//   printId({ myID: 22342 });

// console.log("")
