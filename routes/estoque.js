const router = require('express').Router();

const estoqueController = require('../controllers/estoque');

router.get('/',estoqueController.index);
router.get('/atualizar-estoque',estoqueController.update);

router.post('/atualizar-estoque-inserir',estoqueController.update_insert);
router.post('/atualizar-estoque-alterar-quantidade',estoqueController.update_quantity);
router.post('/excluir-produto-estoque',estoqueController.delete_product);
router.get('/quantidade-produto/:nome',estoqueController.quantidade_produto);
router.get('/pesquisar-produto/:nome',estoqueController.getProductEstoque);

module.exports = router;