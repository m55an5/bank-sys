# bank-sys

Models/ 
hsa the model classes Employee and BankManager, which have inheritance relationship. This is because bank has emplyees whcih can be a bank manager, and a clear distintion which allows to assign different access levels for various roles. 

Access role - access level is assigned to each role upon creation, this is a easy, robust solution to the requirements. Not as complex as policies, permission or RBAC systems. 

Domain/ 
bank - acting as a service maintains lists of employees and customers, and has a function to get total balance in the bank, accessable to any role greater than and including 3. 


**Clone the repository**: 
```bash
git clone https://github.com/your-username/bank-system.git
cd bank-sys 
```

**Install Dependencies**:
```bash
npm install
```

**compile**:
```bash
npx tsc
```

**Run tests**:
```bash
npm test
```
