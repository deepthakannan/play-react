var React = require("react");
var Heading = require("./Heading");
var TimeZones = require("./TimeZones");
var DateTime = require("./DateTime");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTime: new Date(),
            updateCounter: 0,
            timeZone: ""
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

    timeZoneClicked(timeZone) {
        this.setState((prevState, props) => {
            return {
                timeZone: timeZone,
                updateCounter: 0
            }
        });
    }

    render() {
      return <div>
          <Heading text={this.props.name} time={this.state}></Heading>
          <DateTime time={this.state.dateTime} country={this.state.timeZone} timeZone={this.state.timeZone}></DateTime>
          <TimeZones timeZoneClicked={(timeZone) => this.timeZoneClicked(timeZone)}></TimeZones>
      </div> 
    }
  }

module.exports = App;
