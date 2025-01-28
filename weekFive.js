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



//LESSON 2


const sayilar = [1,2,3,4,5,6,7]

const ciftsayilar = sayilar.filter(sayi => sayi % 2 === 0) // [2,4,6]
const ciftsayilar1 = sayilar.find(item => item % 2 === 0) // 2

console.log(ciftsayilar);
console.log(ciftsayilar1);

const kullanicilar = [
    {id:1 , ad: "Mehmet" , yas:25},
    {id:2 , ad: "Ahmet" , yas:20},
    {id:3 , ad: "Ayşe" , yas:35},
    {id:4 , ad: "Ali" , yas:15},
    {id:5 , ad: "Fatma" , yas:10},

]

const yetiskinKullanici = kullanicilar.filter(kullanici => kullanici.yas >= 18)
console.log(yetiskinKullanici);
if(yetiskinKullanici.length > 0) {
    console.log("web sitemize kayıt olabilir",yetiskinKullanici);
}else{
    console.log("Hiçkimse kayıt olamaz");
}


const adUzunlugu = kullanicilar.find(item => item.ad.length === 5 )
console.log(adUzunlugu);



const corona = [
    {ad:"ali", degeri:true},
    {ad:"ali1", degeri:true},
    {ad:"ali2", degeri:false},
    {ad:"ali3", degeri:true},
    {ad:"ali4", degeri:false},

]

// corona olan öğrencileri

const negative = corona.filter(student => !student.degeri)
console.log(negative);

const firstCorona = corona.find(item => item.degeri)
console.log(firstCorona);


// every methodu

const ages = [15,20,5,30]
const adult = ages.every(age => age >= 15)
console.log(adult); // false

const product = [
    {name :"Laptop" , stock :true},
    {name :"Tablet" , stock :false},
    {name :"Telefon" , stock :true},
    {name :"Tablet1" , stock :false},


]

const allStockCheck = product.every( item => item.stock)
console.log(allStockCheck); // 

const stoktaYok = product.filter(item => !item.stock)
console.log(stoktaYok);

// if(allStockCheck === false) {
//     console.log(`${Object.keys(stoktaYok[0])[0]} ${Object.values(stoktaYok[0])[0]} bu ürün stokta yok`);
// }
const olmayanlar = []
stoktaYok.map(item => olmayanlar.push(item.name))
console.log(olmayanlar);

if(allStockCheck === false) {
    console.log(`${olmayanlar} bu ürünler stokta yok `);
}
// some

const market = [
    {id:1, meyveAdi:"elma", onSale:false },
    {id:2, meyveAdi:"elma1", onSale:false },
    {id:3, meyveAdi:"elma2", onSale:true },
    {id:4, meyveAdi:"elma3", onSale:false },

]
const saleCheck = market.some(item => item.onSale)
console.log(saleCheck);


const doorNumbers = [2,4,6,7,10,15]

const roomCheck = doorNumbers.some(item => item % 2 !== 0)
console.log(roomCheck);

const ciftOda = []
const tekOda = []

// const roomNumber =  doorNumbers.filter(item => item % 2 === 0 )
// const roomNumber1 =  doorNumbers.filter(item => item % 2 !== 0 )

// ciftOda.push(roomNumber)

if(doorNumbers.filter(item => item % 2 === 0 )) {
    ciftOda.push(doorNumbers.filter(item => item % 2 === 0))
}
if (doorNumbers.filter(item => item % 2 !== 0)){
    tekOda.push(doorNumbers.filter(item => item % 2 !== 0))
}

console.log(ciftOda);
console.log(tekOda);


//reduce

const rakamlar = [1,4,6,7,8,9]
const sum = rakamlar.reduce((toplam , rakam)=> toplam + rakam , 0)
console.log(sum);
// toplam = 1

// 0 + 1 = 1
// 1 + 4 = 5
// 5 + 6 = 11
// 11 + 7 = 18
// 18 + 8 = 26
// 26 + 9 = 35

const card = [
    {name :"Laptop" , price :2000},
    {name :"Tablet" , price :3000},
    {name :"Telefon" , price :10000},
    {name :"ablet1" , price :7000},
]

const totalPrice = card.reduce((toplam ,productPrice) => toplam + productPrice.price,0 ) 
console.log(totalPrice);
//toSorted -sort
const elemanlar =  [4,2,7,5]
const sorted = elemanlar.toSorted()
console.log(sorted);
console.log(elemanlar);
const elemanlar1 =  [4,2,7,5]
const sorted1 =  elemanlar1.sort()
console.log(elemanlar1);
console.log(sorted1);


const descending = elemanlar.toSorted((a,b) => b - a )
console.log(descending);

//isme göre sıralama 

const byName = card.toSorted((a,b) => a.name.localeCompare(b.name))
const byPrice = card.toSorted((a,b) => b.price - a.price)
console.log(byPrice);

console.log(byName);

