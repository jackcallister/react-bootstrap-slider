var React = require('react'),
    Slider = require('./slider');

var App = React.createClass({

  getInitialState: function() {
    return {
      value: 5
    };
  },

  increment: function(event) {
    this.setState({
      value: this.state.value + 1
    });
  },

  didChange: function(event) {
    this.setState({
      value: event.value
    });
  },

  render: function() {
    return (
      <div>
        <Slider min={0} max={10} step={1} value={this.state.value} toolTip={false} onSlide={this.didChange} />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
});

React.render(<App />, document.body);
