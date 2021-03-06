var express = require('express');
var match = require('../utils/match.js')
var apiRouter = express.Router();

apiRouter.route('/match')
  .get(function(req, res) {
    var enemyTeam = Object.keys(req.query).reduce(function(enemyTeam, slot) {
      if (req.query[slot] !== 'empty') {
        enemyTeam.push(req.query[slot]);
      }
      return enemyTeam;
    }, []);
    match(enemyTeam, function(err, heroCounters) {
      res.json(heroCounters);
    });
  })

module.exports = apiRouter;