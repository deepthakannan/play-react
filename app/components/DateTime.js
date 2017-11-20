var React = require("react");

module.exports = function DateTime(props) {
    return (
    <div>
        <h2>Current time in {props.country} is {props.time.toLocaleTimeString("indian", {timeZone: props.timeZone ? props.timeZone : "America/New_York" })}.</h2>
    </div>
    );        
}