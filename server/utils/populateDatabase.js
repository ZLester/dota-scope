var heroController = require('../controllers/heroController.js');
var mongoose = require('mongoose');
var heroNames = ['abaddon', 'alchemist', 'ancientapparition', 'antimage', 'axe', 'bane', 'batrider', 'beastmaster', 'bloodseeker', 'bountyhunter', 'brewmaster', 'bristleback', 'broodmother', 'centaurwarrunner', 'chaosknight', 'chen', 'clinkz', 'clockwerk', 'crystalmaiden', 'darkseer', 'dazzle', 'deathprophet', 'disruptor', 'doom', 'dragonknight', 'drowranger', 'earthshaker', 'earthspirit', 'eldertitan', 'emberspirit', 'enchantress', 'enigma', 'facelessvoid', 'gyrocopter', 'huskar', 'invoker', 'jakiro', 'juggernaut', 'keeperofthelight', 'kunkka', 'legioncommander', 'leshrac', 'lich', 'lifestealer', 'lina', 'lion', 'lonedruid', 'luna', 'lycan', 'magnus', 'medusa', 'meepo', 'mirana', 'morphling', 'nagasiren', 'naturesprophet', 'necrophos', 'nightstalker', 'nyxassassin', 'ogremagi', 'omniknight', 'oracle', 'outworlddevourer', 'phantomassassin', 'phantomlancer', 'phoenix', 'puck', 'pudge', 'pugna', 'queenofpain', 'razor', 'riki', 'rubick', 'sandking', 'shadowdemon', 'shadowfiend', 'shadowshaman', 'silencer', 'wraithking', 'skywrathmage', 'slardar', 'slark', 'sniper', 'spectre', 'spiritbreaker', 'stormspirit', 'sven', 'techies', 'templarassassin', 'terrorblade', 'tidehunter', 'timbersaw', 'tinker', 'tiny', 'treantprotector', 'trollwarlord', 'tusk', 'undying', 'ursa', 'vengefulspirit', 'venomancer', 'viper', 'visage', 'warlock', 'weaver', 'windrunner', 'winterwyvern', 'io', 'witchdoctor', 'zeus'];

var seedHeroes = function() {
  mongoose.connection.collections['heroes'].remove(function(err, res) {
    if (err) {
      console.log('Error clearing DB ' + err);
      return;
    }
    for (var i = 0; i < heroNames.length; i++) {
      heroController.create({name: heroNames[i]}, function(err, res) {
        if (err) {
          console.log(err)
          return;
        }
        console.log(res);
      })
    }

  });  
};

module.exports = seedHeroes;