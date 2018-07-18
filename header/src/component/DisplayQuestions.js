import React, { Component } from 'react';
import CheckboxQuestionList from './CheckboxQuestionList'
import RadioButtonQuestionList from './RadionButtonQuestionList'
import TextAreaQuestionList from './TextAreaQuestionList'
import { Button } from 'reactstrap';

class DisplayQuestions extends Component {
  handleSubmit(event) {
    alert(RadioButtonQuestionList.state.checkedRadioName)
    event.preventDefault();
 }

    render() {
      var json = JSON.parse(this.props.data);
      var arr = [];
      Object.keys(json).forEach(function(key) {
        arr.push(json[key]);
      });
     

  return (
    arr.map((innerArray,i) => { 
    if (innerArray.QuestionType == "chkbox") {
        return (
          <div>
          <div className="col-md-12 row">{innerArray.question}</div>
           <CheckboxQuestionList key={innerArray.questionid} label={innerArray.question} value={innerArray.options} questionid={innerArray.questionid} />  
          </div>
        );
     }
    else if (innerArray.QuestionType == "radio") {
    {
      return (
        <div>
        <div className="col-md-12 row">{innerArray.question}</div>
         <RadioButtonQuestionList key={innerArray.questionid} label={innerArray.question} value={innerArray.options} questionid={innerArray.questionid} />  
        </div>
      );
    }
    }
    else
      {
        return (
          <div>
          <div className="col-md-12 row">{innerArray.question}</div>
           <TextAreaQuestionList key={innerArray.questionid} label={innerArray.question} value={innerArray.options} questionid={innerArray.questionid} />  
          </div>
        );
      }  }
  )
)

 
}
}
export default DisplayQuestions;