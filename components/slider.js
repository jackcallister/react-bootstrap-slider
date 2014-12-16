var React = require('react');
    jQuery = require('jquery'),
    BootstapSlider = require('bootstrap-slider');

var Slider = React.createClass({

  componentDidMount: function() {
    var slider = new BootstapSlider(this.getDOMNode(), {});

    this.setState({
      slider: slider
    });
  },

  render: function() {
    return (
      <div></div>
    );
  }
});

module.exports = Slider;
