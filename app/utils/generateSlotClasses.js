var cx = require('classnames');

var generateSlotClasses = function (slot, context) {
  var classNames = {
    'heroPortraitSelectorLarge': true,
  }
  classNames[context.props[slot].hero.toLowerCase().replace(/[^a-z]+/g, '') + 'Large'] = context.props[slot].hero !== '';
  return cx(classNames);
}

module.exports = generateSlotClasses;


   
    