const dog = {
    name: "Mango",
    age: 3,
    isGoodBoy: true,
};

console.log("dog", dog);
const json = JSON.stringify(dog);
console.log(json);
console.log(json[3]);

console.log(JSON.parse(json));


console.log("5")

console.log(JSON.parse("5"))

console.log("false");

console.log(JSON.parse("false"))

// const data = JSON.parse("Well, this is awkward");
//     console.log(data);

try {
    const data = JSON.parse("Well, this is awkward");
    console.log(data);
} catch (error) {
    console.log(error);
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parsing error in try...catch");

// let veriler = []

// fetch('data.json')
// // .then(response => console.log(response))
// .then(response => response.json())
// .then(data => veriler.push(data))
// .catch(error => console.log(error))


// console.log(veriler);
window.navigator.geolocation.getCurrentPosition(position =>console.log(position))

function saveLocation() {
    window.navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const long = position.coords.longitude
        document.cookie = `location=${lat},${long}; path=/`
    })

}

saveLocation()

console.log(localStorage);


const settings = {
    theme: "dark",
    isAuthenticated: true,
    options: [1, 2, 3],
  };
  
  localStorage.setItem("settings", JSON.stringify(settings));

console.log(JSON.parse(localStorage.getItem("settings")));

localStorage.removeItem("settings");



localStorage.setItem("ui-theme", "light");

// sessionStorage.setItem("user-id", "123");


const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const localStorageKey = "goit-example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});