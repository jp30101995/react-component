import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class RadionButtonQuestionList extends Component {
    
    constructor(props) {
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
        this.setState({
          checkedRadioName: target.value
        });

        this.props.onRadioUpdate(target.value,this.questionid);
      }


    render() {
        return (
        this.items.map((user, idx) => (
            <FormGroup check>
            <Label check>
              <Input type="radio" value={user} onChange={this.handleInputChange} checked={this.state.checkedRadioName === user} />{' '}
                {user}
            </Label>
          </FormGroup>
          )));
    }

}
export default RadionButtonQuestionList;