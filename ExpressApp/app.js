const express = require('express');
const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Import the ps3 router
const ps3Router = require('./routes/ps3');
app.use('/ps3', ps3Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
