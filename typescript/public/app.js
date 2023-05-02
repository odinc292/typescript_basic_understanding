import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let docOne;
let docTwo;
docOne = new Invoice("darshak", "for food", 300);
docTwo = new Payment("Darian", "for plmbing", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log("docs...", docs);
// // interfaces
// interface person {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// let me: person = {
//   name: "odin",
//   age: 30,
//   speak(text: string): void {
//     console.log("test");
//   },
//   spend(amount: number): number {
//     console.log("amount", amount);
//     return amount;
//   },
//   //   skills:[] we can't add extra
// };
// console.log("me....", me);
// creating new instances of the class
let inv1 = new Invoice("odin", "has paid some", 45);
let inv2 = new Invoice("oddin", "has paid some", 36);
let invoices = [];
// invoices.push("ajj");//we won't be able to do it
invoices.push(inv1);
invoices.push(inv2);
console.log("inv1...", inv1);
console.log("invoices....", invoices);
invoices.forEach((ele) => {
    console.log(ele.client, ele.details, ele.format());
});
const anchor = document.querySelector("a"); //using "!" means i know it is definently here
console.log(anchor);
console.log(anchor.href);
// if (anchor) {
//   console.log(anchor.href);
// }
// const form = document.querySelector("form")!;
// console.log("form....", form);
// we can access through class also but type will be different
// const form1 = document.querySelector(".new-item-form")!;
// console.log("form1...", form1);
const form1 = document.querySelector(".new-item-form");
console.log("form1...", form1.children);
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    //   console.log(type.value);
    //   console.log(tofrom.value);
    //   console.log(details.value);
    //   console.log(amount.valueAsNumber);
    console.log("fial doc", doc);
    list.render(doc, type.value, "end");
});
// generic function
// const fct1 = (obj: object) => {
//   let uuid = Math.floor(Math.random() * 1000);
//   return { ...obj, uuid };
// };
// let val = fct1({ name: "odin", age: 78 });
// console.log("val....", val);
// console.log(val.name);//we wont be able to get value .name
// to overcome with this
const fct1 = (obj) => {
    let uuid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uuid });
};
let val = fct1({ name: "odin", age: 78 });
console.log("val....", val);
console.log(val.name);
// with interface
// using enum
var resourceType;
(function (resourceType) {
    resourceType[resourceType["dev"] = 0] = "dev";
    resourceType[resourceType["test"] = 1] = "test";
    resourceType[resourceType["man"] = 2] = "man";
})(resourceType || (resourceType = {}));
const firstemp = {
    name: "test",
    age: 50,
    data: "hh",
    resourceType: resourceType.dev,
};
// tuples
let ar = ["abc", 4, true];
ar[0] = false;
ar[2] = "dv";
let tup = ["advhdf", 4, false]; //here types of index is fixed
