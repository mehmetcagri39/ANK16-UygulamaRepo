// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. isteklerinizi fonksiyon içerisinde tanımlayın.
//getCommentById, getAllComments, postComment, deleteComment, updateCommentPatch, updateCommentPut



// //1- getCommentById

// console.log(getCommentByIdThen(5));
// console.log(getCommentByIdAsync(5));

// // then
// function getCommentByIdThen(id) {

//     fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)

//         .then(gelenCevap => gelenCevap.json())
//         .then(data => console.log(data))
//         .catch(hata => console.error('hata:', hata));
// }

// // async
// async function getCommentByIdAsync(id) {
//     try {

//         const gelenCevap = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
//         const data = await gelenCevap.json();
//         console.log(data);

//     } 
    
//     catch (hata) {

//         console.error('Hata:', hata);

//     }
// }


// //2- getAllComments

// console.log(getAllCommentsThen(5));
// console.log(getAllCommentsAsync(5));

// // then yöntemi ile
// function getAllCommentsThen() {
    
//     fetch('https://jsonplaceholder.typicode.com/comments')

//         .then(gelenCevap => gelenCevap.json())
//         .then(data => console.log(data))
//         .catch(hata => console.error('hata:', hata));

// }

// // async
// async function getAllCommentsAsync() {    
//     try {

//         const gelenCevap = await fetch('https://jsonplaceholder.typicode.com/comments');
//         const data = await gelenCevap.json();
//         console.log(data);

//     } 
    
//     catch (hata) {

//         console.error('hata:', hata);

//     }
// }



//3- postComment

// const yorum = {
    
//     postId: 1,
//     name: 'Yeni',
//     email: 'cagri@bilgeAdam.com',
//     body: 'Yeni bir yorum.'

// };


// // then yöntemi ile
// function postCommentThen(yorum) {

//     fetch('https://jsonplaceholder.typicode.com/comments', {
//         metod: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(yorum)
//     })

//         .then(gelenCevap => gelenCevap.json())
//         .then(data => console.log(data))
//         .catch(hata => console.error('hata:', hata));

// }

// // async/await yöntemi ile
// async function postCommentAsync(yorum) {

//     try {

//         const gelenCevap = await fetch('https://jsonplaceholder.typicode.com/comments', {
//             metod: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(yorum)

//         });

//         const data = await gelenCevap.json();
//         console.log(data);

//     } 
    
//     catch (hata) {

//         console.error('Error:', hata);

//     }
// };

// console.log(postCommentThen(yorum));
// console.log(postCommentAsync(yorum));



//4- deleteComment



console.log(deleteCommentThen(5));
console.log(deleteCommentAsync(5));

// then yöntemi ile

function deleteCommentThen(id) {

    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`,

    {metod: 'DELETE'})

        .then(() => console.log(`${id} ID'li yorum silindi.`))
        .catch(Hata => console.error('Hata:', Hata));

}

// async/await yöntemi ile

async function deleteCommentAsync(id) {

    try {

        await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            metod: 'DELETE'
        });


        console.log(`${id} ID'li yorum silindi.`);

    } 
    
    catch (Hata) {console.error('Hata:', Hata);}
}

const updatedCommentPatch = {
    body: 'This comment has been updated with PATCH.'
};



//5- updateCommentPatch

// then
function updateCommentPatchThen(id, guncellenmis) {

    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {

        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(guncellenmis)})


        .then(gelenCevap => gelenCevap.json())
        .then(data => console.log(data))
        .catch(hata => console.error('hata:', hata));


}

// async

async function updateCommentPatchAsync(id, guncellenmis) {

    try {
        const gelenCevap = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(guncellenmis)

        });
        const data = await gelenCevap.json();
        console.log(data);
    } catch (hata) {
        console.error('hata:', hata);
    }
}
console.log(updateCommentPatchAsync(5));
console.log(updateCommentPatchThen(5));


//6- updateCommentPut

const updatedCommentPut = {
    postId: 1,
    name: 'Updated Comment',
    email: 'updated@example.com',
    body: 'This comment has been updated with PUT.'
};





// then yöntemi ile
function updateCommentPutThen(id, updatedData) {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

// async/await yöntemi ile
async function updateCommentPutAsync(id, updatedData) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

console.log(updateCommentPutThen(5));
console.log(updateCommentPutAsync(5));

