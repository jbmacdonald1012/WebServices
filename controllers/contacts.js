/* eslint-disable no-shadow */
const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const getAllContacts = async (request, response) => {
  const result = await mongodb.getDb().db('main_db').collection('contacts').find();

  result.toArray().then((contactsList) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(contactsList);
  });
};

const getSingleContact = async (request, response) => {
  const userId = new ObjectId(request.params.id);
  const result = await mongodb.getDb().db('main_db').collection('contacts').find({ _id: userId });

  result.toArray().then((contactsList) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(contactsList[0]);
  });
};

const createContact = async (request, response) => {
  const newContact = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    favoriteColor: request.body.favoriteColor,
    birthday: request.body.birthday
  };

  const db = mongodb.getDb();

  const result = await db.collection('contacts').insertOne(newContact);

  if (result.acknowledged === true) {
    // eslint-disable-next-line no-underscore-dangle
    response.status(201).json(result._id);
  } else {
    console.error('Unexpected insert result:', result);
    response.status(500).json('An error occurred while attempting to create the contact');
  }
};

const updateContact = async (request, response) => {
  const contactId = new ObjectId(request.params.id);
  const contact = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    favoriteColor: request.body.favoriteColor,
    birthday: request.body.birthday
  };

  const db = mongodb.getDb();

  const result = await db.collection('contacts').replaceOne({ _id: contactId }, contact);

  if (result.modifiedCount > 0) {
    response.status(204).send();
  } else {
    response
      .status(500)
      .json('An error occurred while attempting to update the contact information.');
  }
};

const deleteContact = async (request, response) => {
  const contactId = new ObjectId(request.params.id);

  const db = mongodb.getDb();

  const result = await db.collection('contacts').deleteOne({ _id: contactId });

  if (result.deletedCount > 0) {
    response.status(204).send();
  } else {
    response
      .status(500)
      .json('An error occurred while attempting to delete the contact information');
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};
