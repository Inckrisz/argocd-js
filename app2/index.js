// app-b/index.js
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/data', (req, res) => {
  res.send('Hello from App B');
});

app.listen(PORT, () => console.log(`App B listening on ${PORT}`));
