//KELİME BULMA OYUNU

//KURGU

// KULLANICI OYUNA BAŞLADI MI?
// KULLANICI OYUNA DEVAM ETMEK İSTİYOR MU?
// KULLANICININ HARF TAHMİNİ DOĞRU MU?
// KULLANICI TÜM HARFLERİ DOĞRU BULDU MU ?
// KAZANDI MI?
// KULLANICININ YENİ OYUN TALEBİ VAR MI?


// OYUNDA KULLANILACAK KELİMELER
const kelimeler = ["matematik", "çikolata", "bilgisayar", "telefon", "kalem"]

// OYUN DEĞİŞKENLERİ

let secilenKelime = "";
let tahminEdilenHarfler = [];
let kalanHak = 10;
let kullanilanHarfler = [];
let oyunaDevam = true;

//OYUNUN FONKSİYONU

function startGame() {
    kalanHak= 10
    kullanilanHarfler =[]
    oyunaDevam = true

    // OYUN BAŞLANGIÇ MESAJI
    alert("KELİME BULMA OYUNUNA HOŞGELDİNİZ! \n Oyunun Kuralları: \n Rastgele bir kelime seçilecektir \n 10 hakkınız var")

    //OYUNA GİRMEK İSTEYİP İSTEMEDİĞİNİ KULLANICIYA SOR
    if(!confirm("Oyuna başlamak ister misin?")){
        alert("Oyundan çıkılıyor. Hoşçakalın..")
        return;
    }

    // KELİMELERİ SEÇ
    const randomIndex = Math.floor(Math.random() * kelimeler.length)
    secilenKelime = kelimeler[randomIndex]

    tahminEdilenHarfler =[];
    for(let i = 0; i< secilenKelime.length; i++){
        tahminEdilenHarfler[i] = "_"
    }

    while(oyunaDevam && kalanHak > 0){
        //mevcut oyun durumunu gösteren bilgi bölümü

        const oyunDurumu = `
            Kelime: ${tahminEdilenHarfler.join(" ")}
            Kalan Hak: ${kalanHak}
            Kullanılan Harfler :"${kullanilanHarfler.join(",")}
        `

        //KULLANICININ TAHMİNİNİ AL
        const tahmin = prompt(`${oyunDurumu} \nBir harf tahmin edin:`)

        // Kullanıcı iptale basarsa
        if(tahmin === null){
            alert("Oyundan çıkılıyor. Hoşçakalın")
            oyunaDevam = false
            return;
        }
        // kullanıcının 1 harf girmesini sağla
        if(tahmin.length !== 1){
            alert("Lütfen sadece 1 harf girin")
            continue;
        }
        // kullanıcının tahminini küçük harfe çevir
        const harf = tahmin.toLowerCase();

        //aynı harfi girmesini engelle
        if(kullanilanHarfler.includes(harf)){
            alert("Bu harf daha önce kullanıldı")
            continue;
        }

        kullanilanHarfler.push(harf)

        //Kullanıcını girdiği doğru harfi kontrol et
        let harfBulundu = false

        for(let i = 0; i < secilenKelime.length; i++){
            if(secilenKelime[i] === harf){
                tahminEdilenHarfler[i] = harf;
                harfBulundu = true
            }
        }

        //KULLANICININ TAHMİN SONUÇLARI

        if(harfBulundu){
            alert(`Doğru Tahmin ettiniz.${kalanHak} hakkınız kaldı`)
        }else{
            kalanHak--;
            alert(`Yanlış tahmin ettiniz. ${kalanHak} hakkınız kaldı`)
        }
        // Kullanıcı Oyunu kazandı mı?
        let kazandı =  true;

        for(let i = 0; i<tahminEdilenHarfler.length; i++){
            if(tahminEdilenHarfler[i] === "_"){
                kazandı = false;
                break;
            }
        }

        //Kullanıcı oyunu kazandıysa
        if(kazandı){
            alert(`Tebirkler oyunu kazandınız: Seçilen Kelime : ${secilenKelime}` )
            if(confirm("Yeni oyuna başlamak ister misiniz?")){
                startGame()
            }
            return;
        }

    }
    alert("Oyunu kaybettiniz!")
    if(confirm("Yeni oyuna başlamak ister misiniz?")){
        startGame()
    }

}

startGame()
















