import { Customer } from "../models/customer";

describe('Customer', () => {

    let fred: Customer;
    let lisa : Customer;
    let bob: Customer;

    beforeEach(() => {
        fred = new Customer('Fred', 500);
        lisa = new Customer('Lisa', 1500);
        bob = new Customer('Bob', 2000);
    });

    test('should create customers with given name and balance ', () => {
        expect(fred.getBalance()).toBe(500);
        expect(lisa.getBalance()).toBe(1500);
        expect(bob.getBalance()).toBe(2000);
    })

    test('should not allow to send amount greater than balance', () => {
        const res = fred.sendFunds(bob, 1000);
        expect(res).toBe(false);
        expect(fred.getBalance()).toBe(500);
        expect(bob.getBalance()).toBe(2000);
    });

    test('should send funds to another customer', () => {
        const res = fred.sendFunds(lisa, 200);
        expect(res).toBe(true);
        expect(fred.getBalance()).toBe(300);
        expect(lisa.getBalance()).toBe(1700);
    });

    test('shold not allow withdraw amount greater than balance', () => {
        const res = bob.withdraw(2100);
        expect(res).toBe(false);
        expect(bob.getBalance()).toBe(2000);
    });

});