const Manager = require('../lib/Manager');


describe('Manager class test', () => {




    it('can it create a new manager', () => {

        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager).toBeInstanceOf(Manager);

    })

    it("is name manager name george", () => {
        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager.name).toBe("george");
    });

    it("is name manager id 1", () => {
        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager.id).toBe(1);
    });

    it("is name manager email george@12.com", () => {
        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager.email).toBe("george@12.com");
    });



    it("check getName function", () => {
        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager.getName()).toBe("george");
    });

    it("check getID function", () => {
        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager.getID()).toBe(1);
    });

    it("check getEmail function", () => {
        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager.getEmail()).toBe("george@12.com");
    });

    it("check getOfficeNumber function", () => {
        const manager = new Manager("george", 1, "george@12.com", 2, "manager")
        expect(manager.getOfficeNumber()).toBe(2);
    });
})