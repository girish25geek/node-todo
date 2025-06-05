const express = require('express');
const path = require('path');
const app = express();
const PORT = 3010;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 App running at http://localhost:${PORT}`);
});
