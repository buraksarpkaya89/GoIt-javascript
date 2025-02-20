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
console.log(_.uniq([1,2,2,3,4,4,5]));
console.log(_.merge({username: "Burak"},{surname :"Sarpkaya"}))