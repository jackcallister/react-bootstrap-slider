var React = require('react'),
    Slider = require('./slider');

var App = React.createClass({

  render: function() {
    return (
      <Slider />
    );
  }
});

React.render(<App />, document.body);
