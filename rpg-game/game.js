const socket = io('http://localhost:3000');
const statusText = document.getElementById('status');
const attackButton = document.getElementById('attack');

socket.on('connect', () => {
    statusText.innerText = 'Підключено до серверу!';
});

attackButton.addEventListener('click', () => {
    socket.emit('attack', { damage: 10 });
    statusText.innerText = 'Ви атакували ворога!';
});

socket.on('attacked', (data) => {
    statusText.innerText = `Ворог завдав ${data.damage} шкоди!`;
});