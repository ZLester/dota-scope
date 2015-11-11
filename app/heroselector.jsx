var React = require('react');

var HeroSelector = React.createClass({
  propTypes: {
    slotZero: React.PropTypes.string.isRequired,
    slotOne: React.PropTypes.string.isRequired,
    slotTwo: React.PropTypes.string.isRequired,
    slotThree: React.PropTypes.string.isRequired,
    slotFour: React.PropTypes.string.isRequired
  },
  render () {
    return (
      <div className='heroSelectorWrapper'>
        <table className='heroSelector'>
          <tbody>
            <tr>
              <td className='heroPortraitSelectorLarge' onClick={this.props.handleSlotClick.bind(null, 'slotZero')}>{this.props.slotZero}</td>
              <td className='heroPortraitSelectorLarge' onClick={this.props.handleSlotClick.bind(null, 'slotOne')}>{this.props.slotOne}</td>
              <td className='heroPortraitSelectorLarge' onClick={this.props.handleSlotClick.bind(null, 'slotTwo')}>{this.props.slotTwo}</td>
              <td className='heroPortraitSelectorLarge' onClick={this.props.handleSlotClick.bind(null, 'slotThree')}>{this.props.slotThree}</td>
              <td className='heroPortraitSelectorLarge' onClick={this.props.handleSlotClick.bind(null, 'slotFour')}>{this.props.slotFour}</td>
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