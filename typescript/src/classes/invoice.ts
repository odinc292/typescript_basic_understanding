// classes

// export class Invoice {
//   //   client: string; //here default it is public property hat means we can access it ouside class and modify it
//   //   readonly details: string; //we can access it but can't modify it using readonly
//   //   private amount: number;
//   //   //  private newField:string//if we don't want to modify it or accces it otdide class

//   //   constructor(c: string, d: string, a: number) {
//   //     this.client = c;
//   //     this.details = d;
//   //     this.amount = a;
//   //   }

//   // alternative ofthis
//   constructor(
//     public client: string,
//     readonly details: string,
//     private amount: number
//   ) {}
//   format() {
//     return `${this.client} owns ${this.amount} and details are ${this.details}`;
//   }
// }

// implementing interface in the class
import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    public client: string,
    readonly details: string,
    private amount: number
  ) {}
  format() {
    return `${this.client} owns ${this.amount} and details are ${this.details}`;
  }
}
