const Engineer = require('../lib/Engineer');


describe('Engineer class test', () => {




    it('can it create a new engineer', () => {

        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer).toBeInstanceOf(Engineer);

    })

    it("is engineer name george", () => {
        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer.name).toBe("george");
    });

    it("is engineer id 1", () => {
        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer.id).toBe(1);
    });

    it("is engineer email george@12.com", () => {
        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer.email).toBe("george@12.com");
    });



    it("check getName function", () => {
        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer.getName()).toBe("george");
    });

    it("check getID function", () => {
        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer.getID()).toBe(1);
    });

    it("check getEmail function", () => {
        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer.getEmail()).toBe("george@12.com");
    });

    it("check getGitHub function", () => {
        const engineer = new Engineer("george", 1, "george@12.com", "george145", "engineer")
        expect(engineer.getGitHub()).toBe("george145");
    });


})