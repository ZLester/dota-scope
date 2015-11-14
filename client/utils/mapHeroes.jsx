var React = require('react');
var generateClasses = require('./generateclasses.js');
var heroNames = require('./heronames.js');

exports.generateSelectGrid = function(data, context) {
  var result = data.map(function (row, index) {
      var heroes = row.map(function (hero) {
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

exports.generateResultsGrid = function(data, context) {

  var tds = data.map(function (hero) {
    var heroClassNames = generateClasses.result(hero, context);
    return (
      <td
        className={heroClassNames}
        key={hero} 
        onMouseEnter={context.props.handleHeroMouseEnter.bind(null, heroNames.nameHash[hero])} 
        onMouseLeave={context.props.handleHeroMouseLeave.bind(null, heroNames.nameHash[hero])} >
      </td>
    );
  }, context)
  var result = [];
  var row = [];
  for (var i = 0; i < tds.length; i++) {
    row.push(tds[i]);
    if (row.length === 4 || i === tds.length - 1)  {
      result.push(<tr>{row}</tr>);
      row = [];
    }
  }
  return result;
}