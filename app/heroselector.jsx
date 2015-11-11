var React = require('react');
var cx = require('classnames');

var HeroSelector = React.createClass({
  propTypes: {
    slotZero: React.PropTypes.string.isRequired,
    slotOne: React.PropTypes.string.isRequired,
    slotTwo: React.PropTypes.string.isRequired,
    slotThree: React.PropTypes.string.isRequired,
    slotFour: React.PropTypes.string.isRequired
  },
  render () {
    var slotZeroClassNames = {
      'heroPortraitSelectorLarge': true,
    }
    slotZeroClassNames[this.props.slotZero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] =  this.props.slotZero !== '';
    var slotZeroClasses = cx(slotZeroClassNames);
    var slotOneClassNames = {
      'heroPortraitSelectorLarge': true,
    }
    slotOneClassNames[this.props.slotOne.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] =  this.props.slotOne !== '';
    var slotOneClasses = cx(slotOneClassNames);
    var slotTwoClassNames = {
      'heroPortraitSelectorLarge': true,
    }
    slotTwoClassNames[this.props.slotTwo.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotTwo !== '';
    var slotTwoClasses = cx(slotTwoClassNames);
    var slotThreeClassNames = {
      'heroPortraitSelectorLarge': true,
    }
    slotThreeClassNames[this.props.slotThree.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotThree !== '';
    var slotThreeClasses = cx(slotThreeClassNames);
    var slotFourClassNames = {
      'heroPortraitSelectorLarge': true,
    }
    slotFourClassNames[this.props.slotFour.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = this.props.slotFour !== '';
    var slotFourClasses = cx(slotFourClassNames);
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
          <div className='submitHeroes'><span className="submitHeroesLabel">Submit</span></div>
          <div className='clearHeroes' onClick={this.props.handleClearClick}><span className="clearHeroesLabel">Clear</span></div>
        </div>
      </div>
    )
  }
});

module.exports = HeroSelector;