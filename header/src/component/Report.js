import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
class Report extends Component {
  debugger;
  constructor(props) {
    super(props);
  }
  debugger;
  render() {
    return (
      <div>
        <ReactSpeedometer
          value={70}
          needleTransitionDuration={4000}
          minValue={0}
          maxValue={100}
          needleTransition="easeElastic"
          currentValueText="Current Value: ${value}"
        />
      </div>
    );
  }
}
export default Report;
