const btn = document.getElementById("themebtn")


const theme1 = localStorage.getItem("theme") || "light"
setTheme(theme1)

function setTheme(theme1) {
    const isDark = theme1 === "dark"

    document.body.style.backgroundColor = isDark ? "black" : "white"
    document.body.style.color = isDark ? "white" : "black"
    btn.style.backgroundColor = isDark ? "white" : "red"
    btn.style.color = isDark ? "black" : "white"

    btn.textContent = isDark ? "Light Mode" : "Dark Mode"
}



btn.addEventListener("click", () => {
    // Mevcut değeri localStorage'dan al (yoksa 0 olarak başlat)
    let count = parseInt(localStorage.getItem("counter")) || 0;
    
    // For döngüsü ile değeri artır
    for (let i = 0; i < 1; i++) {
        count++;
    }
    
    // Yeni değeri localStorage'a kaydet
    localStorage.setItem("counter", count);
    
    console.log("Sayaç şimdi:", count);
});