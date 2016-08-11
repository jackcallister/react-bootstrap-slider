var React = require('react'),
    jQuery = require('jquery'),
    BootstrapSlider = require('bootstrap-slider');

var Slider = React.createClass({

  propTypes: {
    id: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
    toolTip: React.PropTypes.oneOf(['show', 'hide', 'always']),
    onSlide: React.PropTypes.func,
    inputClass: React.PropTypes.string,
    inputId: React.PropTypes.string,
    inputName: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    precision: React.PropTypes.number,
    orientation: React.PropTypes.oneOf(['horizontal', 'vertical']),
    range: React.PropTypes.bool,
    selection: React.PropTypes.oneOf(['before', 'after', 'none']),
    tooltipSplit: React.PropTypes.bool,
    handle: React.PropTypes.oneOf(['round', 'square', 'triangle', 'custom']),
    reversed: React.PropTypes.bool,
    formatter: React.PropTypes.func,
    naturalArrowKeys: React.PropTypes.bool,
    ticks: React.PropTypes.array,
    ticksPositions: React.PropTypes.array,
    ticksLabels: React.PropTypes.array,
    ticksSnapBounds: React.PropTypes.number,
    scale: React.PropTypes.oneOf(['linear', 'logarithmic']),
    focus: React.PropTypes.bool,
    labelledby: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),
    tooltipPosition: function(props, propName, componentName) {
      if (props[propName] === null) return;
      if (props['orientation'] === 'horizontal') {
        if (props[propName] !== 'top' && props[propName] !== 'bottom') {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      } else {
        if (props[propName] !== 'left' && props[propName] !== 'right') {
          return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
      }
    }
  },

    getDefaultProps: function() {
      return {
        id:                 '',
        min:                0,
        max:                10,
        step:               1,
        value:              5,
        toolTip:            'show',
        enabled:            true,
        precision:          0,
        orientation:        'horizontal',
        range:              false,
        selection:          'before',
        tooltipSplit:       false,
        handle:             'round',
        reversed:           false,
        formatter:          function (value) {return value;},
        naturalArrowKeys:   false,
        ticks:              [],
        ticksPositions:     [],
        ticksLabels:        [],
        ticksSnapBounds:    0,
        scale:              'linear',
        focus:              false,
        labelledby:         null,
        tooltipPosition:    null,
        onSlide:            function () {}
      };
    },

  componentWillUpdate: function(nextProps, nextState) {
    nextState.slider.setValue(nextProps.value);
  },

  componentDidMount: function() {
    var options = {
      id:                 this.props.id,
      min:                this.props.min,
      max:                this.props.max,
      step:               this.props.step,
      value:              this.props.value,
      tooltip:            this.props.toolTip,
      enabled:            this.props.enabled,
      precision:          this.props.precision,
      orientation:        this.props.orientation,
      range:              this.props.range,
      selection:          this.props.selection,
      tooltip_split:      this.props.tooltipSplit,
      handle:             this.props.handle,
      reversed:           this.props.reversed,
      formatter:          this.props.formatter,
      natural_arrow_keys: this.props.naturalArrowKeys,
      ticks:              this.props.ticks,
      ticks_positions:    this.props.ticksPositions,
      ticks_labels:       this.props.ticksLabels,
      ticks_snap_bounds:  this.props.ticksSnapBounds,
      scale:              this.props.scale,
      focus:              this.props.focus,
      labelledby:         this.props.labelledby,
      tooltip_position:   this.props.tooltipPosition
    };

    var slider = new BootstrapSlider(React.findDOMNode(this.refs.slider), options);

    slider.on('slide', function(event) {
      this.props.onSlide(event);
      this.state.slider.setValue(event);
    }.bind(this));

    slider.on('slideStop', function(event) {
      this.props.onSlide(event);
      this.state.slider.setValue(event);
    }.bind(this));

    this.setState({
      slider: slider
    });
  },

  render: function() {
    return (
      <input ref='slider' className={this.props.inputClass} name={this.props.inputName} id={this.props.inputId} />
    );
  }
});

module.exports = Slider;
