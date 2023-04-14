
let stundent = {
    name: "gufran",
    age: 23,
    city: "istanbul",
    salary: 5000,
    exam: ['turkısh', 'math', 'english'],

    login:function () {
        console.log("login");
    },
    logout:function () {
        console.log("logout");
    },
    print:function () {
        console.log(this.exam);
        this.exam.array.forEach(exam => 2);
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("city: " + this.city);
        console.log("salary: " + this.salary);
    }




}
stundent.print();
console.log(this);
stundent.login();
stundent.logout();

console.log(stundent.name);

stundent.name = "ahmet";
console.log(stundent.name);
console.log(stundent["name"]);
