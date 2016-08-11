var React = require('react'),
    Slider = require('./slider');

var App = React.createClass({

  getInitialState: function() {
    return {
      value: 5,
      min: 1,
      max : 10,
      step: 2
    };
  },

  increment: function(event) {
    var value = this.state.value;
    if(value >= this.state.max) {
      value = this.state.max - 1;
    }
    this.setState({
      value: value + 1
    });
  },

  didChange: function(event) {
    var value = event.value || event;
    this.setState({
      value: value
    });
  },

  render: function() {
    return (
      <div>
        <Slider onSlide={this.didChange}
                min={this.state.min}
                max={this.state.max}
                step={this.state.step}
                value={this.state.value} />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
});

React.render(<App />, document.body);
