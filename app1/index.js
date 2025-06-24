// app-a/index.js
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://app-b.default.svc.cluster.local:4000/data');
    res.send(`Received from B: ${response.data}`);
  } catch (err) {
    res.send('Failed to reach app B');
  }
});

app.listen(PORT, () => console.log(`App A listening on ${PORT}`));
