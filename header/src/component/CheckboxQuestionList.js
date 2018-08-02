import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class CheckboxQuestionList extends Component {
    
    constructor(props) {
        
        super(props);
        this.questionid=props.questionid
        
        this.state = {selectedAnswer:props.selectedAnswer};

        this.items = props.value;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      
      const target = event.target;
      this.props.onCheckBoxUpdate(target.value,this.questionid,event.target.checked);
      }


    render() {
        return this.items.map((user, idx) => {
            if (this.state.selectedAnswer === "") {
              return (
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" value={user} onChange={this.handleInputChange} />{' '}
                        {user}
                    </Label>
                </FormGroup>
              );
            } else {
                return (
                    <FormGroup check>
                    <Label check>
                      <Input type="checkbox" value={user} onChange={this.handleInputChange} checked={this.state.selectedAnswer.includes(user)} disabled />{' '}
                      {user}
                    </Label>
                  </FormGroup>
                );
            }
          });

        // return (
        // this.items.map((user, idx) => (
        //     <FormGroup check>
        //     <Label check>
        //       <Input type="checkbox" value={user} onChange={this.handleInputChange} checked={this.state.selectedAnswer[idx] === user} />{' '}
        //       {user}
        //     </Label>
        //   </FormGroup>
        //   )));
    }

}
export default CheckboxQuestionList;