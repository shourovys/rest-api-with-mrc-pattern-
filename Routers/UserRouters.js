const express = require('express');

const router = express.Router();
const { createUser, allUser, singleUser } = require('../Controllers/userControllers');

router.post('/create-user', createUser);
router.get('/all-user', allUser);
router.get('/:id', singleUser);

module.exports = router;
