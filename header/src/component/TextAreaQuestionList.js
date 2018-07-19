import React, { Component } from 'react';
import { Input } from 'reactstrap';

class TextAreaQuestionList extends Component {
    
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
            <div className="row">
            <div className="col-lg-10">
            <Input type="textarea" name="text" id="exampleText" />
                {/* <textarea>
                    Hello there, this is some text in a text area
                </textarea> */}
            </div>
          </div>
          );
    }

}
export default TextAreaQuestionList;