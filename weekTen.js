// console.log("First log");

// setInterval(() => {
//     console.log("Second log");
// }, 2000);


// setTimeout(() => {
//     console.log("Merhaba Dünya!");
// }, 5000)

// console.log("Third log");


// const greet = () => {
//     console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// const greet = () => {
//     console.log("Hello!");
// };

// const intervalId = setInterval(greet, 2000);

// clearInterval(intervalId);


// const date = new Date();
// // const date = new Date();
// console.log(date);

// const isSuccess = false;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function"); //value
//         } else {
//             reject("Error! Error passed to reject function"); //error
//         }
//     }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//     value => {
//         console.log(value); // "Success! Value passed to resolve function"
//     },
//     error => {
//         console.log(error); // "Error! Error passed to reject function"
//     }
// );


// promise
//   .then((value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch((error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   });



// function promiseControl() {

//     console.log("1-promise oluşturuluyor..");
//     const mypromise = new Promise((resolve,reject) => {
//         console.log("2- Promise şu an pending durumunda ");

//         setTimeout(() => {
//             const isSuccess = false
//             if(isSuccess){
//                 console.log("3a-Sonuç başarılı Fullfilled");
//                 resolve("işlem başarılı oldu")
//             }else{
//                 console.log("3b- Sonuç rejected oldu");
//                 reject("Bir hata oluştu")
//             }
//         },2000)
//     })
//     console.log("Promise'in durumu:", mypromise);

//     mypromise
//     .then( result => {
//         console.log("4- fullfilled:", result);
//     })
//     .then(nextResult => {
//         console.log("5 numara");
//     })
//     .catch(error=> {
//         console.log("6 numara error:", error);
//     })
//     .finally(()=> {
//         console.log("7 numara finally");
//     })

//     return mypromise

// }

// promiseControl()



// CALLBACK

// function alarmFunction(callback){
//     const now = new Date()
//     const targetTime = new Date()

//     targetTime.setHours(20,36,45,0)
//     const delay = targetTime - now
//     console.log(delay);

//     setTimeout(()=> {
//         callback("Alarm çalıyor")
//     },delay)
// }

// alarmFunction((message) => {
//     console.log(message)
//     alert(message)
// })

//Promise


// function alarmFunction() {
//     const now = new Date()
//     const targetTime = new Date()

//     targetTime.setHours(21, 1, 40, 0)
//     const delay = targetTime - now

//     if (delay <= 0) {
//         return Promise.reject("Belirlediğin alarm saati geçti")
//     }

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Alarm çalıyor")
//         }, delay)
//     })

// }

// alarmFunction()
//     .then((message) => {
//         console.log(message)
//         alert(message)
//     })
//     .catch(error => {
//         console.log(error)
//         alert(error)
//     })



//new Promise

// function alarmFunction() {
//     return new Promise((resolve, reject) => {
//         const now = new Date()
//         const targetTime = new Date()

//         targetTime.setHours(20, 49, 0, 0)
//         const delay = targetTime - now

//         if (delay <= 0) {
//             reject("Belirlediğin alarm saati geçti")
//         } else {
//             setTimeout(() => {
//                 resolve("Alarm çalıyor")
//             }, delay)
//         }
//     })

// }

// alarmFunction()
//     .then((message) => {
//         console.log(message)
//         alert(message)
//     })
//     .catch(error => {
//         console.log(error)
//         alert(error)
//     })




// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values))
// 	.catch(error => console.log(error));


// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3])
// 	.then(values => console.log(values));


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 2000);
});

Promise.race([p1, p2])
    .then(value => console.log(value))
    .catch(error => console.log(error));
