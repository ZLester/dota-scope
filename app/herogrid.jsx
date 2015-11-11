var React = require('react');
var mapHeroes = require('./utils/mapHeroes.jsx');
var stubData = require('./utils/stubData.js');

var HeroGrid = React.createClass({
  propTypes: {
    handleHeroMouseEnter: React.PropTypes.func.isRequired,
    handleHeroMouseLeave: React.PropTypes.func.isRequired,
    handleHeroClick: React.PropTypes.func.isRequired,
    selectorStates: React.PropTypes.object.isRequired,
    hoverState: React.PropTypes.string.isRequired
  },

  render () {
    var radiantStrRows = mapHeroes(stubData.radiantStr, this);
    var direStrRows = mapHeroes(stubData.direStr, this);
    var radiantAgiRows = mapHeroes(stubData.radiantAgi, this);
    var direAgiRows = mapHeroes(stubData.direAgi, this);
    var radiantIntRows = mapHeroes(stubData.radiantInt, this);
    var direIntRows = mapHeroes(stubData.direInt, this);
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