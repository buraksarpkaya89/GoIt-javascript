// 1 ile 100 arasında sayı oluşturma
let hedefSayi = Math.floor(Math.random() * 100) + 1

// oyun değişkenleri

let tahminSayisi = 0;
let maksimumTahmin = 10;
let oyunDevam = true;

// oyun fonksiyonu

function sayiTahminOyunu() {
    while (oyunDevam) {
        // kalan hakkını göster
        let kalanTahmin = maksimumTahmin - tahminSayisi;

        // kullanıcıdan tahmin al
        let tahmin = prompt(`1 ile 100 arasında bir sayı tahmin edin. \nKalan tahmin hakkınız : ${kalanTahmin}`)

        // kullanıcının iptal etme durumu

        if (tahmin === null) {
            alert("oyundan çıkıldı")
            return;
        }

        tahmin = Number(tahmin)

        if (isNaN(tahmin) || tahmin < 1 || tahmin > 100) {
            alert("Geçerli bir sayı giriniz")
            continue;
        }

        tahminSayisi++

        //tahmin kontrolü
        if (tahmin === hedefSayi) {
            alert(`Harikasın.${tahminSayisi} kerede sayıyı buldun.`)

            //yeni oyun sormaca
            let yeniOyun = confirm("Yeni oyun oynamak ister misin?")
            if (yeniOyun) {
                hedefSayi = Math.floor(Math.random() * 100) + 1
                tahminSayisi = 0
            } else {
                oyunDevam = false
                alert("Görüşürüz")
            }
        } else {
            if (tahminSayisi >= maksimumTahmin) {
                alert(`Tahmin hakkınız bitmiştir. Cevap: ${hedefSayi}`)
                let yeniOyun = confirm("Yeni oyun oynamak ister misin?")
                if (yeniOyun) {
                    hedefSayi = Math.floor(Math.random() * 100) + 1
                    tahminSayisi = 0
                } else {
                    oyunDevam = false
                    alert("Görüşürüz")
                }
            }else if(tahmin < hedefSayi){
                alert(`Daha yüksek değer giriniz\n Kalan tahmin hakkınız ${kalanTahmin - 1}`)
            }else{
                alert(`Daha düşük değer giriniz\n Kalan tahmin hakkınız ${kalanTahmin - 1}`)
            }

        }
    }
}

alert("Sayı tahmin oyununa hoşgeldiniz. input alanına girişi yapın. Toplam 10 hakkınız var")
sayiTahminOyunu()