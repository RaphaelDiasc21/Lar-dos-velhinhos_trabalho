const router = require('express').Router();
const CadastroController = require('../controllers/cadastro');;

router.get('/cadastro',CadastroController.index);

router.post('/cadastro/cadastro-usuario',CadastroController.insertUser);

module.exports = router;