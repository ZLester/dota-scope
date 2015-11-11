var React = require('react');
var ReactDOM = require('react-dom');
var Title = require('./title.jsx');
var HeroHover = require('./herohover.jsx');
var HeroGrid = require('./herogrid.jsx');
var HeroSelector = require('./heroselector.jsx');

var App = React.createClass({
  getInitialState () {
    return ({
      // Initial/Default State for Hero MouseOver Message
      heroMouseOver: 'Select a Hero',
      // Initial/Default State for Selected Hero Portraits
      selectorStates: {
        slotZero: {hero: '', hover: false},
        slotOne: {hero: '', hover: false},
        slotTwo: {hero: '', hover: false},
        slotThree: {hero: '', hover: false},
        slotFour: {hero: '', hover: false}
      },
      // Initial/Default States for Submit/Clear Buttons
      buttonStates: {
        submit: {enabled: false, hover: false},
        clear: {enabled: true, hover: false}
      },
    })
  },
  handleHeroClick (hero) {
    // Mutates here, refactor later
    var newStates = this.state.selectorStates;
    // Check if hero is already in one of the slots
    for (var slotI in this.state.selectorStates) {
      // If so, remove, generate new states and set
      if (this.state.selectorStates[slotI].hero === hero) {
        newStates[slotI].hero = '';
        this.setState({selectorStates: newStates});
        return;
      }
    }
    // If not, iterate over slots again
    for (var slotJ in this.state.selectorStates) {
      // Add hero to first empty slot encountered
      if (this.state.selectorStates[slotJ].hero === '') {
        // Generate new state object and set
        newStates[slotJ].hero = hero;
        this.setState({selectorStates: newStates});
        return;
      }
    }
  },
  // MouseEnter Listener for HeroGrid 
  handleHeroMouseEnter (hero) {
    this.setState({heroMouseOver: hero})
  },
  // MouseLeave Listener for HeroGrid 
  handleHeroMouseLeave () {
    this.setState({heroMouseOver: 'Select a Hero'})
  },
  // Click Listener for Selected Hero Portrait
  handleSlotClick (slot) {
    var newStates = this.state.selectorStates;
    newStates[slot].hero = '';
    this.setState({selectorStates: newStates});
  },
  // Click Listener for Clear Button
  handleClearClick () {
    var newStates = {
      slotZero: {hero: '', hover: false},
      slotOne: {hero: '', hover: false},
      slotTwo: {hero: '', hover: false},
      slotThree: {hero: '', hover: false},
      slotFour: {hero: '', hover: false}
    }
    this.setState({selectorStates: newStates});
  },
  handleButtonHover (button) {
    var newStates = {
      submit: {enabled: false, hover: false},
      clear: {enabled: true, hover: false}
    }
    newStates[button].hover = true;
    this.setState({buttonStates: newStates});
  },
  render () {
    return (
      <div>
        <Title />
        <HeroSelector 
          handleSlotClick={this.handleSlotClick}
          handleClearClick={this.handleClearClick}
          slotZero={this.state.selectorStates.slotZero} 
          slotOne={this.state.selectorStates.slotOne} 
          slotTwo={this.state.selectorStates.slotTwo} 
          slotThree={this.state.selectorStates.slotThree}
          slotFour={this.state.selectorStates.slotFour} 
          buttonStates={this.state.buttonStates}/>
        <HeroHover heroMouseOver={this.state.heroMouseOver} />
        <HeroGrid 
          handleHeroMouseEnter={this.handleHeroMouseEnter}
          handleHeroMouseLeave={this.handleHeroMouseLeave}
          handleHeroClick={this.handleHeroClick} 
          selectorStates={this.state.selectorStates}
          hoverState={this.state.heroMouseOver} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('appWrapper'));