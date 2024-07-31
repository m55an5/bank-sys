import { Bank } from "../domain/bank";
import { Employee, BankManager } from "../models/employee";
import { Customer } from "../models/customer";

describe('Bank', () => {

    let bank: Bank;
    let manager: BankManager;
    let employee: Employee;
    let customer1: Customer;
    let customer2: Customer;

    beforeEach(() => {
        bank = new Bank();
        manager = new BankManager();
        employee = new Employee("Customer Rep", 1);

        bank.addCustomer("fred", 1000);
        bank.addCustomer("bob", 3000);

        bank.addEmployee(employee);
        bank.addEmployee(manager);
    });

    test('should add employees', () => {
        expect(bank.getEmployees().length).toBe(2);
    });
    
    test('should add customers', () => {
        expect(bank.getCustomers().length).toBe(2);
    });

    test('shoukd not allow an employee to get total bank balance', () => {
        expect(
            () => 
                bank.getBankBalance(employee)
        )
        .toThrow("Employee doesn't have the required access level");
    });

    test('shoukd allow a manager to get total bank balance', () => {
        const res = bank.getBankBalance(manager);
        expect(res).toBe(4000);
    });

});
