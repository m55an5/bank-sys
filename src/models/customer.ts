export class Customer {
    private name: string;
    private balance: number;

    constructor(name: string, balance: number){
        this.name = name;
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public withdraw(amount: number): boolean {
        if (amount > this.balance) {
            return false;
        }
        this.balance -= amount;
        return true;
    }

    public sendFunds(to: Customer, amount: number): boolean {
        if (amount <= this.balance) {
            this.balance -= amount;
            to.receiveFunds(amount);
            return true;
        }
        return false;
    }

    public receiveFunds(amount: number): void {
        this.balance += amount;
    }
}