let socket = io.connect();

socket.on('displayMessage', (message) => {
    document.getElementById(`target`).innerHTML += '<br>'+message;
});