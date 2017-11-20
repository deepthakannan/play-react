var React = require("react");

// setInterval(tick, 1000);
module.exports = function Heading(props) {
    return (
    <div>
        <h1>Hello, {props.text}</h1>
    </div>
    );        
}