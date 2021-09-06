class Person {
  constructor(name, age) {
    // this; // {}
    this.name = name;
    this.age = age;

    // return this;
  }

  celebrateBirthday() {
    this.age++;
  }

  setAge(age) {
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, role, dept) {
    super(name, age); // Person class contructor is called

    this.role = role;
    this.dept = dept;
  }

  promote() {
    this.role = `Senior ${this.role}`;
  }

  celebrateBirthday() {
    console.log(`Happy birthday ${this.name}`);
    super.celebrateBirthday(); // calls Person class celebrateBirthday
  }
}

const john = new Employee("John", 32, "Accountant", "Finance");
john.celebrateBirthday();
john.promote();
console.log(john);
