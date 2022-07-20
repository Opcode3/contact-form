const express = require('express');
const postContact = require('../controllers/contactController');

const router = express.Router();

// router.get('', getContacts);
router.post('', postContact);

module.exports = router;
