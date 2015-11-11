var React = require('react');
var generateClasses = require('./generateClasses.js');

var mapHeroes = function(data, context) {
  var result = data.map(function (row, index) {
      var heroes = row.map(function (hero, index) {
        var heroClassNames = generateClasses.hero(hero, this);
        return (
          <td 
            className={heroClassNames}
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
};

module.exports = mapHeroes;