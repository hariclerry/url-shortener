/**
 * @file responsible for server startup and running
 */

// local imports
import app from './app';
import { connectDb } from './db';

require('dotenv').config();

// constants
const port = process.env.PORT || 8000;

connectDb().then(async () => {
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`listening on port ${port}...`));
});
