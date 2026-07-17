const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve public static files from root directory
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Advanced SaaS Dashboard running on port ${port}`);
});
