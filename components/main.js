var React = require('react'),
    Slider = require('./slider');

var App = React.createClass({

  didChange: function(event) {
    console.log(event.value);
  },

  render: function() {
    return (
      <Slider id='jack' min={0} max={10} step={1} initialValue={5} toolTip={false} onSlide={this.didChange} />
    );
  }
});

React.render(<App />, document.body);
