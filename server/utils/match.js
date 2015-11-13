var matchdata = require('./matchdata.js');
var heroCounters = matchdata.counters;

var match = function(enemyTeam) {
  var map = matchdata.empty;
  for (var i = 0; i < enemyTeam.length; i++) {
    for (var counter in heroCounters[enemyTeam[i]]) {
      map[counter] += heroCounters[enemyTeam[i]][counter];
    }
  }
  for (var j = 0; j < enemyTeam.length; j++) {
    delete map[enemyTeam[j]];
  }
  var results = Object.keys(map).reduce(function(counterList, hero) {
    if (map[hero] < -5) {
      counterList['greatcounters'].push(hero);
    } else if (map[hero] < 0) {
      counterList['counters'].push(hero);
    } else if (map[hero] > 0) {
      counterList['avoid'].push(hero);
    }
    return counterList;
  }, {'greatcounters': [], 'counters': [], 'avoid': []})
  return results;
}

module.exports = match;