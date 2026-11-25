function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  if (statusCode >= 500) {
    console.error(err.stack || err);
    return res.status(500).json({
      error: {
        pesan: 'Terjadi kesalahan pada server',
        kode: 'INTERNAL_SERVER_ERROR'
      }
    });
  }

  return res.status(statusCode).json({
    error: {
      pesan: err.message || 'Terjadi kesalahan',
      kode: err.kode || 'ERROR'
    }
  });
}

module.exports = errorHandler;