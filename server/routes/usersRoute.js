const express = require('express');
const Users = require('../controllers/users.controller');
const router = express.Router();

router.get('/', Users.getUsers);
router.get('/:id', Users.getUserById);
router.post('/', Users.createUser);
router.patch('/:id', Users.updateUser);
router.delete('/:id', Users.deleteUser);

module.exports = router