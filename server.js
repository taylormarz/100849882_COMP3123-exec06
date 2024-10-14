const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes.js');

const DB_URL = "mongodb+srv://taylormarz:905Sysco@cluster0.vb98d.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {})
    .then(() => {
        console.log("Successfully connected to the database mongoDB Atlas Server");
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use('/notes', noteRoutes);

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
