/*
npm install -g typescript
to run this code in vs code editor 
add quokka.js extension
ctr+shift+p   "quokka.js start on current file"
ref:typescript documentation
you should uncomment error code to see specific error 
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

// Differences Between Type Aliases and Interfaces
/*
1.both are similar main difference is "type cannot be re-opened to add new
 properties vs an interface which is always extendable"
 This means that you can use an interface as a base to create a new interface with additional 
 properties or methods, but you can't do the same with a type alias.

2.Another difference is that interfaces are generally preferred when you're defining the shape
 of an object, while type aliases are better suited for creating complex types or when you need to
  create a union or intersection of existing types.

In general, the choice between type aliases and interfaces depends on the specific use case
 and personal preference.

 */

//  Interface example
// Extending an interface
// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

function getBear(): Bear {
  // implementation of getBear()
  const bear: Bear = { name: "test1", honey: true };
  return bear;
}

const bear: Bear = getBear();
console.log(bear.name);
console.log(bear.honey);

// Adding new fields to an existing interface
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
  salary: number;
}

const employee: Employee = {
  name: "John Smith",
  age: 30,
  jobTitle: "Software Engineer",
  salary: 100000,
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.jobTitle);
console.log(employee.salary);

// Type   *********

// Extending a type via intersections
type Animal1 = {
  name: string;
};

type Bear1 = Animal1 & {
  honey: boolean;
};

function getBear1(): Bear1 {
  // implementation of getBear1()
  const bear1: Bear1 = { name: "Darshil", honey: true };
  return bear1;
}

const bear1: Bear1 = getBear1();
console.log(bear1.name);
console.log(bear1.honey);

// A type cannot be changed after being created

type Person1 = {
  name: string;
  age: number;
};

// This will result in a compile-time error because the type "Person" cannot be redefined.
//   type Person1 = {
//     jobTitle: string;
//   };

// Type Assertions***********

/**
 * Sometimes you will have information about the type of a value that TypeScript can’t know about.
For example, if you’re using document.getElementById, TypeScript only knows that this will 
return some kind of HTMLElement, but you might know that your page will always have an 
HTMLCanvasElement with a given ID.
In this situation, you can use a type assertion to specify a more specific type:
 * 
 */

// ex:
//1. const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// or
// 2. const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

/**
 * 
 * TypeScript only allows type assertions which convert to a more specific or less specific 
 * version of a type. This rule prevents “impossible” coercions like:


 * 
 */
// const x = "hello" as number;

// Literal Types

let changingString = "Hello World";
changingString = "Olá Mundo"; //it will allow
changingString;
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system

const constantString = "Hello World";
constantString;
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation

// null and undefined
/**
 * 
JavaScript has two primitive values used to signal absent or uninitialized value: null and undefined.
TypeScript has two corresponding types by the same names. How these types behave depends on whether you have 
the strictNullChecks option on.
 */

// 1.strictNullChecks off
/**
 * With strictNullChecks off, values that might be null or undefined can still be accessed normally,
 * and the values null and undefined can be assigned to a property of any type. This is similar to how languages
 * without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs;
 * we always recommend people turn strictNullChecks on if it’s practical to do so in their codebase.
 */

// 2.strictNullChecks on
/**
 * With strictNullChecks on, when a value is null or undefined,
 * you will need to test for those values before using methods or properties on that value.
 * Just like checking for undefined before using an optional property, we can use narrowing to check for values that might
 *  be null:
 */

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
doSomething(null);
doSomething("av");
