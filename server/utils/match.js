var matchdata = require('./matchdata.js');
var heroCounters = matchdata.counters;

var generateEmptyResults = function() {
  return {
    abbadon: 0,
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

var match = function(enemyTeam) {
  var map = generateEmptyResults();

  for (var i = 0; i < enemyTeam.length; i++) {
    enemyTeam[i] = enemyTeam[i].toLowerCase().replace(/[^a-z]+/g, '')
    for (var counter in heroCounters[enemyTeam[i]]) {
      map[counter] += heroCounters[enemyTeam[i]][counter];
    }
  }
  for (var j = 0; j < enemyTeam.length; j++) {
    console.log('deleted ' + enemyTeam[j]);
    delete map[enemyTeam[j]];
  }
  var results = Object.keys(map).reduce(function(counterList, hero) {
    if (map[hero] < -5) {
      counterList['greatCounters'].push(hero);
    } else if (map[hero] < 0) {
      counterList['counters'].push(hero);
    } else if (map[hero] > 0) {
      counterList['avoid'].push(hero);
    }
    return counterList;
  }, {'greatCounters': [], 'counters': [], 'avoid': []})
  return results;
}

module.exports = match;