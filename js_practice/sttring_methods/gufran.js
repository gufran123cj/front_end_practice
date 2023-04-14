let name = "Gufran";
let surnanme="Kaya";
let ay = 7;
let isAlive = true;
let age = 25;


console.log("name", ay, isAlive, age);

let namesurname = "name" +" "+ surnanme;
let end = namesurname.lastIndexOf("a");
let substrat = namesurname.substring(0, 5);
let replace = namesurname.replace("Gufran", "Güfran");
console.log(end);
console.log(namesurname);
console.log(namesurname[3])
console.log(substrat);

//how many charrecters in namesurname
console.log(namesurname.length);

if (namesurname.length > 10) {
    console.log("too long");
} else {
    console.log("ok");
    
}

console.log(namesurname.toUpperCase());