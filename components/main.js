var React = require('react'),
    Slider = require('./slider');

var App = React.createClass({

  getInitialState: function() {
    return {
      value: 5
    };
  },

  didChange: function(event) {
    this.setState({
      value: event.value
    });
  },

  render: function() {
    return (
      <Slider id='jack' min={0} max={10} step={1} value={this.state.value} toolTip={false} onSlide={this.didChange} />
    );
  }
});

React.render(<App />, document.body);
