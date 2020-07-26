/* eslint-disable no-console */
/**
 * @file contains database configuration settings
 */

import mongoose from 'mongoose';

import Url from '../models/urlShortner';

require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
  }
};

const models = { Url };

export { connectDb };

export default models;
