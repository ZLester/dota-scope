var React = require('react');

var HeroHover = React.createClass({
  render () {
    return (
      <div className='heroHoverWrapper'>
        <h3 className='heroHover'>{this.props.heroMouseOver}</h3>
      </div>
    )
  }
});

module.exports = HeroHover;