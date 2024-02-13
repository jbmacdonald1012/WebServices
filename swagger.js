// eslint-disable-next-line import/no-extraneous-dependencies, node/no-unpublished-require
const swaggerAutogen = require('swagger-autogen')();

const document = {
  info: {
    title: 'Contacts API',
    description: 'API that gets, creates, updates, and deletes contacts from a DB'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, document);
