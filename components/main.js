var React = require('react'),
    Slider = require('./slider');

var App = React.createClass({

  getInitialState: function() {
    return {
      value: 5,
      max : 10
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
        <Slider min={0} max={this.state.max} step={1} value={this.state.value} toolTip={false} onSlide={this.didChange} />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
});

React.render(<App />, document.body);
