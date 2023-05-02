"use strict";
// function
let greet;
// greet="abc"//it won't allow
greet = () => {
    console.log("itts a function");
};
let add = (num1, num2, num3) => {
    //num3: number | string=10 dafult value
    console.log("sum is ", num1 + num2);
    return num1 + num2;
};
add(3, 4);
// add(3);  it wont allow
// add(3, "ddb");
// function return type
let minus = (a, b) => {
    return a - b;
};
let result = minus(5, 3); //here type of result will always be tpe of a-b we can't overrite result value later
// ANOTHER WAY TO RETURN TYPE
let minus1 = (a, b) => {
    return a - b; //if we wont retuen anything from func then it reurn void type
};
let result1 = minus1(7, 2);
let func1 = (name, item) => {
    console.log(name);
};
let func2 = (user) => {
    console.log(user);
};
let greet3;
greet3 = (name, greeting) => {
    console.log(`${name} is saying ${greeting}`);
};
greet3("om", "namaste");
