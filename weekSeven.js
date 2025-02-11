// let value = document.querySelector(".h1etiketi1");

// value.style.backgroundColor = "red"
// value.style.color = "white"
// value.style.padding = "10px 20px 100px 200px "
// console.log(value);

// const link = document.querySelector(".link");
// console.log(link.href);

// link.href = "https://www.google.com/"
// console.log(link.href);

// document.querySelector(".link").href = "test"
// console.log(link.href);


// const link1 = document.querySelector(".link1");
// link1.classList.add("test");
// console.log(link1.classList);

// link1.classList.remove("link1")
// console.log(link1.classList);

// link1.classList.toggle("test")
// console.log(link1.classList);

// const image = document.querySelector(".image");
// console.log(image.getAttribute("width"));

// image.setAttribute("width", "500")

// image.removeAttribute("width")

// console.log(image.getAttribute("width"));

// let removeEl = document.querySelector(".h1etiketi")
// removeEl.remove()



// SIFIRDAN ELEMENT OLUŞTURMA

//CONTAINER OLUŞTUR
const formContainer = document.createElement("div")
formContainer.style.width = "400px"
formContainer.style.padding ="15px"
formContainer.style.backgroundColor ="yellow"
formContainer.style.height = "100px"
formContainer.style.display ="flex"
formContainer.style.flexDirection ="column"

//Label oluştur

const label = document.createElement('label')
label.textContent = "Adınızı Giriniz"
label.style.display ="flex"
label.style.fontSize = "13px"

// input oluştur

const inputElement = document.createElement("input")
inputElement.type = "text"
inputElement.width = "90%"
inputElement.style.border ="1px solid black"

//buton oluştur

const button = document.createElement("button")
button.textContent ="Gönder"
button.style.backgroundColor = "blue"
button.style.borderRadius ="10px"
button.style.cursor ="pointer"
button.style.color ="white"



formContainer.appendChild(label)
formContainer.appendChild(inputElement)
formContainer.appendChild(button)
document.body.appendChild(formContainer)













