const AppError = require('../utils/AppError');

function cekApiKey(req, res, next) {
  const apiKeyValid = process.env.API_KEY || 'kantin-rahasia-123';
  const apiKeyDiterima = req.header('x-api-key');

  if (!apiKeyDiterima || apiKeyDiterima !== apiKeyValid) {
    return next(new AppError('API key tidak valid atau tidak ditemukan', 401, 'UNAUTHORIZED'));
  }

  next();
}

module.exports = cekApiKey;