const router = require('express').Router();
const produtoController = require('../controllers/produto');

router.get('/produto',produtoController.index);
router.post('/produto',produtoController.store);

module.exports = router;