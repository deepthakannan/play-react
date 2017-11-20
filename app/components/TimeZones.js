var React = require("react");
var TimeZoneButton = require("./TimeZoneButton");

module.exports = class TimeZones extends React.Component {
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
            timeZoneButtons.push(<TimeZoneButton key={timeZone} timeZone={timeZone} onBtnClick={(timeZone) => this.timeZoneClicked(timeZone)}></TimeZoneButton>);
        })

        return (
            <div>
                {timeZoneButtons}
            </div>
        )
    }    
}