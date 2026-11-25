class AppError extends Error {
  constructor(pesan, statusCode = 500, kode = 'INTERNAL_ERROR') {
    super(pesan);
    this.statusCode = statusCode;
    this.kode = kode;
    this.isOperational = true;
  }
}

module.exports = AppError;