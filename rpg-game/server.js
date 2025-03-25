const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('Гравець підключився');

    socket.on('attack', (data) => {
        console.log('Гравець атакує:', data);
        socket.broadcast.emit('attacked', { damage: data.damage });
    });
});