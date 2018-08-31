

const express = require("express");
const path = require("path");
const config = {port: 3741} 

let app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
    console.log('Time: %d', Date.now(), req.method, req.url);
    next();
});

// requests will never reach this route
app.get('/', function (req, res) {
    res.send('Welcome');
});

app.listen(config.port, () => {
	console.log(`Listening on port http://localhost:${config.port}`);
});