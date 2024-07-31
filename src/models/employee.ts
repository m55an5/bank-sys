export class Employee {
    public role: string;
    public accessLevel: number;

    constructor(role: string, accessLevel: number) {
        this.role = role;
        this.accessLevel = accessLevel;
    }
}

export class BankManager extends Employee {
    constructor() {
        super('Bank Manager', 3);
    }
}