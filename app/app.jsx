var React = require('react');
var ReactDOM = require('react-dom');
var Title = require('./title.jsx');
var HeroHover = require('./herohover.jsx');
var HeroGrid = require('./herogrid.jsx');
var HeroSelector = require('./heroselector.jsx');

var App = React.createClass({
  getInitialState () {
    return ({
      heroMouseOver: 'Select a Hero',
      selectorStates: {
        slotZero: '',
        slotOne: '',
        slotTwo: '', 
        slotThree: '', 
        slotFour: ''
      }
    })
  },
  handleHeroClick (hero) {
    for (var slotI in this.state.selectorStates) {
      if (this.state.selectorStates[slotI] === hero) {
        return;
      }
    }
    for (var slotJ in this.state.selectorStates) {
      if (this.state.selectorStates[slotJ] === '') {
        var newStates = this.state.selectorStates;
        newStates[slotJ] = hero;
        this.setState({selectorStates: newStates});
        return;
      }
    }
  },
  handleHeroMouseEnter (hero) {
    this.setState({heroMouseOver: hero})
  },
  handleHeroMouseLeave () {
    this.setState({heroMouseOver: 'Select a Hero'})
  },
  handleSlotClick (slot) {
    var newStates = this.state.selectorStates;
    newStates[slot] = '';
    this.setState({selectorStates: newStates});
  },
  handleClearClick () {
    var newStates = {
      slotZero: '',
      slotOne: '',
      slotTwo: '', 
      slotThree: '', 
      slotFour: ''
    }
    this.setState({selectorStates: newStates});
  },
  render () {
    return (
      <div>
        <Title />
        <HeroHover heroMouseOver={this.state.heroMouseOver} />
        <HeroSelector 
          handleSlotClick={this.handleSlotClick}
          handleClearClick={this.handleClearClick}
          slotZero={this.state.selectorStates.slotZero} 
          slotOne={this.state.selectorStates.slotOne} 
          slotTwo={this.state.selectorStates.slotTwo} 
          slotThree={this.state.selectorStates.slotThree}
          slotFour={this.state.selectorStates.slotFour} />
        <HeroGrid 
          handleHeroMouseEnter={this.handleHeroMouseEnter}
          handleHeroMouseLeave={this.handleHeroMouseLeave}
          handleHeroClick={this.handleHeroClick} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('appWrapper'));