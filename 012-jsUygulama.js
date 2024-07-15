const jsonURL = "https://jsonplaceholder.typicode.com/posts";

// get request addEventListener

// const getRequest = (url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//       } else {
//         console.log(`${xhr.status} - Couldn't fetch the data`);
//       }
//     }
//   });
//   xhr.send();
// };

// getRequest(jsonURL);


// get request onreadystatechange

const getReq = (url) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const response = JSON.parse(xhr.responseText);
              console.log(response);
            } else {
              console.log(`${xhr.status} - Couldn't fetch the data`);
            }
          }
    }
    xhr.send()
}

getReq(jsonURL)

// GET - POST - PUT - PATCH - DELETE

//POST

const postReq = (url, gonder) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                const gelenCevap = JSON.parse(xhr.responseText);
                console.log(gelenCevap);
            } else {
                console.log(`${xhr.status} - Couldn't post the data`);
            }
        }
    };
    xhr.send(JSON.stringify(gonder));
};

const ornek1 = { title: 'ornekTitle', body: 'ornekBody', userId: 1 }; //id=??

postReq(jsonURL, ornek1);


//PUT

const putReq = (url, gonder) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            } else {
                console.log(`${xhr.status} - Couldn't update the data`);
            }
        }
    };
    xhr.send(JSON.stringify(gonder));
};

const guncelle1 = { id: 1, title: 'guncellenmisTitle', body: 'guncellenmisBody', userId: 1 };
putReq(`${jsonURL}/1`, guncelle1);


// //PATCH

// const patchReq = (url, gonder) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("PATCH", url);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 const response = JSON.parse(xhr.responseText);
//                 console.log(response);
//             } else {
//                 console.log(`${xhr.status} - Couldn't patch the data`);
//             }
//         }
//     };
//     xhr.send(JSON.stringify(gonder));
// };


// const yama1 = { title: 'yamalanmisTitle' };
// patchReq(`${jsonURL}/1`, yama1);


// DELETE

const deleteReq = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Silndi.");
            } else {
                console.log(`${xhr.status} - Silme başarısız.`);
            }
        }
    };
    xhr.send();
};

deleteReq(`${jsonURL}/1`);






