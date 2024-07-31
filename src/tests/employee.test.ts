import { Employee, BankManager } from "../models/employee";

describe('Employee', () => {
    let fred : Employee; 
    let bob: BankManager;

    beforeEach(() => {
        fred = new Employee("Customer Rep", 1);
        bob = new BankManager();
    });

    test('should create employee with given role and access level', () => {
        expect(fred.role).toBe('Customer Rep');
        expect(fred.accessLevel).toBe(1);
        expect(bob.role).toBe('Bank Manager');
        expect(bob.accessLevel).toBe(3);
    });
});