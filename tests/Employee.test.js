const Employee = require('../lib/Employee');


describe('Employee class test', () => {




    it('can it create a new employee', () => {

        const employee = new Employee("george", 1, "george@12.com")
        expect(employee).toBeInstanceOf(Employee);

    })

    it("is name employee name george", () => {
        const employee = new Employee("george", 1, "george@12.com")
        expect(employee.name).toBe("george");
    });

    it("is name employee id 1", () => {
        const employee = new Employee("george", 1, "george@12.com")
        expect(employee.id).toBe(1);
    });

    it("is name employee email george@12.com", () => {
        const employee = new Employee("george", 1, "george@12.com")
        expect(employee.email).toBe("george@12.com");
    });



    it("check getName function", () => {
        const employee = new Employee("george", 1, "george@12.com")
        expect(employee.getName()).toBe("george");
    });

    it("check getID function", () => {
        const employee = new Employee("george", 1, "george@12.com")
        expect(employee.getID()).toBe(1);
    });

    it("check getEmail function", () => {
        const employee = new Employee("george", 1, "george@12.com")
        expect(employee.getEmail()).toBe("george@12.com");
    });


})