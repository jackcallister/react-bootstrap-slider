var React = require('react'),
    Slider = require('./slider');

var App = React.createClass({

  render: function() {
    return (
      <Slider id='jack' min={0} max={10} step={1} initialValue={5} toolTip={false} />
    );
  }
});

React.render(<App />, document.body);
