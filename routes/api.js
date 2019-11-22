const express = require('express');
const router = express.Router();

// const middleware = require('../middleware/auth');
const basicAPI = require('../controllers/basic.js');
// const helperAPI = require('../controllers/helper.js');

router.get('/test', basicAPI.test);
//router.get('/mailIt', helperAPI.sendMail);

router.post('/checkin', basicAPI.checkin);
router.post('/checkout', basicAPI.checkout);

router.get('/current', basicAPI.current);
router.get('/past', basicAPI.past);
module.exports = router;