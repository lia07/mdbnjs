var express = require('express');
var router = express.Router();
var librosController = require('../controllers/librosController.js');

/*
 * GET
 */
router.get('/', librosController.list);

/*
 * GET
 */
router.get('/:id', librosController.show);

/*
 * POST
 */
router.post('/', librosController.create);

/*
 * PUT
 */
router.put('/:id', librosController.update);

/*
 * DELETE
 */
router.delete('/:id', librosController.remove);

module.exports = router;
