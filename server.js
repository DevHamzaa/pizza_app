const express = require('express');
const eel = require('express-ejs-layouts');
const router = require('./routes/web');
const app = express();

// Set Template Engine
app.use(express.static(`public`));
app.use(eel);
app.set('views', `${__dirname}/resources/views`);
app.set('view engine', 'ejs');
app.use(router);
// Listning to the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    try {
        console.log(`listining to port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
