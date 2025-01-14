// storage 
let array = []






let number = [1, 2, 3, 4, 5]

let total = number[0] + number[1]
console.log(total); // 1+2=3 

let stringNumber = [1, "Bir", 2, "true"]
console.log(stringNumber);
console.log(typeof stringNumber[3]);
console.log(number);
console.log(number.length);

let dosyalar = [1, 2, "", "", 5, null]
console.log(dosyalar);
console.log(typeof dosyalar[2]);


function getExtremeElements(array) {
    const firstElement = array[0]; //1
    const lastElement = array[array.length - 1]; // 5

    return [firstElement, lastElement]; // [1,5]
}

console.log(getExtremeElements([1,2,3,4,5])[0]);


let a = 5;

let b = a;
console.log(a); // 5
console.log(b); // 5

a = 10;
b = a
console.log(a); // 10
console.log(b);

let arabalar = [
    ["i10","i20","yaris"],
    ["corolla", "bmv", "accent"],
    ["togg", "chery", "range rover"]
]
console.log(arabalar[2[1]]); //undefined
console.log(arabalar[2][1]);


const words = ["JavaScript", "is", "amazing"]

console.log(words.join("")); 
console.log(words.join(" "));
console.log(words.join("-"));

// buzdolabı örneği

let buzdolabi = []
let meyve = "portakal"
let meyve1 = "elma"
let meyveler = ["portakal", "elma", "armut", "muz"]

console.log(meyveler);
console.log(meyveler[2][1]); // r 
console.log(meyve[1]); // o

console.log(meyveler[meyveler.length - 1]);

meyveler[1] = "kivi"
console.log(meyveler);
let sebzeler = ["patlıcan", "biber", "domates"]
let ayakkabilar = ["nike", "adidas"]


let firstProcess = sebzeler.concat(ayakkabilar)
console.log(firstProcess);
buzdolabi.push(firstProcess)
let test =[1,3]
buzdolabi.push(meyveler)
console.log(buzdolabi);

// let buzdolabi = [];
// let sebzeler = ["domates", "biber", "patlıcan"];
// let ayakkabi = ["çanta", "ayakkabı", "çorap"];
// let firstPro = sebzeler.concat(ayakkabi);
// console.log(firstPro); 
//  firstPro.push(meyveler);
//  buzdolabi = firstPro;
// console.log (buzdolabi);

let ayakkabiNumaralari = []

for (let i = 36 ; i <= 45 ; i++ ){
    ayakkabiNumaralari.push(i)
}

console.log(ayakkabiNumaralari);



// Lesson Two


const planets = ["Earth", "Mars", "Venus"];

// console.log(planets[1]); //Mars

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// Earth, Mars, Venus

let index1 = 0

while (index1 < planets.length) {
    console.log(planets[index1]);
    index1++ // index +=1,  index = index+1
}

//Argumants

function multiply() {
    let total = 1; //1 ,2,6,24
  
    for (const arg of arguments) {
      total *= arg;
    }
  
    return total;
  }
  
  console.log(multiply(1, 2, 3,4));


  function greet(username = "Burak") {
    console.log(`Hello, ${username}!`);
  }
  
  greet("Ahmet");
  greet(); 






  function araba() {
    console.log("araba çağırıldı");
    ev(); //tamamladım
    console.log("araba fonksiyonu bitti");
  }
  
  function ev() {
    console.log("ev çağırıldı");
  }
  
  console.log("çağrılan birşey yok");
  araba(); //tamamaladım
  console.log("herşey bitti");


//   "çağrılan birşey yok"
//   "araba çağırıldı"
//   "ev çağırıldı"
//   "araba fonksiyonu bitti"
//   "herşey bitti"

  
  function bar() {
    console.log("bar");
  }
  
  function baz() {
    console.log("baz");
  }
  
  function foo() {
    console.log("foo");
    bar(); //tamamladım
    baz(); //tamamladım
  }
  
  foo();
  
//   "foo"
//   "bar"
//   "baz"
