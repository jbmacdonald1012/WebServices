const dotenv = require('dotenv');

const { MongoClient } = require('mongodb');

dotenv.config();
// eslint-disable-next-line no-underscore-dangle
let _db;

// eslint-disable-next-line consistent-return
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGO_DB_CONNECTION)
    .then((client) => {
      _db = client.db('main_db');
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};