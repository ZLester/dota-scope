var express = require('express');
var apiRouter = express.Router();

apiRouter.route('/heroes')
  .get(function(req, res) {
    res.json('Placeholder for all heroes')
  })

apiRouter.route('/heroes/:id')
  .get(function(req, res) {
    res.json('Placeholder for requesting hero ' +  req.params.id);
  })

module.exports = apiRouter;