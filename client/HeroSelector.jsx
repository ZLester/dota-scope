var React = require('react');
var cx = require('classnames');
var generateClasses = require('./utils/generateClasses.js');

var HeroSelector = React.createClass({
  propTypes: {
    slotZero: React.PropTypes.string.isRequired,
    slotOne: React.PropTypes.string.isRequired,
    slotTwo: React.PropTypes.string.isRequired,
    slotThree: React.PropTypes.string.isRequired,
    slotFour: React.PropTypes.string.isRequired,
    buttonStates: React.PropTypes.object.isRequired,
    handleButtonMouseEnter: React.PropTypes.func.isRequired,
    handleButtonMouseLeave: React.PropTypes.func.isRequired
  },
  render () {
    var slotZeroClasses = generateClasses.slot('slotZero', this);
    var slotOneClasses = generateClasses.slot('slotOne', this);
    var slotTwoClasses = generateClasses.slot('slotTwo', this);
    var slotThreeClasses = generateClasses.slot('slotThree', this);
    var slotFourClasses = generateClasses.slot('slotFour', this);
    var submitHeroesClasses = generateClasses.button('submitHeroes', this);
    var clearHeroesClasses = generateClasses.button('clearHeroes', this);
    return (
      <div className='heroSelectorWrapper'>
        <table className='heroSelector'>
          <tbody>
            <tr>
              <td className={slotZeroClasses} onClick={this.props.handleSlotClick.bind(null, 'slotZero')}></td>
              <td className={slotOneClasses} onClick={this.props.handleSlotClick.bind(null, 'slotOne')}></td>
              <td className={slotTwoClasses} onClick={this.props.handleSlotClick.bind(null, 'slotTwo')}></td>
              <td className={slotThreeClasses} onClick={this.props.handleSlotClick.bind(null, 'slotThree')}></td>
              <td className={slotFourClasses} onClick={this.props.handleSlotClick.bind(null, 'slotFour')}></td>
            </tr>
          </tbody>
        </table>
        <div className='buttonWrapper'>
          <div className={submitHeroesClasses} onMouseEnter={this.props.handleButtonMouseEnter.bind(null, 'submitHeroes')} onMouseLeave={this.props.handleButtonMouseLeave.bind(null, 'submitHeroes')}><span className="submitHeroesLabel">Submit</span></div>
          <div className={clearHeroesClasses}  onMouseEnter={this.props.handleButtonMouseEnter.bind(null, 'clearHeroes')} onMouseLeave={this.props.handleButtonMouseLeave.bind(null, 'clearHeroes')} onClick={this.props.handleClearClick}><span className="clearHeroesLabel">Clear</span></div>
        </div>
      </div>
    )
  }
});

module.exports = HeroSelector;