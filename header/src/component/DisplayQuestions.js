import React, { Component } from "react";
import { Button } from "reactstrap";
import  APIService  from "./APIService";
import PostQuestions from "./PostQuestions";
import Report  from "./Report";
//import ReactSpeedometer from "react-d3-speedometer";

class DisplayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      quearr: [],
      isSubmit:false
    };

    this.data=props.data;
   
    
    this.onRadioUpdate = this.onRadioUpdate.bind(this);
    this.onCheckBoxUpdate = this.onCheckBoxUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReportClick = this.handleReportClick.bind(this);
   
  }

  handleSubmit(event) {
    
    this.setState({isSubmit: true});
    event.preventDefault();
  
}
  onRadioUpdate = (val, questionid) => {
    this.state.quearr.map((statevalue, idx) => {
      if (statevalue.questionid === questionid) {
        this.state.splice(idx, 1);
      }
    });
    var arr = [];
    arr.push(val);
    
    this.state.quearr.push({ answer: arr, questionid: questionid });
  };

  onTextAreaUpdate = (val, questionid) => {
    
    this.state.quearr.push({ answer: val, questionid: questionid });
  };

  handleReportClick(event) {
    this.setState({
      redirectToNewPage: true,
      isReport: true
    });
    event.preventDefault();
  }

  onCheckBoxUpdate = (val, questionid, isChecked) => {
    var arr = [];
    arr.push(val);
    var isDone = false;
    var isQuestionFound = false;
    var tempArr = [];
    this.state.quearr.map(statevalue => {
      if (statevalue.questionid === questionid) {
        statevalue.answer.map((ans, idx) => {
          if (ans === val && !isChecked) {
            statevalue.answer.splice(idx, 1);
            isDone = true;
          }
        });
        tempArr.splice(val);
        isQuestionFound = true;
      }

      if (!isDone && isQuestionFound) {
        tempArr.push(val);
      }
    });

    if (!isDone && !isQuestionFound) {
      
      this.state.quearr.push({ answer: arr, questionid: questionid });
    } else if (tempArr.length > 0) {
      this.state.quearr.map(statevalue => {
        if (statevalue.questionid === questionid) {
          statevalue.answer.push(val);
        }
      });
    }
  };

  render() {
    if (this.state.redirectToNewPage === true) {
      return (
        <div>
          <Report/>
        </div>
      );
    }
    else if(this.state.isSubmit)
      return (
        <form onSubmit={this.handleSubmit}>
      <PostQuestions quearr={this.state.quearr}/>
      <div className="col-md-4">
      <Button
        color="advanced"
        type="button"
        onClick={this.handleReportClick}
      >
        Report
      </Button>
    </div>
    </form>
      )
    return (
      <form onSubmit={this.handleSubmit}>
        <APIService onCheckBoxUpdate={this.onCheckBoxUpdate} onRadioUpdate={this.onRadioUpdate} data={this.data} />
        <div className="col-md-4">
          <Button color="advanced" type="submit" onClick={this.handleSubmit}>
            Submit Answers
          </Button>
        </div>
      </form>
    );
  }
}
export default DisplayQuestions;
