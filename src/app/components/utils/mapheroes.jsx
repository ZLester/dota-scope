const React = require('react');
const generateClasses = require('./generateclasses.js');
const heroNames = require('./heronames.js');

exports.generateSelectGrid = function(data, context) {
  let result = data.map(function (row, index) {
      let heroes = row.map(function (hero) {
        let heroClassNames = generateClasses.hero(hero, this);
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
  let tds = data.map(function (hero) {
    let heroClassNames = generateClasses.result(hero, context);
    return (
      <td
        className={heroClassNames}
        key={hero} 
        onMouseEnter={context.props.handleHeroMouseEnter.bind(null, heroNames.nameHash[hero])} 
        onMouseLeave={context.props.handleHeroMouseLeave.bind(null, heroNames.nameHash[hero])} >
      </td>
    );
  }, context)
  let result = [];
  let row = [];
  for (let i = 0; i < tds.length; i++) {
    row.push(tds[i]);
    if (row.length === 4 || i === tds.length - 1)  {
      result.push(<tr>{row}</tr>);
      row = [];
    }
  }
  return result;
};