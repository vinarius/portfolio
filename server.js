const express = require('express');

const serverPort = process.env.PORT || 8080;
const app = express();

app.get('*', (req, res) => {
    res.send(__dirname);
    // res.sendFile(__dirname + '/Interface/dist/Portfolio/index.html');
});
// app.use(express.static(__dirname + '/Interface/dist/Portfolio'));


app.listen(serverPort, (err) => {
    if(err) throw err;
    console.log(`Portfolio server listening on ${serverPort}`);
});