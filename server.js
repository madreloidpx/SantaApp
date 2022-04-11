// server.js
// where your node app starts

// init project
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes.js';
import { startElfWork } from './lib/workerElves.js';
const app = express();

app.use(bodyParser());
app.use(morgan());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('view engine', 'pug');

routes(app);
startElfWork();

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});