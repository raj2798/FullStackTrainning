import Human, { diff } from './Person.js';

class Employee extends Human {
    constructor( name, age, role, dept ) {
        super( name, age ); // Person class contructor is called

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        console.log( `Happy birthday ${this.name}` );
        super.celebrateBirthday(); // calls Person class celebrateBirthday
    }
}

export {
    Employee
};