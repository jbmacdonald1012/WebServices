const express = require('express');

const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllContacts);

router.get('/contacts/:id', contactsController.getSingleContact);

router.post('/', contactsController.createContact);

router.put('/contacts/:id', contactsController.updateContact);

router.delete('/contacts/:id', contactsController.deleteContact);

module.exports = router;