const React = require('react');
const mapHeroes = require('./utils/mapheroes.jsx');
const heroNames = require('./utils/heronames.js');

const HeroGrid = React.createClass({
  propTypes: {
    handleHeroMouseEnter: React.PropTypes.func.isRequired,
    handleHeroMouseLeave: React.PropTypes.func.isRequired,
    handleHeroClick: React.PropTypes.func.isRequired,
    selectorStates: React.PropTypes.object.isRequired,
    hoverState: React.PropTypes.string.isRequired,
  },

  render () {
    if (this.props.displayGrid) {
      let radiantStrRows = mapHeroes.generateSelectGrid(heroNames.radiantStr, this);
      let direStrRows = mapHeroes.generateSelectGrid(heroNames.direStr, this);
      let radiantAgiRows = mapHeroes.generateSelectGrid(heroNames.radiantAgi, this);
      let direAgiRows = mapHeroes.generateSelectGrid(heroNames.direAgi, this);
      let radiantIntRows = mapHeroes.generateSelectGrid(heroNames.radiantInt, this);
      let direIntRows = mapHeroes.generateSelectGrid(heroNames.direInt, this);
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
    } else {
      let greatCounters = mapHeroes.generateResultsGrid(this.props.counterStates.greatCounters, this);
      let counters = mapHeroes.generateResultsGrid(this.props.counterStates.counters, this);
      let avoid = mapHeroes.generateResultsGrid(this.props.counterStates.avoid, this);
      return (
        <div className='heroGridWrapper'>
          <div className='strHeroes'>
            <h3 className='strHeader'>Great Counters</h3>
            <table className='radiantStrHeroes'>
              <tbody>{greatCounters}</tbody>
            </table>
          </div>
          <div className='agiHeroes'>
            <h3 className='agiHeader'>Good Counters</h3>
            <table className='radiantAgiHeroes'>
              <tbody>{counters}</tbody>
            </table>
          </div>
          <div className='intHeroes'>
            <h3 className='intHeader'>Avoid</h3>
            <table className='radiantIntHeroes'>
              <tbody>{avoid}</tbody>
            </table>
          </div>
        </div>
      );
    }
  },
});

module.exports = HeroGrid;