var React = require('react');
    jQuery = require('jquery'),
    BootstapSlider = require('bootstrap-slider');

var Slider = React.createClass({

  propTypes: {
    id: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    initialValue: React.PropTypes.number,
    toolTip: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      min: 0,
      max: 100,
      step: 1,
      initialValue: 50,
      toolTip: false
    };
  },

  componentDidMount: function() {
    var toolTip = this.props.toolTip ? 'show' : 'hide';

    var slider = new BootstapSlider(this.getDOMNode(), {
      id: this.props.id,
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      value: this.props.initialValue,
      tooltip: toolTip
    });

    this.setState({
      slider: slider
    });
  },

  render: function() {
    return (
      <div />
    );
  }
});

module.exports = Slider;
