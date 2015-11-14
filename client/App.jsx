var React = require('react');
var ReactDOM = require('react-dom');
var Title = require('./title.jsx');
var HeroHover = require('./herohover.jsx');
var HeroGrid = require('./herogrid.jsx');
var HeroSelector = require('./heroselector.jsx');
var $ = require('jquery');

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
        submitHeroes: {hover: false},
        clearHeroes: {hover: false}
      },
      displayGrid: true,
      // Initial/Default States for Hero Counters
      counterStates: {
        greatCounters: [],
        counters: [],
        avoid: []
      }
    });
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
    this.setState({heroMouseOver: hero});
  },
  // MouseLeave Listener for HeroGrid 
  handleHeroMouseLeave () {
    this.setState({heroMouseOver: 'Select a Hero'})
  },
  // Click Listener for Selected Hero Portrait
  handleSlotClick (slot) {
    // Mutates here, refactor later
    if (this.state.displayGrid) {
      var newStates = this.state.selectorStates;
      newStates[slot].hero = '';
      this.setState({selectorStates: newStates});
    }
  },
  // MouseEnter Listener for HeroGrid 
  handleSlotMouseEnter (slot) {
    var newStates = this.state.selectorStates;
    newStates[slot].hover = true;
    this.setState({selectorStates: newStates});
  },
  // MouseLeave Listener for HeroGrid 
  handleSlotMouseLeave (slot) {
    var newStates = this.state.selectorStates;
    newStates[slot].hover = false;
    this.setState({selectorStates: newStates});
  },
  // Temporary, refactor as state
  submitIsEnabled () {
    for (var state in this.state.selectorStates) {
      if (this.state.selectorStates[state].hero !== '') {
        return true;
      }
    }
    return false;
  },
  // Temporary, refactor as state
  clearIsEnabled () {
    if (this.state.displayGrid && this.clearIsEnabled) {
      for (var state in this.state.selectorStates) {
        if (this.state.selectorStates[state].hero !== '') {
          return true;
        }
      }
    }
    return false;
  },

  // Click Listener for Submit Button
  handleSubmitClick () {
    if (this.state.displayGrid && this.submitIsEnabled()) {
      var url = 'api/match?';
      var queryUrl = Object.keys(this.state.selectorStates).reduce((urlStr, state) => {
        var heroStr = this.state.selectorStates[state].hero || 'empty';
        urlStr += (state + '=' + heroStr.toLowerCase() + '&');
        return urlStr;
      }, url);

      $.get(queryUrl, result => {
        this.setState({displayGrid: false, counterStates: result});
      })
    } else {
      this.setState({displayGrid: true});
    }

  },
  // Click Listener for Clear Button
  handleClearClick () {
    if (this.clearIsEnabled()) {
      var newStates = {
        slotZero: {hero: '', hover: false},
        slotOne: {hero: '', hover: false},
        slotTwo: {hero: '', hover: false},
        slotThree: {hero: '', hover: false},
        slotFour: {hero: '', hover: false}
      }
      this.setState({selectorStates: newStates});
    }
  },
  // Hover Listener for Submit & Clear Buttons
  handleButtonMouseEnter(button) {
    // Mutates here, refactor later
    var newStates = this.state.buttonStates;
    newStates[button].hover = true;
    this.setState({buttonStates: newStates});
  },
  handleButtonMouseLeave(button) {
    // Mutates here, refactor later
    var newStates = this.state.buttonStates;
    newStates[button].hover = false;
    this.setState({buttonStates: newStates});
  },
  render () {
    return (
      <div>
        <Title />
        <HeroSelector 
          handleSlotClick={this.handleSlotClick}
          handleSubmitClick={this.handleSubmitClick}
          handleClearClick={this.handleClearClick}
          handleButtonMouseEnter={this.handleButtonMouseEnter}
          handleButtonMouseLeave={this.handleButtonMouseLeave}
          handleSlotMouseEnter={this.handleSlotMouseEnter}
          handleSlotMouseLeave={this.handleSlotMouseLeave}
          selectorStates={this.state.selectorStates}
          displayGrid={this.state.displayGrid}
          counterStates={this.state.counterStates}
          buttonStates={this.state.buttonStates} />
        <HeroHover heroMouseOver={this.state.heroMouseOver} />
        <HeroGrid 
          displayGrid={this.state.displayGrid}
          counterStates={this.state.counterStates}
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

module.exports = App;