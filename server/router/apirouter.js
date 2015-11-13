var express = require('express');
var match = require('../utils/match.js')
var apiRouter = express.Router();
apiRouter.route('/match')
  .get(function(req, res) {
    var enemyTeam = [];
    if (req.query.h0 !== 'empty') {
      enemyTeam.push(req.query.h0);
    }
    if (req.query.h1 !== 'empty') {
      enemyTeam.push(req.query.h1);
    }
    if (req.query.h2 !== 'empty') {
      enemyTeam.push(req.query.h2);
    }
    if (req.query.h3 !== 'empty') {
      enemyTeam.push(req.query.h3);
    }
    if (req.query.h4 !== 'empty') {
      enemyTeam.push(req.query.h4);
    }
    res.json(match(enemyTeam));
  })

module.exports = apiRouter;