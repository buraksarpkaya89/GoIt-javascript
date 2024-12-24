// Atama operatörü =
// const , let , var 

const araba = "Toyota"
// araba = "Hyundai"
// console.log(araba)
let ev = "Villa"
ev = "Apartman"
// console.log(ev)

const TC = "3462379467967"
let age = 19 
age =20
// console.log(age);


const renk = "sarı"
// console.log(renk);

// Boolean, String, Number, null, undefined

let value = true 
let value1 = false
// console.log(typeof value1);

// isLogin = true
// isVerify= false

let city = "İstanbul"
// console.log(typeof city);
let number = 9
// // console.log(typeof number);

let name;
name= ""
// keyword hatası
// let const = "test"

console.log(name);

// Matematiksel işlemler

let a = "İstanbul";
let b = "Kocaeli";
let c = 6
let d = 8
let e = "8"
let total = c+b+d
console.log("total degeri : ",total, "number total : ", c+d)

console.log(a+b);
console.log(a+c);
console.log(c+d);
console.log(c+e);
console.log(a.length + c)
// cemgü
console.log(c+b+d);
console.log((c+d) + b);
console.log(d-c); // 2
console.log(d/c);
console.log(c*d);
console.log(6 ** 8);
console.log(8 % 6);

let f = c+d // 14

console.log(f += 6);

let ages = 25;
// ages = ages + 1;
ages *= 2;
console.log(ages); 

//NaN (Not a Number)
console.log(a/b);

console.log(0/0);
console.log(e/d);



// console türevleri
console.error("Hata mesajı")
console.info("info mesajı")
console.warn("test")

// hatalı uygulama 
// console.log(test)
// let test ="123"

// Tür dönüştürme

let number1 = "15"
let number2 = "3"

console.log(Number(number1) + Number(number2)); //18

let number3 = 15
let number4 = 3

console.log(String(number3) + " " + String(number4));

//Template String

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); 

console.log(`${number3} ile ${number4} toplamı ${number3 + number4} eder`)


//indeksleme

let surname ="Sarpkaya"

console.log(surname[0]); // first
console.log(surname[surname.length-1]); //last

//yanlış
surname[1] = "b"
console.log(surname);


let ab = "10"

ab = ab +1 // 11
ab += 1 // 11









