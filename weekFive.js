function selamVer(isim, yas, callback) {
    console.log("Merhaba" + isim);
    callback(yas); //callback(18)
}

selamVer("Ahmet", 18, function (yas) {
    console.log(`Ahmet'in yaşı ${yas}`);
}
)


function hesapla(sayi1, sayi2, callback) {
    let sonuc = sayi1 + sayi2 // 8
    callback(sonuc) // callback(8)
}

hesapla(5, 3, function (cevap) {
    console.log("Sonuç: " + cevap);
})


function bolme(sayi1, sayi2, callback) {
    if (sayi2 === 0) {
        callback("Seçtiğiniz sayı sıfıra bölünemez", null)
    } else {
        callback(null, sayi1 / sayi2)
    }
}

bolme(10, 0, function (hata, sonuc) {
    if (hata) {
        console.log("Hatan var" + hata);
    } else {
        console.log("Sonuç :" + sonuc);
    }

})



function meyveler(meyve1, meyve2, meyve3, karisim) {
    console.log("Hoşgeldiniz meyve suyu yapacağız");
    karisim(meyve1, meyve2, meyve3)

}

meyveler("elma", "armut", "karpuz", function (test, test1, test2) {
    console.log(`Meyve karışımında bulunan meyveler şunlardır: ${test}, ${test1}, ${test2}`);
})



function greet(name) {
    console.log(`Welcome ${name}!`);
}

function notify(name) {
    console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback, callback2) {
    console.log(`Registering ${name}!`);
    callback(name);
    callback2(name)
}

registerGuest("Mango", greet, notify);

// Registering Mango
//Welcome Mango



// forEach

const numbers = [5, 10, 15, 20, 25];

// Klasik for
for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Index ${i}, value ${numbers[i]}`);
}

// forEach ile döngü
numbers.forEach(function (number, index) {
    console.log(`Index ${index}, value ${number}`);
});


const meyveler1 = ["elma", "armut", "muz", "kiraz"]

meyveler1.forEach(function (meyve) {
    console.log(`degeri : ${meyve}`);
})


const buyukharfler = ["MERHABA", "GOIT", "DUNYASI"];

const kucukHarfler = []

buyukharfler.forEach(function (kelime) {
    // console.log(kelimeler);
    kucukHarfler.push(kelime.toLowerCase())
})

console.log(kucukHarfler);


//Arrow Function


function classicAdd(a, b, c) {
    return a + b + c;
}

// Aynısını ok (arrow) fonksiyon ile tanımlanması

const arrowAdd = (a, b, c) => {
    return a + b + c
}



const takimlar = (a, b, c) => {
    console.log(`En büyük üç takım : ` + a + " " + b + " " + c);
}

takimlar("GS", "FB", "BJK")


const tekSonuc = () => console.log("object");

tekSonuc()


const numbers1 = [5, 10, 15, 20, 25];

// Anonim (anonymous) fonksiyon
numbers1.forEach(function (number, index) {
    console.log(`Index ${index}, value ${number}`);
});

// Arrow anonim fonksiyon
numbers1.forEach((number, index) => {
    console.log(`Index ${index}, value ${number}`);
});


//MAP OPERATÖRÜ


const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]



const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Orijinal dizi değişmedi
console.log(planets);


const sebzeler = ["patates", "soğan", "patlıcan", "kabak"]

sebzeler.map((sebze, index) => console.log(`Index: ${index} , değeri ${sebze}`))

const renkler = ["Sarı", "Mavi", "Turuncu", "Kırmızı"]

const harfBuyuk = []
const harfKucuk = []

renkler.map((renk) => {
    harfKucuk.push(renk.toLowerCase())
    harfBuyuk.push(renk.toUpperCase())
})
// renkler.map((renk) => harfBuyuk.push(renk.toUpperCase()))


console.log(harfBuyuk);
console.log(harfKucuk);


let scores = []

const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
];

students.map(item => scores.push(item.score))

console.log(scores);


let school = []
let school1 = []

const students1 = [
    { name: "Mango", courses: ["mathematics", "physics"] },
    { name: "Poly", courses: ["science", "mathematics"] },
    { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students1.map(student => student.courses);
const flattenedCourses = students1.flatMap(student => student.courses);
console.log(mappedCourses)
console.log(flattenedCourses)

const cumle = ["Merhaba arkadaşlar", "Nasıl gidiyor"]

const words = cumle.flatMap(item => item.split(" "))

console.log(words);

// map ["Merhaba", "arkadaşlar"],["Nasıl", "gidiyor"]]
// flatMap ["Merhaba", "arkadaşlar","Nasıl" , "gidiyor"]

//ARRAY OLMADIĞI İÇİN HATALI İŞLEM
// const test3 = { name: "Mango", score: 83 }

// test3.map(item =>console.log(item))




