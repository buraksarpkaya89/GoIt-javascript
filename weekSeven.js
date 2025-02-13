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


// const button = document.querySelector(".my-button");

// button.addEventListener("keydown", (elma) => {
//     console.log(elma);
//     // event.currentTarget.style.backgroundColor = "red"
// //   alert("Butona tıklandı")
// });


const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements.login.value);
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
}


document.getElementById("country").addEventListener("change", function(event) {
    console.log(event);
    console.log("seçilen ülke :" , event.target.value);
})


document.querySelector(".username").addEventListener("input",(event)=> {
    console.log(event.target.value);
})

// document.querySelector(".username").addEventListener("focus",(event)=> {
//     event.target.style.backgroundColor = "red"
// })
// document.querySelector(".username").addEventListener("blur",(event)=> {
//     event.target.style.backgroundColor = ""
// })
















