const menuService = require('../services/menuService');

async function listMenu(req, res, next) {
  try {
    const data = await menuService.ambilSemuaMenu(req.query.kategori);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
}

async function detailMenu(req, res, next) {
  try {
    const data = await menuService.ambilDetailMenu(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
}

async function buatMenu(req, res, next) {
  try {
    const data = await menuService.tambahMenu(req.body);
    res.status(201).json({ data });
  } catch (err) {
    next(err);
  }
}

async function hapusMenu(req, res, next) {
  try {
    await menuService.hapusMenu(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listMenu,
  detailMenu,
  buatMenu,
  hapusMenu
};