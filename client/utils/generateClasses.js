var cx = require('classnames');

exports.slot = function (slot, context) {
  var classNames = {
    'heroPortraitSelectorLarge': true,
  }
  classNames[context.props[slot].hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = context.props[slot].hero !== '';
  return cx(classNames);
}

exports.button = function (button, context) {
  var classNames = {};
  classNames[button] = true;
  classNames[button + 'Disabled'] = context.props.buttonStates[button].enabled === false;
  classNames[button + 'Hover'] = context.props.buttonStates[button].hover === true &&  context.props.buttonStates[button].enabled === true;
  return cx(classNames);
}

exports.hero = function(hero, context) {
  var checkHeroHover = function (hero, context) {
    if (context.props.hoverState === hero) {
      return true;
    }
    return false;
  };

  var checkHeroSelected = function (hero, context) {
    var result = false;
    for (var slot in context.props.selectorStates) {
      if (context.props.selectorStates[slot].hero === hero) {
        result = true;
      }
    }
    return result;
  };

  var classNames = {
    'heroPortrait': true,
    'heroPortraitHover': checkHeroHover(hero, context),
    'heroPortraitSelected': checkHeroSelected(hero, context)
  };
  classNames[hero.toLowerCase().replace(/[^a-z]+/g, '')] = true;

  return cx(classNames);
}

exports.result = function(hero, context) {
  var checkHeroHover = function (hero, context) {
    if (context.props.hoverState === hero) {
      return true;
    }
    return false;
  };
  var classNames = {
    'heroPortrait': true,
    'heroPortraitResultHover': checkHeroHover(hero, context)
  };
  classNames[hero.toLowerCase().replace(/[^a-z]+/g, '')] = true;

  return cx(classNames);
}
        


   
    