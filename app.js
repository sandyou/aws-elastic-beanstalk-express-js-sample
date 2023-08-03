const express = require('express');
const app = express();
const port = 8080;

const abc = 12345;

app.get('/', (req, res) => res.send('Hello Sandy\'s cloudformation codepipline World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
