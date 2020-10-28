/* eslint-disable comma-dangle */
const express = require('express');

const router = express.Router();
// const users = require('../models/users/users-model.js');
const bearerMiddleware = require('../middleware/bearer.js');
const permissions = require('../middleware/authorize.js');

router.get('/secret', bearerMiddleware, (req, res) => {
  res.json(req.user);
});

router.get('/read', bearerMiddleware, permissions('read'), (req, res) => {
  res.send('Route /read worked');
});
router.post('/add', bearerMiddleware, permissions('create'), (req, res) => {
  res.send('Route /create worked');
});
router.put('/change', bearerMiddleware, permissions('update'), (req, res) => {
  res.send('Route /update worked');
});

router.delete(
  '/remove',
  bearerMiddleware,
  permissions('delete'),
  (req, res) => {
    res.send('Route /delete worked');
  }
);

module.exports = router;
