var React = require("react");

// setInterval(tick, 1000);
function Heading(props) {
    return (
    <div>
        <h1>Hello, {props.text}</h1>
    </div>
    );        
}

function DateTime(props) {
    return (
    <div>
        <h2>Current time in {props.country} is {props.time.toLocaleTimeString("indian", {timeZone: props.timeZone})}.</h2>
    </div>
    );        
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTime: new Date(),
            updateCounter: 0
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState((prevState, props) => {
            return {
                dateTime: new Date(),
                updateCounter: prevState.updateCounter+1
            }
        });
    }

    render() {
      return <div>
          <Heading text={this.props.name} time={this.state}></Heading>
          <DateTime time={this.state.dateTime} country="India" timeZone="Asia/Kolkata"></DateTime>
          <DateTime time={this.state.dateTime} country="Boston-USA" timeZone="America/New_York"></DateTime>
          {
              this.state.updateCounter > 10 ? <h3>Updated more than 10 times</h3> : <h3>Updated {this.state.updateCounter} times</h3>
          }
      </div> 
    }
  }

module.exports = App;
