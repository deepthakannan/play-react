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
        <h2>Current time in {props.country} is {props.time.toLocaleTimeString("indian", {timeZone: props.timeZone ? props.timeZone : "America/New_York" })}.</h2>
    </div>
    );        
}

class TimeZones extends React.Component {
    constructor(props) {
        super(props);
        this.timeZones = ["Asia/Kolkata", "America/New_York", "Asia/Shanghai" ];
    }
        
    timeZoneClicked = (timeZone) => {
        this.props.timeZoneClicked(timeZone);
    }
    
    render() {
        var timeZoneButtons = [];
        this.timeZones.forEach((timeZone) => {
            timeZoneButtons.push(<button key={timeZone} onClick={ () => this.timeZoneClicked(timeZone) }>{timeZone}</button>);
        })

        return (
            <div>
                {timeZoneButtons}
            </div>
        )
    }    
}
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
