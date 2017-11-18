var Hello = React.createClass({
  render: function() {
    return React.createElement("div", null, `Hello ${this.props.toWhat}`);
  }
});

ReactDOM.render(
  React.createElement(Hello, { toWhat: "World" }, null),
  document.getElementById("root")
);
