let socket = io.connect();

socket.on('displayMessage', (message) => {
    document.getElementById(`target`).innerHTML += '<br>'+ userName + ": " +message;
});

document.getElementById(`global`).addEventListener(`click`, () => {
    let msg = document.getElementById(`message`).value;
    socket.emit('sendToAll', (msg));
})

document.getElementById(`self`).addEventListener(`click`, () => {
    let selfMsg = document.getElementById(`message`).value;
    socket.emit('sendToMe', (selfMsg));
})

//let users = [];
//let userName = prompt('Choose a username?');

//users.push(userName);

//for(let i = 0; i < users.length ; i++) {
//    console.log(users[i]);
//}



