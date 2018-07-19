import React, { Component } from 'react';
import CheckboxQuestionList from './CheckboxQuestionList'
import RadioButtonQuestionList from './RadionButtonQuestionList'
import TextAreaQuestionList from './TextAreaQuestionList'
import { Button } from 'reactstrap';

class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = [];
    this.onRadioUpdate = this.onRadioUpdate.bind(this);
    this.onCheckBoxUpdate = this.onCheckBoxUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
}

  handleSubmit(event) {
    debugger;
    alert(this.state.learnerID + ' ID:' + this.state.questionid)
    event.preventDefault();
 }

 onRadioUpdate = (val,questionid) => {
  this.state.splice(questionid, 1);
  var arr = []
  arr.push(val)
  this.state.push({answer: arr,questionid:questionid});
};

onCheckBoxUpdate = (val,questionid,isChecked) => {
    var arr = []
    arr.push(val)
  //this.state.push({answer: val,questionid:questionid});
  var isDone=false;
  var isQuestionFound=false;
  this.state.map( (statevalue) => {
  if(statevalue.questionid === questionid && statevalue.answer === val && !isChecked)
  {
    debugger;
    this.state.splice(questionid,[1,0].concat(val));
    isDone=true;
    isQuestionFound=true;
  }
  else if(statevalue.questionid === questionid)
  {
    isQuestionFound=true;
  }

  if(!isDone && isQuestionFound){
    debugger;
    statevalue.answer.push(val);
  }

  })

  if(!isDone && !isQuestionFound){
    this.state.push({answer: arr,questionid:questionid});
  }

 

};


  render() {
      var json = JSON.parse(this.props.data);
      var arr = [];
      Object.keys(json).forEach(function(key) {
        arr.push(json[key]);
      });
     

      let newArr =arr.map((innerArray,i) => { 
        if (innerArray.type == "chkbox") {
            return (
              <div>
              <div className="col-md-12 row" style={{fontSize:'20px',fontWeight:'bold',backgroundColor:'lightgray'}}>{innerArray.question}</div>
               <CheckboxQuestionList label={innerArray.question} value={innerArray.options} questionid={innerArray._id} onCheckBoxUpdate={this.onCheckBoxUpdate} />  
              </div>
            );
         }
        else if (innerArray.type == "radio") {
        {
          return (
            <div>
            <div className="col-md-12 row" style={{fontSize:'20px',fontWeight:'bold',backgroundColor:'lightgray'}}>{innerArray.question}</div>
             <RadioButtonQuestionList label={innerArray.question} value={innerArray.options} questionid={innerArray._id} onRadioUpdate={this.onRadioUpdate} />  
            </div>
          );
        }
        }
        else
          {
            return (
              <div>
              <div className="col-md-12 row" style={{fontSize:'20px',fontWeight:'bold',backgroundColor:'lightgray'}}>{innerArray.question}</div>
               <TextAreaQuestionList label={innerArray.question} value={innerArray.options} questionid={innerArray._id} />  
              </div>
            );
          }  }
      )

  return (
    // <form onSubmit={this.handleSubmit}>
    <div>
    {newArr}
    <div className="col-md-4">
        <Button color="success" type="submit" onClick={this.handleSubmit}>Register</Button>
    </div>
    </div>
    // </form>
)

 
}
}
export default DisplayQuestions;