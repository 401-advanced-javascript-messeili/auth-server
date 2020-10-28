'use strict';

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Error :(';
  res.json({ error: `internal server error ${req.e}` });
}

module.exports = errorHandler;
