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

for (const genres of genresAll) {
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



//Lesson 2

const bookShelf = {
    books: [
        { title: "The Last Kingdom", rating: 8 },
        { title: "The Mist", rating: 6 }
    ],
    getBooks() {
        return this.books;
    },
    addBook(...newBook) {
        this.books.push(newBook);
    }
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 }, { title: "Dream Guardian1", rating: 91 });

console.log(bookShelf.getBooks());

let depo = []

for (const book of bookShelf.books) {
    // console.log(book.rating);
    depo.push(book.rating)
}

console.log(depo);



const bookShelf1 = {
    books: [
        { title: "The Last Kingdom", rating: 8 },
        { title: "The Mist", rating: 6 },
    ],


    getAvarageRating() {
        let totalRating = 0; //14

        for (const book of this.books) {
            totalRating = totalRating + book.rating;
            // 0        =  0 + 8 =8
            // 8        =  8 + 6 = 14
        }

        return totalRating / this.books.length;
        //        14  / 2 = 7
    },
};

bookShelf1.getAvarageRating();




const bookShelf2 = {
    books: [
        { title: "The Last Kingdom", rating: 8 },
        { title: "The Mist", rating: 6 },
    ],
    changeRating(bookName, newRating) {
        for (const book of this.books) {
            if (book.title === bookName) {
                book.rating = newRating;
            }
        }
    }
};

// changeRating("The Mist", 9); // { title: "The Mist", rating: 9 }
// changeRating("The Last Kingdom", 4); // { title: "The Last Kingdom", rating: 4 }


function multiply1(...args) {
    console.log(args); //dizi 
}

multiply1(1, 2, 3, 4);  // 1 , [2,3,4]



const temps = [14, -4, 25, 8, 11];

console.log(...temps); // 14, -4, 25, 8, 11


const first = {
    propA: 5,
    propB: 10
};
const second = {
    propC: 15
};
const third = { propA: 5,
    propB: 10, propC: 15 };
console.log(third);



const first1 = { propA: 5, propB: 10, propC: 50 };
const second2 = { propC: 15 };

const third3 = { propB: 20, ...first1, ...second2 };

console.log(third3); 
// propB:10 ,propA:5,propC:15

const fourth = { ...first1, ...second2, propB: 20 };
console.log(fourth)
// propA: 5, propB: 20, propC: 15

const fifth = { ...first, propB: 20, ...second };
console.log(fifth);
// propA: 5, propB: 20, propC: 15