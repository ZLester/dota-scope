var React = require('react');

var HeroHover = React.createClass({
  render () {
    return (
      <div className='heroHoverWrapper'>
        <h2 className='heroHover'>{this.props.heroMouseOver}</h2>
      </div>
    )
  }
});

module.exports = HeroHover;