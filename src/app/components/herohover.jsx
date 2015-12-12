const React = require('react');

const HeroHover = React.createClass({
  propTypes: {
    heroMouseOver: React.PropTypes.string.isRequired,
  },
  render () {
    return (
      <div className='heroHoverWrapper'>
        <h2 className='heroHover'>{this.props.heroMouseOver}</h2>
      </div>
    )
  },
});

module.exports = HeroHover;