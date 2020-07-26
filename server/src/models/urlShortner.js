/**
 * @file creates the url schema
 */

// Third party imports
import mongoose from 'mongoose';

// constants
const { Schema } = mongoose;

// create schema
const urlSchema = Schema({
  uniqueCode: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Url = mongoose.model('Url', urlSchema);
export default Url;
