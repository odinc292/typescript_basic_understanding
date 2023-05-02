// function

let greet: Function;
// greet="abc"//it won't allow
greet = () => {
  console.log("itts a function");
};

let add = (num1: number, num2: number, num3?: number | string) => {
  //num3: number | string=10 dafult value
  console.log("sum is ", num1 + num2);
  return num1 + num2;
};

add(3, 4);
// add(3);  it wont allow
// add(3, "ddb");

// function return type
let minus = (a: number, b: number) => {
  return a - b;
};
let result = minus(5, 3); //here type of result will always be tpe of a-b we can't overrite result value later

// ANOTHER WAY TO RETURN TYPE
let minus1 = (a: number, b: number): number => {
  return a - b; //if we wont retuen anything from func then it reurn void type
};
let result1 = minus1(7, 2);

// when we are using same type in several function as example

// let func1 = (name: string | number, item: string) => {
//   console.log(name);
// };

// let func2 = (user: { name: string | number; uid: string }) => {
//   console.log(user);
// };

// instead of using pipe or repetative code

type stringOrNum = string | number;
let func1 = (name: stringOrNum, item: string) => {
  console.log(name);
};

// let func2 = (user: { name: stringOrNum; uid: string }) => {
//   console.log(user);
// };

type objectwithName = {
  name: stringOrNum;
  uid: string;
};
let func2 = (user: objectwithName) => {
  console.log(user);
};

let greet3: (a: string, b: string) => void;

greet3 = (name: string, greeting: string) => {
  console.log(`${name} is saying ${greeting}`);
};
greet3("om", "namaste");
