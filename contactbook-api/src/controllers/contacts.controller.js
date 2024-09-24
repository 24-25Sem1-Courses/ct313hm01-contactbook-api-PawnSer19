function createContact(req, res) {
return res.status(201).json({ contact: {} });
}
function getContactsByFilter(req, res) {
const filters = [];
const { favorite, name } = req.query;
if (favorite !== undefined) {
filters.push(`favorite=${favorite}`);
}
if (name) {
filters.push(`name=${name}`);
}
console.log(filters.join('&'));
return res.json({ contacts: [] });
}
function getContact(req, res) {
return res.json({ contact: {} });
}
function updateContact(req, res) {
return res.json({ contact: {} });
}
function deleteContact(req, res) {
return res.json({
message: 'Contact deleted',
});
}
function deleteAllContacts(req, res) {
return res.json({
message: 'All contacts deleted',
});
}
module.exports = {
getContactsByFilter,
deleteAllContacts,
getContact,
createContact,
updateContact,
deleteContact,
};

const express = require('express');
const contactsController = require('../controllers/contacts.controller');
const router = express.Router();
module.exports.setup = (app) => {
app.use('/api/v1/contacts', router);
router.get('/', contactsController.getContactsByFilter);
router.post('/', contactsController.createContact);
router.delete('/', contactsController.deleteAllContacts);
router.get('/:id', contactsController.getContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);
};

const JSend = require('../jsend');
function createContact(req, res) {
return res.status(201).json(JSend.success({ contact: {} }));
}
function getContactsByFilter(req, res) {
const filters = [];
const { favorite, name } = req.query;
if (favorite !== undefined) {
filters.push(`favorite=${favorite}`);
}
if (name) {
filters.push(`name=${name}`);
}
console.log(filters.join('&'));
return res.json(
JSend.success({
contacts: [],
})
);
}
function getContact(req, res) {
return res.json(JSend.success({ contact: {} }));
}
function updateContact(req, res) {
return res.json(JSend.success({ contact: {} }));
}
function deleteContact(req, res) {
return res.json(JSend.success());
}
function deleteAllContacts(req, res) {
return res.json(JSend.success());
}
module.exports = {
getContactsByFilter,
deleteAllContacts,
getContact,
createContact,
updateContact,
deleteContact,
};