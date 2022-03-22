const express = require('express');
const MyInfo = require('../controllers/myInfo.controller');
const router = express.Router();

router.get('/all', MyInfo.getMyAllInfo);
router.get('/', MyInfo.getMyLatestInfo);
router.get('/:id', MyInfo.getMyInfoById);
router.post('/', MyInfo.createMyInfo);
router.patch('/:id', MyInfo.updateMyInfo);
router.delete('/:id', MyInfo.deleteMyInfo);

module.exports = router