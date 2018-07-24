import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CheckboxQuestionList extends Component {
    
    constructor(props) {
        
        super(props);
        this.questionid=props.questionid

        this.items = props.value;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      
      const target = event.target;
      this.props.onCheckBoxUpdate(target.value,this.questionid,event.target.checked);
      }


    render() {
        return (
        this.items.map((user, idx) => (
            <FormGroup check>
            <Label check>
              <Input type="checkbox" value={user} onChange={this.handleInputChange} />{' '}
              {user}
            </Label>
          </FormGroup>
          )));
    }

}
export default CheckboxQuestionList;