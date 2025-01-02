// Conditions

// if condition
// bir veya birden fazla değişkeni bir veya birden fazla değer ile kontrol etme

let numara = 50
let numara1= 44

if (numara < 50) {
    console.log("Numara 50 den küçük");
} else if (numara1 > 90) {
    console.log("Numara 90 dan büyük");
}
else {
    console.log("Hiçbir duruma uymuyor");
}

let car = "Mercedess"

function Araba() {

    if (car === "Mercedes") {
        return `Bu aracın markası ${car} değeridir`
    }
    return "test"
}

// console.log(Araba());

// Ternary operatörü ( ? --True, : -- False)

let color = "Reds"
let color1 = "blues"

color1 === "blues"
    ?
    color === "Reds"
        ?
        console.log("red")
        : console.log("red değil")
    : console.log("sonuç değeri");



// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// const type = 'adult'
// console.log(type);

// Switch Operatörü
// bir değişkeni birden çok değer ile kontrol ediyoruz

switch (numara) {
    case 30:
        console.log("30");
        break;
    case 50:
        console.log("50");
        break;
    // ...
    default:
        console.log("100");
}


// if Örneği

function IndirimFiyatHesapla(urunAdedi, urunFiyatı){
    
    if(urunAdedi <= 0){
        return "Bir ürün almadınız"
    }else if(urunAdedi < 5){
        let indirimliFiyat = urunFiyatı * 0.9
        return indirimliFiyat * urunAdedi
    }else if(urunAdedi <= 10){
        let indirimliFiyat = urunFiyatı * 0.8
        return indirimliFiyat * urunAdedi
    }else if(urunAdedi >= 50){
        let indirimliFiyat = urunFiyatı * 0.5
        return indirimliFiyat * urunAdedi
    }else{
        let indirimliFiyat = urunFiyatı * 0.7
        return indirimliFiyat * urunAdedi
    }

}

// else bloğuna girdi , 100 * 0.7 = 70 , 70*40 = 2800 tl 

let urunFiyatı = 100
let urunAdedi = 8
let toplamFiyat = IndirimFiyatHesapla(urunAdedi, urunFiyatı)
console.log(`Aldığınız ürün kampanya kapsamında ${toplamFiyat} ile satışa hazırdır`);

// Mantıksal "VE” - Logical AND (&&),  VEYA OPERATORU||


let valuee = "istanbul"
 

if(valuee === "istanbul" && valuee.length === 8 ){
    console.log("ve dogru");
}else if(valuee === "istanbul" || urunAdedi === 9 )
    console.log("veya doğrusu");
else{
    console.log("yanlış");
}

// Mantıksal “DEĞIL” - Logical NOT (!)

const bloklu = false;
const chatYapabilirmi = !bloklu; // !false -> true

if(chatYapabilirmi) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}



// switch örneği

function harfNotuAlma(not){
    switch(true){
        case (not >= 90 && not <= 100) :
            console.log("Harf Notu A");
            break;
        case (not >=80 && not < 90):
            console.log("Harf notu B");
            break;
        case ( 70 <= not < 80) :
            console.log("Harf notu C");
            console.log(`Ortalama notunuz ${totalPoint}`);
            break;
        case (not>= 60 && not <70):
            console.log("Harf notu D");
            break;
        
        default :
            console.log("Sınıfta kaldınız");
        
    }
}
let arasinav = 30
let notDeğeri = 75

let totalPoint = (arasinav + notDeğeri) / 2
harfNotuAlma(notDeğeri)



