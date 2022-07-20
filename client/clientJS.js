let socket = io.connect();

socket.on('displayMessage', (message) => {
    document.getElementById(`target`).innerHTML += '<br>'+message;
});


document.getElementById(`global`).addEventListener(`click`, () => {
    let msg = document.getElementById(`message`).value;
    socket.emit('sendToAll', (msg));
    console.log(msg);
})

document.getElementById(`self`).addEventListener(`click`, () => {
    let selfMsg = document.getElementById(`message`).value;
    socket.emit('sendToMe', (selfMsg));
    console.log(selfMsg);
})

