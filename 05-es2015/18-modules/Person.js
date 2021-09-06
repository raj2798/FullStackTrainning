/*export default */ class Person {
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

const sum = (x, y) => x + y;
/*export */ const diff = (x, y) => sum(x, -y);

export { Person as default, diff };
