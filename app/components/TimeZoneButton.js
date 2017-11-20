var React = require("react");

module.exports = function TimeZoneButton(props) {
    
        return (
            <button onClick={ () => props.onBtnClick(props.timeZone) }>{props.timeZone}</button>
        )
}