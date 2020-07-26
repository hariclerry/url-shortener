// Third party imports
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

// local imports
import routes from './routes/urlRoutes';

// Initialisation
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
routes(app);
app.get('/', (req, res) => {
  res.send('Welcome to Url shortner');
});

// Cater to invalid routes
app.all('*', (req, res) => {
  res.status(200).send('Oooooops, wrong endpoint!');
});
module.exports = app;
