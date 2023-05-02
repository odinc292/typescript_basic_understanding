import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    public reciepient: string,
    readonly details: string,
    private amount: number
  ) {}
  format() {
    return `${this.reciepient} is owed ${this.amount} and details are ${this.details}`;
  }
}
