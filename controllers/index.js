const router = require('express').Router();

const api = require('./api');
const home = require('./hone-routes');

router.use('/', home);
router.use('/api', api);

module.exports = router;