const { Router } = require('express');
const character = require('../models/Character');
module.exports = Router().get('/', async (req, res) => {
  const fetch = await character.getAll();
  res.json(fetch);
});
