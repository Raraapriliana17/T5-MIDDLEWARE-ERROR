const Joi = require('joi');

const createMenuSchema = Joi.object({
  nama: Joi.string().trim().min(3).max(50).required().messages({
    'string.base': 'nama harus berupa string',
    'string.empty': 'nama wajib diisi',
    'string.min': 'nama minimal 3 karakter',
    'string.max': 'nama maksimal 50 karakter',
    'any.required': 'nama wajib diisi'
  }),
  harga: Joi.number().integer().min(1000).max(100000).required().messages({
    'number.base': 'harga harus berupa angka',
    'number.integer': 'harga harus bilangan bulat',
    'number.min': 'harga minimal 1000',
    'number.max': 'harga maksimal 100000',
    'any.required': 'harga wajib diisi'
  }),
  kategori: Joi.string().valid('makanan', 'minuman', 'camilan').required().messages({
    'any.only': 'kategori harus salah satu dari makanan, minuman, camilan',
    'any.required': 'kategori wajib diisi'
  }),
  tersedia: Joi.boolean().default(true).messages({
    'boolean.base': 'tersedia harus berupa boolean'
  })
});

module.exports = { createMenuSchema };