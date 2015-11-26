var heroController = require('../controllers/heroController.js');
var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/dotascope';
mongoose.connect(mongoUri);

heroController.findByName('abaddon', function(err, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
});