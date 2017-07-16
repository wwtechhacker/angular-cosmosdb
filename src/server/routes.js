const express = require('express');
const router = express.Router();

const heroService = require('./hero.service');

router.get('/heroes', (req, res) => {
  // res.send(200, [{ id: 10, name: 'Starlord', saying: 'oh yeah' }]);
  heroService.getHeroes(req, res);
});

router.post('/hero', (req, res) => {
  heroService.postHeroes(req, res);
});

router.put('/hero/:id', (req, res) => {
  heroService.putHero(req, res);
});

router.delete('/hero/:id', (req, res) => {
  heroService.deleteHero(req, res);
});

module.exports = router;
