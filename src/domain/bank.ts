import { Employee, BankManager } from "../models/employee";
import { Customer } from "../models/customer";

export class Bank {
    private employees: Employee[] = [];
    private customers: Customer[] =[];

    public getEmployees(): Employee[] {
        return this.employees;
    }

    public getCustomers(): Customer[] {
        return this.customers;
    }

    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    public addCustomer(name: string, balance: number): void {
        this.customers.push(new Customer(name, balance));
    }

    public getBankBalance(employee: Employee): number {
        if (employee.accessLevel < 3) {
            throw new Error("Employee doesn't have the required access level");
        }
        return this.customers.reduce((total, customer) => total + customer.getBalance(), 0);
    }
    
}