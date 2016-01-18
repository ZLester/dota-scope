const React = require('react');
const Title = require('./title.jsx');
const HeroHover = require('./herohover.jsx');
const HeroGrid = require('./herogrid.jsx');
const HeroSelector = require('./heroselector.jsx');
const $ = require('jquery');

const Main = React.createClass({
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
        slotFour: {hero: '', hover: false},
      },
      // Initial/Default States for Submit/Clear Buttons
      buttonStates: {
        submitHeroes: {hover: false},
        clearHeroes: {hover: false},
      },
      displayGrid: true,
      // Initial/Default States for Hero Counters
      counterStates: {
        greatCounters: [],
        counters: [],
        avoid: [],
      },
    });
  },
  handleHeroClick (hero) {
    let newStates = Object.assign({}, this.state.selectorStates);
    // Check if hero is already in one of the slots
    for (let slotI in this.state.selectorStates) {
      // If so, remove, generate new states and set
      if (this.state.selectorStates[slotI].hero === hero) {
        newStates[slotI].hero = '';
        this.setState({selectorStates: newStates});
        return;
      }
    }
    // If not, iterate over slots again
    for (let slotJ in this.state.selectorStates) {
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
    if (this.state.displayGrid) {
      let newStates = Object.assign({}, this.state.selectorStates);
      newStates[slot].hero = '';
      this.setState({selectorStates: newStates});
    }
  },
  // MouseEnter Listener for HeroGrid 
  handleSlotMouseEnter (slot) {
    if (this.state.selectorStates[slot].hero !== '') {
      let newStatesSelector = this.state.selectorStates;
      let newStatesHeroMouseOver = this.state.selectorStates[slot].hero;
      newStatesSelector[slot].hover = true;
      this.setState({selectorStates: newStatesSelector, heroMouseOver: newStatesHeroMouseOver});
    }
  },
  // MouseLeave Listener for HeroGrid 
  handleSlotMouseLeave (slot) {
    let newStates = this.state.selectorStates;
    newStates[slot].hover = false;
    this.setState({selectorStates: newStates, heroMouseOver: 'Select a Hero'});
  },
  // Temporary, refactor as state
  submitIsEnabled () {
    for (let state in this.state.selectorStates) {
      if (this.state.selectorStates[state].hero !== '') {
        return true;
      }
    }
    return false;
  },
  // Temporary, refactor as state
  clearIsEnabled () {
    if (this.state.displayGrid && this.clearIsEnabled) {
      for (let state in this.state.selectorStates) {
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
      let url = 'api/match?';
      let queryUrl = Object.keys(this.state.selectorStates).reduce((urlStr, state) => {
        let heroStr = this.state.selectorStates[state].hero || 'empty';
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
      let newStates = {
        slotZero: {hero: '', hover: false},
        slotOne: {hero: '', hover: false},
        slotTwo: {hero: '', hover: false},
        slotThree: {hero: '', hover: false},
        slotFour: {hero: '', hover: false},
      }
      this.setState({selectorStates: newStates});
    }
  },
  // Hover Listener for Submit & Clear Buttons
  handleButtonMouseEnter(button) {
    let newStates = Object.assign({}, this.state.buttonStates);
    newStates[button].hover = true;
    this.setState({buttonStates: newStates});
  },
  handleButtonMouseLeave(button) {
    let newStates = Object.assign({}, this.state.buttonStates);
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
  },
});

module.exports = Main;
