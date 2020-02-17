const express = require('express');

const serverPort = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/../Interface/dist/Portfolio'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/../Interface/dist/Portfolio/index.html');
});

app.listen(serverPort, (err) => {
    if(err) throw err;
    console.log(`Portfolio server listening on ${serverPort}`);
});