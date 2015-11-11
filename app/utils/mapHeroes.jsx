var React = require('react');
var cx = require('classnames')

var checkHeroHover = function (hero, context) {
  if (context.props.hoverState === hero) {
    return true;
  }
  return false;
}

var checkHeroSelected = function (hero, context) {
  var result = false;
  for (var slot in context.props.selectorStates) {
    if (context.props.selectorStates[slot] === hero) {
      result = true;
    }
  }
  return result;
}


var mapHeroes = function(data, context) {
  var result = data.map(function (row, index) {
      var heroes = row.map(function (hero, index) {
        var heroName = hero.toLowerCase();
        var classes = cx({
          heroName: true,
          'heroPortrait': true,
          'heroPortraitHover': checkHeroHover(hero, context),
          'heroPortraitSelected': checkHeroSelected(hero, context)
        });
        return (
          <td 
            className={classes}
            key={hero} 
            onMouseEnter={context.props.handleHeroMouseEnter.bind(null, hero)} 
            onMouseLeave={context.props.handleHeroMouseLeave.bind(null, hero)} 
            onClick={context.props.handleHeroClick.bind(null, hero)}>
          </td>
        );
      }, context)
      return (
        <tr key={index}>{heroes}</tr>
      );
    }, context)
  return result;
}

module.exports = mapHeroes;