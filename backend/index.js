const express = require('express');
const morgan = require('morgan'); // optional but useful for logging
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello from Backend!');
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
