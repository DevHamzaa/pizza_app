const express = require('express');
const eel = require('express-ejs-layouts');
const router = require('./routes/web');
const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000;

// Set Template Engine
app.use(eel);
app.set('views', `${__dirname}/resources/views`);
app.set('view engine', 'ejs');
// Listning to the server
app.listen(port, () => {
    try {
        console.log(`listining to port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
