// document.querySelector(".btn").addEventListener("click",(e) => {
//     e.stopImmediatePropagation()
//     console.log("buton çalıştı");

// })
// document.querySelector(".btn").addEventListener("click",(e) => {
//     console.log("kendi özelliğime ulaştım");
// })

// document.querySelector(".child").addEventListener("click", (e) => {
//     console.log("Child çalıştı");
// })

// document.querySelector(".parent").addEventListener("click", (e) => {
//     console.log("parent çalıştı");
// })

//KÖTÜ YÖNTEM
// document.querySelectorAll(".menu").forEach(button => {
//     button.addEventListener("click",(event)=> {
//         console.log("Tıklanan Değer: ", event.target.textContent);
//     })
// })

// // İYİ YÖNTEM DELEGASYON
// document.querySelector(".menu").addEventListener("click", (event)=>{
//     console.log(event);
//     if(event.target.tagName === "BUTTON"){
//         console.log("Tıklanan değer: " , event.target.textContent);
//     }
// })


console.log(_.sum([4, 2, 8, 6]))
console.log(_.uniq([1, 2, 2, 3, 4, 4, 5]));
console.log(_.merge({ username: "Burak" }, { surname: "Sarpkaya" }))



const user = {
    name: "Jacob",
    age: 32
};

const { age } = user;


console.log(user.name);
console.log(age);
// console.log(name); // boş döner


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
};

// Kitap nesnesinin bir kapak resmi yoksa bir kapak resmi ekleyin
const {
    title,
    author,
    coverImage = "https://via.placeholder.com/640/480"
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"


const book1 = {
    title1: "The Last Kingdom",
    author1: "Bernard Cornwell",
    genres1: ["historical prose", "adventure"],
    isPublic1: true,
    rating1: 8.38,
};
book1.author1 = "Burak sarpkaya"

// Yeniden Yapılandırma
const { title1, author1, isPublic1, rating1: bookRating1 } = book1;


console.log(author1);


const user1 = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
    cars: {
        a: "a",
        b: "b",
        c: "c",
    },
};

const {
    name,
    tag,
    stats: { followers, views, likes },
    cars: { a, b, c },
    test = "kedi"
} = user1;

console.log(test);


// Object Örnekleri


const kullanaci = {
    isim: "Ahmet",
    soyadi: "kaya",
    sehir: "istanbul"
}

const { isim, soyadi, sehir } = kullanaci

console.log(sehir);


const sirket = {
    sirketAdi: "GoIT",
    konum: {
        il: "Ankara",
        ilce: "Mamak"
    },
    iletisim: {
        tel: "1111",
        email: "okan@gmail.com"
    }
}

const {
    sirketAdi,
    konum: { il, ilce },
    iletisim: { tel, email }
} = sirket

console.log(email);

const calisan = {
    ad: "Ayşe",
    soyad: "yılmaz",
    departman: "IT",
    maasi: "100000"
}

const { ad, soyad, ...digerbilgiler } = calisan

console.log(digerbilgiler);
console.log(ad);

const magaza = [
    {
        urunAdi: "laptop",
        fiyati: "30000",
        adet: 100,
        renkler: {
            koyu: 50,
            acik: 30
        }
    },
    {
        urunAdi: "tablet",
        fiyati: "20000",
        adet: 200,
        renkler: {
            koyu: 150,
            acik: 130
        }
    }
]

for (const product of magaza) {
    const {
        urunAdi,
        fiyati,
        adet,
        renkler: { koyu, acik }
    } = product

    console.log(urunAdi); //tablet, laptop
    console.log(koyu);
    console.log(acik);
}

//Array 

const rgb = [200, 100, 255];

const [blue] = rgb;

console.log(`Blue: ${blue}`); // "Blue: 255"



function printFruits(fruits) {
    console.log("fruits[0]", fruits[0], "fruits[1]", fruits[1], "fruits[2]", fruits[2]);
}

printFruits(["apple", "banana"]); // "apple banana undefined"

//array örnekleri



const renkler =["kırmızı","siyah","turuncu"]

const [birinci,ikinci,ucuncu] = renkler

console.log(birinci);

const sayilar = [1,2,3,4,5]

const [bir,,uc,,bes,alti = 6] =sayilar

console.log(bir,uc,bes,alti);

























































































