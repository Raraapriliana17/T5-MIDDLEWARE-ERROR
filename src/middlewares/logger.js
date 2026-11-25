function logger(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const durasi = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} (${durasi} ms)`);
  });
  next();
}

module.exports = logger;