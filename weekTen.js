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



function promiseControl() {

    console.log("1-promise oluşturuluyor..");
    const mypromise = new Promise((resolve,reject) => {
        console.log("2- Promise şu an pending durumunda ");

        setTimeout(() => {
            const isSuccess = false
            if(isSuccess){
                console.log("3a-Sonuç başarılı Fullfilled");
                resolve("işlem başarılı oldu")
            }else{
                console.log("3b- Sonuç rejected oldu");
                reject("Bir hata oluştu")
            }
        },2000)
    })
    console.log("Promise'in durumu:", mypromise);

    mypromise
    .then( result => {
        console.log("4- fullfilled:", result);
    })
    .then(nextResult => {
        console.log("5 numara");
    })
    .catch(error=> {
        console.log("6 numara error:", error);
    })
    .finally(()=> {
        console.log("7 numara finally");
    })
    
    return mypromise

}

promiseControl()





