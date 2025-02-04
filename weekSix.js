function foo() {
    console.log(this);
}

foo();



// "use strict";

function showThis() {
    console.log(this);
}

const user = {
    username: "Poly",
};
user.isim = ["Burak"]
user.elma = showThis;
// Nesne bağlamında çağırıyoruz
user.elma(); // this in showThis: {username: "Poly", showContext: ƒ}

// Global bağlamda çağırıyoruz
showThis(); // "this in showThis: undefined"




function greet(test) {
    console.log(`${test}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
    username: "Mango",
    room: 27
};

const poly = {
    username: "Poly",
    room: 191
};

greet.call(mango, "Burak")


function greet(str, str1) {
    console.log(`${str},${str1}, ${this.username}, your room is ${this.room}!`);
}

const mango1 = {
    username: "Mango",
    room: 27
};

const poly1 = {
    username: "Poly",
    room: 191
};
const array = ["Welcome", "Burak"]
greet.apply(mango1, array);




const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

function makeMessage(callback) {
    const username = callback();
    console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName.bind(customer));






const library = {
    books: 1923,
    logBookCount() {
        console.log(this.books);
    }
};

console.log(library.logBookCount);

const showBooks = library.logBookCount.bind({ books: 1923 });
showBooks();




const hotel = {
    username: "Resort hotel",
    showThis() {
        const foo = () => {
            console.log("this in foo: ", this);
        };

        foo();
        console.log("this in showThis: ", this);
    },
};

hotel.showThis();




//NORMAL FUNCTION

function normalFunc() {
    console.log(this);
}
const arabalar = {
    arabaAdi: "Toyota",
    rengi: "siyah",
    modeli: normalFunc
}
arabalar.modeli()

// ARROW FUNCTION
const arrowFunc = () => {
    console.log(this); //window
}
const kiyafetler = {
    tipi: "elbise",
    rengi: "kırmızı",
    modeli: arrowFunc
}

kiyafetler.modeli()







const animal = {
    legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";
console.log(dog);
console.log(dog.legs);



for (const key in dog) {
    console.log(key); // "name" "legs"
}


for (const key in dog) {
    if (dog.hasOwnProperty(key)) {
        console.log(key); // "name"
    }
}



const objC = { c: "C prop" };

const objB = Object.create(objC); // C
objB.b = "B prop"; // C , B 

const objA = Object.create(objB); // C,B
objA.a = "A prop"; //C,B,A


// console.log(objC);

// console.log(objB);

// console.log(objA);


//LESSON TWO

class User {
    constructor(params) {
        this.name = params.name;
        this.email = params.email;
        this.surname = params.surname || "sarpkaya"
    }
    test() {

    }
}

const apple = new User({
    name: "Mango",
    email: "mango@mail.com",
    surname: "sarpkaya1"
});
console.log(apple);



class User1 {
    constructor({ elma, email }) {
        this.name = elma || "";
        this.email = email || "";
    }

    getEmail() {
        return `Elma: ${this.email}`;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

const mango3 = new User1({
    elma: "Mango",
    email: "mango@mail.com"
});

console.log(mango3.getEmail());

mango3.changeEmail("new@mail.com");

console.log(mango3.getEmail());




class User2 {
    name;
    #email;

    constructor({ name, email }) {
        this.name = name;
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }

    changeEmail(newEmail) {
        this.#email = newEmail;
    }
}

const mango4 = new User2({
    name: "Mango",
    email: "mango@mail.com",
});

console.log(mango4.getEmail());
mango4.changeEmail("mango@supermail.com");
console.log(mango4.getEmail());

console.log(mango4.name);





class User5 {
    name;
    #email;

    constructor({ name, email }) {
        this.name = name;
        this.#email = email;
    }

    getEmail() {
        return this.#email;
    }
    #validateEmail(email) {
        return email.includes('@'); //true
    }
    changeEmail(newEmail) {
        if (this.#validateEmail(newEmail)) {
            this.#email = newEmail;
        } else {
            console.log('Invalid email format');
        }
    }


}

const mango5 = new User5({
    name: 'Mango',
    email: 'mango@mail.com',
});

mango5.changeEmail('newmail.com');
mango5.changeEmail('new@mail.com');
console.log(mango5.getEmail());

//   mango5.#validateEmail('test'); //HATA


class MyClass {
    b = 5;

    constructor(value) {
        this.a = value;
    }
}

const instance = new MyClass(10);
console.log(instance);


class Maths1 {
    static pi = 3.14

    constructor(deger) {
        this.carpim = deger * Maths1.pi
    }
}

const sonuc = new Maths1(10)
console.log(sonuc);
console.log(Maths1.pi);



class Animal {
    #name
    #tail
    constructor(name,tail) {
        this.#name = name
        this.#tail = tail || false
    }
    get name(){
        return this.#name
    }
    get tail(){
        return this.#tail
    }
    sesCıkar(){
        return `${this.#name} ses çıkarıyor`
    }
    
}

class Kopek extends Animal {
    #tur

    constructor(name , tur,tail){
        super(name,tail)
        this.#tur = tur
        
    }

    get tur(){
        return this.#tur
    }
    havla(){
        return `${this.name} köpeğim havladı. Kuyruğu ${this.tail ? "var" : "yok"}`
    }
}
const kopegim = new Kopek("karabaş", "golden",true)
console.log(kopegim);

console.log(kopegim.havla());
console.log(kopegim.tur);
console.log(kopegim.sesCıkar());





