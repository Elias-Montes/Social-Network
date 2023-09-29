const router = require('express').router();
const api = require('/api');
router.use('/api', api);
router.use((req, res) => {
    res.status(404).send('<h1>Error</h1>')
});
module.exports = router;