const express = require('express');
const app = express();

// Визначаємо порт для прослуховування
const port = 3000;

// Встановлюємо корінь для статичних файлів, якщо вони є
app.use(express.static('public'));

// Створюємо простий маршрут для тесту
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Запускаємо сервер на порту 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
