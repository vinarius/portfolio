const express = require('express');
const fs = require('fs');

const serverPort = process.env.PORT || 8080;
const app = express();

app.get('*', (req, res) => {
    const obj = {
        '__dirname': fs.readdirSync(__dirname),
        'Interface': fs.readdirSync(__dirname + '/Interface')
        // 'dist': fs.readdirSync(__dirname + '/Interface/dist'),
        // 'Portfolio': fs.readdirSync(__dirname + '/Interface/dist/Portfolio')
    };
    res.send(obj);
    // res.sendFile(__dirname + '/Interface/dist/Portfolio/index.html');
});
// app.use(express.static(__dirname + '/Interface/dist/Portfolio'));


app.listen(serverPort, (err) => {
    if(err) throw err;
    console.log(`Portfolio server listening on ${serverPort}`);
});