var express = require('express');
var router = express.Router();
var autoresController = require('../controllers/autoresController.js');

/*
 * GET
 */
router.get('/', autoresController.list);

/*
 * GET
 */
router.get('/:id', autoresController.show);

/*
 * POST
 */
router.post('/', autoresController.create);

/*
 * PUT
 */
router.put('/:id', autoresController.update);

/*
 * DELETE
 */
router.delete('/:id', autoresController.remove);

module.exports = router;
