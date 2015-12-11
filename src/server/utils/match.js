var matchdata = require('./matchdata.js');
var heroController = require('../controllers/heroController.js');
var heroCounters = matchdata.counters;
var Promise = require("bluebird");

var generateEmptyResults = function() {
  return {
    abaddon: 0,
    alchemist: 0,
    ancientapparition: 0,
    antimage: 0,
    axe: 0,
    bane: 0,
    batrider: 0,
    beastmaster: 0,
    bloodseeker: 0,
    bountyhunter: 0,
    brewmaster: 0,
    bristleback: 0,
    broodmother: 0,
    centaurwarrunner: 0,
    chaosknight: 0,
    chen: 0,
    clinkz: 0,
    clockwerk: 0,
    crystalmaiden: 0,
    darkseer: 0,
    dazzle: 0,
    deathprophet: 0,
    disruptor: 0,
    doom: 0,
    dragonknight: 0,
    drowranger: 0,
    earthshaker: 0,
    earthspirit: 0,
    eldertitan: 0,
    emberspirit: 0,
    enchantress: 0,
    enigma: 0,
    facelessvoid: 0,
    gyrocopter: 0,
    huskar: 0,
    invoker: 0,
    jakiro: 0,
    juggernaut: 0,
    keeperofthelight: 0,
    kunkka: 0,
    legioncommander: 0,
    leshrac: 0,
    lich: 0,
    lifestealer: 0,
    lina: 0,
    lion: 0,
    lonedruid: 0,
    luna: 0,
    lycan: 0,
    magnus: 0,
    medusa: 0,
    meepo: 0,
    mirana: 0,
    morphling: 0,
    nagasiren: 0,
    naturesprophet: 0,
    necrophos: 0,
    nightstalker: 0,
    nyxassassin: 0,
    ogremagi: 0,
    omniknight: 0,
    oracle: 0,
    outworlddevourer: 0,
    phantomassassin: 0,
    phantomlancer: 0,
    phoenix: 0,
    puck: 0,
    pudge: 0,
    pugna: 0,
    queenofpain: 0,
    razor: 0,
    riki: 0,
    rubick: 0,
    sandking: 0,
    shadowdemon: 0,
    shadowfiend: 0,
    shadowshaman: 0,
    silencer: 0,
    wraithking: 0,
    skywrathmage: 0,
    slardar: 0,
    slark: 0,
    sniper: 0,
    spectre: 0,
    spiritbreaker: 0,
    stormspirit: 0,
    sven: 0,
    techies: 0,
    templarassassin: 0,
    terrorblade: 0,
    tidehunter: 0,
    timbersaw: 0,
    tinker: 0,
    tiny: 0,
    treantprotector: 0,
    trollwarlord: 0,
    tusk: 0,
    undying: 0,
    ursa: 0,
    vengefulspirit: 0,
    venomancer: 0,
    viper: 0,
    visage: 0,
    warlock: 0,
    weaver: 0,
    windrunner: 0,
    winterwyvern: 0,
    io: 0,
    witchdoctor: 0,
    zeus: 0
  };
};

var match = function(enemyTeam, outerCallback) {
  var map = generateEmptyResults();
  var matchSingleHero = function(enemyHero, callback) {
    var curEnemy = enemyHero.toLowerCase().replace(/[^a-z]+/g, '');
    heroController.findByName(curEnemy, function(err, enemyHero) {
      if (err) {
        return callback(err);
      }
      callback(null, enemyHero);
    });
  }
  matchSingleHero = Promise.promisify(matchSingleHero);
  var teamMatches = [];
  for (var i = 0; i < enemyTeam.length; i++) {
    teamMatches.push(matchSingleHero(enemyTeam[i]));
  }
  Promise.all(teamMatches).then(function(enemyTeamRes) {
    for (var j = 0; j < enemyTeamRes.length; j++) {
      var curEnemy = enemyTeamRes[j].toJSON();
      for (var counter in curEnemy) {
        if (counter !== 'name' && counter !== '__v' && counter !== '_id') {
          map[counter] += curEnemy[counter];
        }
      }
    }
    for (var k = 0; k < enemyTeam.length; k++) {
      delete map[enemyTeam[k]];
    }
    var results = Object.keys(map).reduce(function(counterList, hero) {
      if (map[hero] < -3.5) {
        counterList['greatCounters'].push(hero);
      } else if (map[hero] < -1) {
        counterList['counters'].push(hero);
      } else if (map[hero] > 1) {
        counterList['avoid'].push(hero);
      }
      return counterList;
    }, {'greatCounters': [], 'counters': [], 'avoid': []})
    outerCallback(null, results);
  });
};

module.exports = match;