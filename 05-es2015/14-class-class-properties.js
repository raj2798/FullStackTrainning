class Person {
  constructor(name, age) {
    // this; // {}
    this.name = name;
    this.age = age;

    // return this;
  }

  // class properties syntax
  // a bound version of celebrateBirthday is created for every object that is created
  celebrateBirthday = () => {
    this.age++;
  };

  setName(name) {
    this.name = name;
  }
}

const john = new Person("John", 32); // an empty object {} is created

const celebrateBirthday = john.celebrateBirthday;
const setName = john.setName;

// celebrateBirthday(); // works -> increased john's age to 33
setName("Jonathan"); // does not work

console.log(john);
