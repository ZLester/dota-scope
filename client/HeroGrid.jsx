var React = require('react');
var mapHeroes = require('./utils/mapheroes.jsx');
var heroNames = require('./utils/heronames.js');

var HeroGrid = React.createClass({
  propTypes: {
    handleHeroMouseEnter: React.PropTypes.func.isRequired,
    handleHeroMouseLeave: React.PropTypes.func.isRequired,
    handleHeroClick: React.PropTypes.func.isRequired,
    selectorStates: React.PropTypes.object.isRequired,
    hoverState: React.PropTypes.string.isRequired
  },

  render () {
    var radiantStrRows = mapHeroes(heroNames.radiantStr, this);
    var direStrRows = mapHeroes(heroNames.direStr, this);
    var radiantAgiRows = mapHeroes(heroNames.radiantAgi, this);
    var direAgiRows = mapHeroes(heroNames.direAgi, this);
    var radiantIntRows = mapHeroes(heroNames.radiantInt, this);
    var direIntRows = mapHeroes(heroNames.direInt, this);
    return (
      <div className='heroGridWrapper'>
        <div className='strHeroes'>
          <h3 className='strHeader'>Strength</h3>
          <table className='radiantStrHeroes'>
            <tbody>{radiantStrRows}</tbody>
          </table>
          <table className='direStrHeroes'>
            <tbody>{direStrRows}</tbody>
          </table>
        </div>
        <div className='agiHeroes'>
          <h3 className='agiHeader'>Agility</h3>
          <table className='radiantAgiHeroes'>
            <tbody>{radiantAgiRows}</tbody>
          </table>
          <table className='direAgiHeroes'>
            <tbody>{direAgiRows}</tbody>
          </table>
        </div>
        <div className='intHeroes'>
          <h3 className='intHeader'>Intelligence</h3>
          <table className='radiantIntHeroes'>
            <tbody>{radiantIntRows}</tbody>
          </table>
          <table className='direIntHeroes'>
            <tbody>{direIntRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = HeroGrid;