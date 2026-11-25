const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const cekApiKey = require('../middlewares/cekApiKey');
const validate = require('../middlewares/validate');
const { createMenuSchema } = require('../validators/menuValidator');

router.get('/', menuController.listMenu);
router.get('/:id', menuController.detailMenu);
router.post('/', cekApiKey, validate(createMenuSchema), menuController.buatMenu);
router.delete('/:id', cekApiKey, menuController.hapusMenu);

module.exports = router;