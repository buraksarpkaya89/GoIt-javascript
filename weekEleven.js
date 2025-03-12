// fetch("https://jsonplaceholder.typicode.com/users", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(elma => {
//     // Data handling
// 		console.log(elma);
//   })
//   .catch(error => {
//     // Error handling
// 		console.log(error);
//   });


// console.log("object");
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log("object1");
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((veri) => {
//       const markup = veri.map((user) => {
// 				return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
//               <p><b>Username</b>: ${user.username}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	        </li>`;
//         })
//         .join("");

// 			userList.insertAdjacentHTML("beforeend", markup);
//     })
//     .catch((error) => console.log(error));
// });
// console.log("object2");


//GET METHODU

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("data:",data);
    })
    .catch(error => {
        console.log("Hata oluştu",error);
    })

//POST METHODU

const yeniGonderi = {
    title :"merhaba GoIT",
    body:"yeni veri yolladım",
    userId:"1"
}


fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(yeniGonderi)
})
.then(response => response.json())
.then(data => {
    console.log("yeni veri oluştu",data);
})
.catch(error=> {
    console.log(error);
})

//PUT METHODU

const guncelGonderi = {
    id: 1,
    title:"güncel başlık",
    body:"bu içerik güncellendi",
    userId:"2"
}

fetch(`https://jsonplaceholder.typicode.com/posts/${guncelGonderi.id}`,{
    method:"PUT",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(guncelGonderi)

})
.then(response => response.json())
.then(data => {
    console.log("güncel veri oluştu",data);
})
.catch(error=> {
    console.log(error);
})

//DELETE METHODU

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"DELETE",
    headers:{
        "Content-Type": "application/json"
    },
})
