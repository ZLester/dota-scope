var React = require('react');

var HeroHover = React.createClass({
  propTypes: {
    heroMouseOver: React.PropTypes.string.isRequired
  },
  render () {
    return (
      <div className='heroHoverWrapper'>
        <h2 className='heroHover'>{this.props.heroMouseOver.toUpperCase()}</h2>
      </div>
    )
  }
});

module.exports = HeroHover;