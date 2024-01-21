const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => 
{
    const result = await mongodb.getDb().db('main_db').collection('contacts').find();
    result.toArray().then((contactsList) => 
    {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contactsList);
    });
};

const getSingleContact = async(req, res, next) => 
{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('main_db')
        .collection('contacts')
        .find( {_id : userId} );
        result.toArray().then((contactsList) => 
        {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contactsList[0]);
        });
};

module.exports=
{
    getAllContacts,
    getSingleContact
}