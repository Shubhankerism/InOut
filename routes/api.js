const express = require('express');
const router = express.Router();

const basicAPI = require('../controllers/basic.js');

router.get('/test', basicAPI.test);

router.post('/checkin', basicAPI.checkin);
router.post('/checkout', basicAPI.checkout);

router.get('/current', basicAPI.current);
router.get('/past', basicAPI.past);
module.exports = router;