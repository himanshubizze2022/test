
const express = require('express');

const app = express();

const bodyparser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('we are at the root route of our server');
})

app.get('/start', function (req, res) {
    res.send('wow this is working');
})

app.use(bodyparser.json());
app.use(cors());

app.listen(port, function (err) {
if(err){
	console.log("Error while starting server");
}
else{
	console.log("Server has been started at "+port);
}
})
