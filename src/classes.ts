abstract class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = []

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }

    static createEmployee(name: string): object {
        return { name: name }
    }

   abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }

    describe () {
        console.log("IT Department - ID: " + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    /**
     * @author Thando Ncube
     * @throws Error("No Report Found")
     * @returns this.lastReport
     */
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error("No Report Found");
    }

    /**
     * @author Thando Ncube
     * @param value
     * @argument value
     */
    set mostRecentReport(value: string) {
        if (!value) {
           throw new Error("Please pass in a valid value! [string]")
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }
 
    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log("Accounting Department - ID: " + this.id)
    }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1)

const it = new ITDepartment('1', ['Max']);

it.addEmployee('Max')
it.addEmployee('Manu')

console.log(it)

const accounting = new AccountingDepartment('d2', [])
accounting.mostRecentReport = 'Year end report'
console.log(accounting.mostRecentReport)

accounting.addReport('Something went wrong...')
accounting.printReports();
accounting.describe()

var accounting1 = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();

console.log(accounting1, accounting2)