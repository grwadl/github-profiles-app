const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = 4000;
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/recent', require('./routes/recently.routes'));
const conncetionDB = require('./connectionToDb')
async function start() {
    try {
        await conncetionDB();
        app.listen(PORT, () => {
            console.log(' SERVER WORKS ON PORT ' + PORT + ' SERVER WORKS ON PORT ' + PORT + ' SERVER WORKS ON PORT ' + PORT + ' SERVER WORKS ON PORT ' + PORT + ' SERVER WORKS ON PORT ' + PORT);
        })
        
    }
    catch (e) {
        console.log(e);
    }
}
start();