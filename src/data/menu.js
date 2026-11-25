const menuAwal = [
  { id: 1, nama: 'Nasi Goreng Kampung', harga: 15000, kategori: 'makanan', tersedia: true },
  { id: 2, nama: 'Es Teh Manis', harga: 5000, kategori: 'minuman', tersedia: true },
  { id: 3, nama: 'Pisang Goreng Keju', harga: 12000, kategori: 'camilan', tersedia: true },
  { id: 4, nama: 'Mie Ayam Bakso', harga: 18000, kategori: 'makanan', tersedia: false },
  { id: 5, nama: 'Kopi Susu Gula Aren', harga: 10000, kategori: 'minuman', tersedia: true }
];

let menus = [...menuAwal];
let nextId = 6;

async function getAllMenu() {
  return menus;
}

async function getMenuById(id) {
  return menus.find((item) => item.id === id) || null;
}

async function createMenu(payload) {
  const baru = {
    id: nextId++,
    ...payload
  };
  menus.push(baru);
  return baru;
}

async function deleteMenuById(id) {
  const index = menus.findIndex((item) => item.id === id);
  if (index === -1) return false;
  menus.splice(index, 1);
  return true;
}

module.exports = {
  getAllMenu,
  getMenuById,
  createMenu,
  deleteMenuById
};