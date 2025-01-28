const oyun = {
    secenekler: ["taş", "kagit", "makas"],

    // bilgisayara seçtirme fonksiyonu
    bilgisayarSecim: function () {
        const rastgele = Math.floor(Math.random() * 3) //0 1 2
        return this.secenekler[rastgele]
    },

    //kazananı bulan fonksiyon

    kazananiBul: function (oyuncuSecimi, bilgisayarSecimi) {
        if (oyuncuSecimi === bilgisayarSecimi) {
            return "Berabere"
        }
        if (
            (oyuncuSecimi === "taş" && bilgisayarSecimi === "makas") ||
            (oyuncuSecimi === "kagit" && bilgisayarSecimi === "taş") ||
            (oyuncuSecimi === "makas" && bilgisayarSecimi === "kagit")
        ) {
            return "Kazandınız. Tebrikler"
        }

        return "Kaybettiniz. Bilgisayar Kazandı"
    }
}

function oyna() {
    // oyuncudan input al
    let oyuncuSecimi = prompt("Taş, Kağıt,makas \nBunlardan birini seçiniz").toLowerCase()

    //Geçerlilik kontrolü
    if (!oyun.secenekler.includes(oyuncuSecimi)) {
        alert("Geçersiz seçim yaptınız")
        return
    }

    //Bilgisayarın seçimi
    const bilgisayarSecimi = oyun.bilgisayarSecim()

    // Sonuçları göster
    alert(
        `
        Sizin seçiminiz: ${oyuncuSecimi}\n
        Bilgisayarın Seçimi : ${bilgisayarSecimi}\n` +
        oyun.kazananiBul(oyuncuSecimi, bilgisayarSecimi)
    )

    //yeni oyun talebi 
    if(confirm("Tekrar oynamak ister misiniz")){
        oyna()
    }
}

//oyunu başlat

alert("Taş kağıt makas oyununa hoşgeldiniz")
oyna()












