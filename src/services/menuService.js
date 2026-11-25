const AppError = require('../utils/AppError');
const menuData = require('../data/menu');

async function ambilSemuaMenu(kategori) {
  const daftar = await menuData.getAllMenu();
  if (!kategori) return daftar;
  return daftar.filter((item) => item.kategori.toLowerCase() === String(kategori).toLowerCase());
}

async function ambilDetailMenu(idParam) {
  const id = Number(idParam);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError(`Menu dengan id ${idParam} tidak ditemukan`, 404, 'NOT_FOUND');
  }
  const item = await menuData.getMenuById(id);
  if (!item) {
    throw new AppError(`Menu dengan id ${id} tidak ditemukan`, 404, 'NOT_FOUND');
  }
  return item;
}

async function tambahMenu(dataBaru) {
  const daftar = await menuData.getAllMenu();
  const kembar = daftar.some(
    (item) => item.nama.trim().toLowerCase() === dataBaru.nama.trim().toLowerCase()
  );
  if (kembar) {
    throw new AppError(`Menu dengan nama "${dataBaru.nama}" sudah ada`, 409, 'NAMA_DUPLIKAT');
  }
  return await menuData.createMenu(dataBaru);
}

async function hapusMenu(idParam) {
  const id = Number(idParam);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError(`Menu dengan id ${idParam} tidak ditemukan`, 404, 'NOT_FOUND');
  }
  const terhapus = await menuData.deleteMenuById(id);
  if (!terhapus) {
    throw new AppError(`Menu dengan id ${id} tidak ditemukan`, 404, 'NOT_FOUND');
  }
}

module.exports = {
  ambilSemuaMenu,
  ambilDetailMenu,
  tambahMenu,
  hapusMenu
};