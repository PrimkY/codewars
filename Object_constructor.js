function User (name, password, age) {
    // this = {};
    this.name = name;
    this.password = password;
    this.age = age;
    // return this
}

const elem1 = new User("Vasya", "123456", 41);
const elem2 = new User("Ivanko", "qwe123", 15)
console.log(elem1);
console.log(elem2);