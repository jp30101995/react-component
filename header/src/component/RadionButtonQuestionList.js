import React, { Component } from 'react';

class RadionButtonQuestionList extends Component {
    
    constructor(props) {
        debugger;
        super(props);
        this.state = {isGoing: true};
        this.questionid=props.questionid

        this.state.checkedRadioName = '';

        this.items = props.value;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        debugger;
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          checkedRadioName: value
        });
      }


    render() {
        return (
        this.items.map((user, idx) => (
            <div className="row">
              <div className="col-sm-1">
              <input type="radio"value={user.V} onChange={this.handleInputChange} checked={this.state.checkedRadioName === user.V}/>
              </div>
              <div className="col-sm-4">
              <label htmlFor={user.V} value={user.V}> Female</label>
              </div>
            </div>
          )));
    }

}
export default RadionButtonQuestionList;