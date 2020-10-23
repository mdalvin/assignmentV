// Assignment No. 1

// const getFirstName = () => {
//     const promise = new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             return (true) ?
//                 resolve ("Binar") : reject (Error("Gagal"))
//         }, 2000)
//     });
//     return promise;
// };

// const getLastName = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             return (true) ?
//                 resolve("Academy") : reject (Error("Gagal"))
//         }, 2000)
//     })
// }

// const OnClick = () => {
//     console.log("Clicked...")
//     Promise.all([
//         getFirstName(),
//         getLastName()
//     ])
//         .then((response) => {
//             const fullname = `${response[0]} ${response[1]}`
//             document.querySelector("#hasil").innerText = fullname
//         })
//         .catch (err => {
//             console.log(err.message)
//         })
    
// }

// Assignment No. 2

const userInfo = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (!id) {
                return reject(Error("Invalid ID"))
            }
    
            let response;
            if (id < 10) {
                response = {
                    success: true,
                    id: id,
                    message: "User Found"
                }
            } else {
                response = {
                    success: false,
                    id: id,
                    message: "User Not Found"
                }
                return resolve (response)
                }
        }, 2000)
     })
}

// Promise chaining

const OnClick = () => {
    console.log("Clicked...");
    userInfo(11)
    .then(result => {
        console.log(result);
    document.querySelector("#hasil").innerText = result.message
    })
    .catch(err => {
        console.log(err.message)
    })
}

// Promise chaining - end

// Promise.all

// const OnClick = () => {
//     console.log("Clicked...");
//     Promise.all([userInfo(11)])
//         .then((response) => {
//             const result = response[0];
//             console.log(result);
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
// };

// Promise.all - end

// Async-Await

// const OnClick = async () => {
//     console.log("Clicked...");

//     try {
//       const result = await userInfo(12);
//       console.log(result);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

// Async-Await - end