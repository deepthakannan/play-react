var React = require("react");

function Heading(props) {
    return <h1>Hello, {props.text}</h1>;
}
class App extends React.Component {
    render() {
      return <Heading text={this.props.name}></Heading>;
    }
  }

module.exports = App;