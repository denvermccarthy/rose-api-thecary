const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router().post('/', async (req, res) => {
  try {
    const response = await Quote.insert(req.body);
    res.json(response);
  } catch (e) {
    console.error(e.message);
  }
});
