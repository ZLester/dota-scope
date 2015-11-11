var React = require('react');
var cx = require('classnames');
var generateSlotClasses = require('./utils/generateSlotClasses.js');

var HeroSelector = React.createClass({
  propTypes: {
    slotZero: React.PropTypes.string.isRequired,
    slotOne: React.PropTypes.string.isRequired,
    slotTwo: React.PropTypes.string.isRequired,
    slotThree: React.PropTypes.string.isRequired,
    slotFour: React.PropTypes.string.isRequired,
    buttonStates: React.PropTypes.object.isRequired
  },
  render () {
    var slotZeroClasses = generateSlotClasses('slotZero', this);
    var slotOneClasses = generateSlotClasses('slotOne', this);
    var slotTwoClasses = generateSlotClasses('slotTwo', this);
    var slotThreeClasses = generateSlotClasses('slotThree', this);
    var slotFourClasses = generateSlotClasses('slotFour', this);
    
    // Refactor
    // var slotZeroClassNames = {
    //   'heroPortraitSelectorLarge': true,
    // }
    // slotZeroClassNames[this.props.slotZero.hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotZero.hero !== '';
    // var slotZeroClasses = cx(slotZeroClassNames);
    // var slotOneClassNames = {
    //   'heroPortraitSelectorLarge': true,
    // }
    // slotOneClassNames[this.props.slotOne.hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotOne.hero !== '';
    // var slotOneClasses = cx(slotOneClassNames);
    // var slotTwoClassNames = {
    //   'heroPortraitSelectorLarge': true,
    // }
    // slotTwoClassNames[this.props.slotTwo.hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotTwo.hero !== '';
    // var slotTwoClasses = cx(slotTwoClassNames);
    // var slotThreeClassNames = {
    //   'heroPortraitSelectorLarge': true,
    // }
    // slotThreeClassNames[this.props.slotThree.hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotThree.hero !== '';
    // var slotThreeClasses = cx(slotThreeClassNames);
    // var slotFourClassNames = {
    //   'heroPortraitSelectorLarge': true,
    // }
    // slotFourClassNames[this.props.slotFour.hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotFour.hero !== '';
    // var slotFourClasses = cx(slotFourClassNames);
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
          <div className='submitHeroes' onMouseEnter={this.props.handleButtonMouseEnter.bind(null, 'submit')} onMouseLeave={this.props.handleButtonMouseLeave.bind(null, 'submit')}><span className="submitHeroesLabel">Submit</span></div>
          <div className='clearHeroes' onMouseEnter={this.props.handleButtonMouseEnter.bind(null, 'clear')} onMouseLeave={this.props.handleButtonMouseLeave.bind(null, 'clear')} onClick={this.props.handleClearClick}><span className="clearHeroesLabel">Clear</span></div>
        </div>
      </div>
    )
  }
});

module.exports = HeroSelector;