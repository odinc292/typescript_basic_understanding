// classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns ${this.amount} and details are ${this.details}`;
    }
}
