const cx = require('classnames');
const heroNames = require('./heronames.js');

exports.slot = function (slot, context) {
  let classNames = {
    'heroPortraitSelectorLarge': true,
    'heroPortraitSelectorLargeFilled': context.props.selectorStates[slot].hero !== '',
    'heroPortraitSelectorLargeFilledHover': context.props.selectorStates[slot].hero !== '' && context.props.selectorStates[slot].hover === true,
  };
  classNames[context.props.selectorStates[slot].hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = context.props.selectorStates[slot].hero !== '';
  return cx(classNames);
}

exports.submitButton = function (button, context) {
  let isDisabled = function() {
    for (let state in context.props.selectorStates) {
      if (context.props.selectorStates[state].hero !== '') {
        return false;
      }
    }
    return true;
  }
  let classNames = {};
  classNames[button] = true;
  classNames[button + 'Disabled'] = isDisabled();
  classNames[button + 'Hover'] = !isDisabled() &&  context.props.buttonStates[button].hover === true;
  return cx(classNames);
}

exports.clearButton = function (button, context) {
  let isDisabled = function() {
    if (context.props.displayGrid) {
      for (let state in context.props.selectorStates) {
        if (context.props.selectorStates[state].hero !== '') {
          return false;
        }
      }
    } 
    return true;
  }
  let classNames = {};
  classNames[button] = true;
  classNames[button + 'Disabled'] = isDisabled();
  classNames[button + 'Hover'] = !isDisabled() &&  context.props.buttonStates[button].hover === true;
  return cx(classNames);
}

exports.hero = function(hero, context) {
  let checkHeroHover = function (hero, context) {
    if (context.props.hoverState === hero) {
      return true;
    }
    return false;
  };

  let checkHeroSelected = function (hero, context) {
    let result = false;
    for (let slot in context.props.selectorStates) {
      if (context.props.selectorStates[slot].hero === hero) {
        result = true;
      }
    }
    return result;
  };

  let classNames = {
    'heroPortrait': true,
    'heroPortraitHover': checkHeroHover(hero, context),
    'heroPortraitSelected': checkHeroSelected(hero, context),
  };
  classNames[hero.toLowerCase().replace(/[^a-z]+/g, '')] = true;

  return cx(classNames);
}

exports.result = function(hero, context) {
  let checkHeroHover = function (hero, context) {
    if (context.props.hoverState === heroNames.nameHash[hero]) {
      return true;
    }
    return false;
  };
  let classNames = {
    'heroPortrait': true,
    'heroPortraitResultHover': checkHeroHover(hero, context),
  };
  classNames[hero.toLowerCase().replace(/[^a-z]+/g, '')] = true;

  return cx(classNames);
}
