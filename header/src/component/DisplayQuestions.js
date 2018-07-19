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
    var alertmsg=''
    this.state.map( (statevalue) => {
      alertmsg += statevalue.questionid + ' answer: ' + statevalue.answer + '\n'
    })

    alert(alertmsg)
    event.preventDefault();
 }

 onRadioUpdate = (val,questionid) => {
  this.state.map( (statevalue,idx) => {
    if(statevalue.questionid === questionid)
    {
      this.state.splice(idx,1);
    }
  });
  var arr = []  
  arr.push(val)
  this.state.push({answer: arr,questionid:questionid});
};

onCheckBoxUpdate = (val,questionid,isChecked) => {
    var arr = []
    arr.push(val)
  var isDone=false;
  var isQuestionFound=false;
  var tempArr=  []
  this.state.map( (statevalue) => {
  if(statevalue.questionid === questionid)
  {
    statevalue.answer.map((ans,idx)=>{
      if(ans === val && !isChecked)
      {
        statevalue.answer.splice(idx,1);
        isDone=true;
      }
    })
    tempArr.splice(val);
    isQuestionFound=true;
  }

  if(!isDone && isQuestionFound){
    tempArr.push(val)
  }
});
  
  if(!isDone && !isQuestionFound){
    this.state.push({answer: arr,questionid:questionid});
  }else if(tempArr.length > 0){
    this.state.map( (statevalue) => {
      if(statevalue.questionid === questionid)
      {
        statevalue.answer.push(val);
      }
    })
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