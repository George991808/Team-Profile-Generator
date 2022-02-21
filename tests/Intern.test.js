const Intern = require('../lib/Intern');


describe('Intern class test', () => {




    it('can it create a new intern', () => {

        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern).toBeInstanceOf(Intern);

    })

    it("is name intern name george", () => {
        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern.name).toBe("george");
    });

    it("is name intern id 1", () => {
        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern.id).toBe(1);
    });

    it("is name intern email george@12.com", () => {
        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern.email).toBe("george@12.com");
    });



    it("check getName function", () => {
        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern.getName()).toBe("george");
    });

    it("check getID function", () => {
        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern.getID()).toBe(1);
    });

    it("check getEmail function", () => {
        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern.getEmail()).toBe("george@12.com");
    });

    it("check getSchool function", () => {
        const intern = new Intern("george", 1, "george@12.com", "UWA", "intern")
        expect(intern.getSchool()).toBe("UWA");
    });
})