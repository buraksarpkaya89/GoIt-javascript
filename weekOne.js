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

// console.log(name);

// Matematiksel işlemler

let a = "İstanbul";
let b = "Kocaeli";
let c = 6
let d = 8
let e = "8"
let total = c+b+d
// console.log("total degeri : ",total, "number total : ", c+d)

// console.log(a+b);
// console.log(a+c);
// console.log(c+d);
// console.log(c+e);
// console.log(a.length + c)
// // cemgü
// console.log(c+b+d);
// console.log((c+d) + b);
// console.log(d-c); // 2
// console.log(d/c);
// console.log(c*d);
// console.log(6 ** 8);
// console.log(8 % 6); // 2

let f = c+d // 14

// console.log(f += 6); // f = f + 6

let ages = 25;
// ages = ages + 1;
ages *= 2;
// console.log(ages); 

// //NaN (Not a Number)
// console.log(a/b);

// console.log(0/0);
// console.log(e/d);



// // console türevleri
// console.error("Hata mesajı")
// console.info("info mesajı")
// console.warn("test")

// hatalı uygulama 
// console.log(test)
// let test ="123"

// Tür dönüştürme

let number1 = "15"
let number2 = "3"

// console.log(Number(number1) + Number(number2)); //18

let number3 = 15
let number4 = 3

// console.log(String(number3) + " " + String(number4));

//Template String

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); 

// console.log(`${number3} ile ${number4} toplamı ${number3 + number4} eder`)


//indeksleme

let surname ="Sarpkaya"

// console.log(surname[0]); // first - S
// console.log(surname[surname.length-1]); //last - a

//yanlış
surname[1] = "b"
// console.log(surname);


let ab = "10"

ab = ab +1 // 11
ab += 1 // 11


/*Yazım teknikleri
    camelCase = mySchool, mySchoolTeacher
    PascalCase = MySchool
    snake_case = my_school
    SCREAMING_CASE = MY_SCHOOL
    kebab-case = my-school
*/

//Karşılaştırma Operatörleri ( == , === , < , > , <= , >=, != )
// Eşitlik operatöründe 2 şey kontrol edilir. Değeri , türü

const a1 = "5"
const b1 = 5
const c1 = 6
const d1 = 6
// console.log(a1 == b1);
// console.log(a1 === b1);
// console.log(b1 < c1);
// console.log(c1 > b1);
// console.log(c1 <= d1);
// console.log(a1 <c1);
// console.log(b1 != d1);


// Dizileri sayıya dönüştürme

// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("5cm")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("cm5")); // NaN
// console.log(Number.parseInt("")); // NaN
// console.log(Number.parseInt("qweqwe")); // NaN


// console.log(Number("5")); // 5.0 = 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN

// console.log(Math.floor(Math.random() * 99)+1)


// console.log((8.762165).toFixed(4)); 



//FONKSİYONLAR

function Countries() {
    const bigCountry = "ABD"
    let smallCountry = "Litvanya"
    // console.log(bigCountry);
    // console.log(araba);
}

Countries();

// console.log(smallCountry);
//Arrow Function
const Country = () => {
    const bigCountry = "ABD"
    let smallCountry = "Litvanya"
}

Country();

// function colors() {
//     return(
//         <div>
//             merhaba dünya
//         </div>
//     )
    
    
// }

// colors()

// function colors1() {
//     return console.log("renkler burada gösteriliyor")
    
    
// }
// colors1()

//PARAMETRE EKLEYEBİLME

const Meyve = "Armut"


function Otel(name,roomNo,order){
    // console.log(`Merhaba ${name} , ${roomNo} numaralı odanıza talebiniz üzerine ${order} ürünü gönderilecektir`);
}

Otel("Ahmet",22,    Meyve)


function Mathematics(a,b){
    const total = a * b + 2
    return (total)
}

// console.log(Mathematics(10,10)); 









