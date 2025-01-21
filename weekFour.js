// NESNELER

const meyveler = {
    yesilMeyve: "elma",
    kirmiziMeyve: "kiraz"
}

console.log(meyveler.key);

const user = {
    adi: "Ali",
    soyadi: "yılmaz",
    email: "aliyilmaz@gmail.com",
    yas: 30,
    isActive: true,
    meslekBilgiler: {
        meslek: "doktor",
        maas: "100000",
        paraBirimi: "tl",
        isRemote: false,
    },
    hobileri: ["tenis", "yüzme", "kayak"],
    profileImg: "https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png",

    adSoyad: function () {
        return `${this.adi} ${this.soyadi}`
    }
}
console.log(user.adSoyad());


// Ali Yılmaz'ın mesleği Doktor'dur. Maaşı 100000 TL'dir. En sevdiği hobisi Yüzmedir.
console.log(`${user.adi} ${user.soyadi}'ın mesleği ${user.meslekBilgiler.meslek}'dur. Maaşı ${user.meslekBilgiler.maas} ${user.meslekBilgiler.paraBirimi.toUpperCase()}'dir. En sevdiği hobisi ${user.hobileri[1]}dir`);

console.log(!user.meslekBilgiler.isRemote);

user.adres = "istanbul"
user.sevdigiMeyveler = ["elma", "armut"]

console.log(user);

if (!user.isActive) {
    console.log("kullanıcı online");
} else {
    if (user.meslekBilgiler.isRemote === false) {
        console.log("Ofisten çalışıyor");
    } else {
        console.log("uzaktan çalışıyor");
    }
}


if (true) {
    console.log("true")
}
if (false) {
    console.log("false");
}



const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};

console.log(book["title"]);

let arrayTest = []

let genresAll = Object.values(book)[2];

for(const genres of genresAll){
    arrayTest.push(genres)
    arrayTest.push(book.rating)
}

console.log(arrayTest);



for (const key in book) {
    console.log(key);
}


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
// const keys = [];
// const values = [];


const keys = Object.keys(apartment);

const values = Object.values(apartment);

console.log(keys);
console.log(values);

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }


const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    }
];

console.log(books[1].author);

console.log(books[1]);

let authors = []

for (const kitap of books) {
    authors.push(kitap.author);
}
console.log(authors.join(" ")); //true

if (authors.join(" ").includes("Fyodor")) {
    console.log("Bu yazar mevcut");
}






const colors = [
    { hex: "#f44336", rgb: "244,67,54" }, //color
    { hex: "#2196f3", rgb: "33,150,243" },//color
    { hex: "#4caf50", rgb: "76,175,80" },//color
    { hex: "#ffeb3b", rgb: "255,235,59" },//color
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {

    console.log(color);
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);