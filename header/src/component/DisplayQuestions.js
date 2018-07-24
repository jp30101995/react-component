import React, { Component } from "react";
import CheckboxQuestionList from "./CheckboxQuestionList";
import RadioButtonQuestionList from "./RadionButtonQuestionList";
import TextAreaQuestionList from "./TextAreaQuestionList";
import { Button } from "reactstrap";
import  APIService  from "./APIService";
import { Icon } from "react-fa";
import PostQuestions from "./PostQuestions";
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
   
    this.onRadioUpdate = this.onRadioUpdate.bind(this);
    this.onCheckBoxUpdate = this.onCheckBoxUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  handleSubmit(event) {
    debugger;
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

  componentWillMount() {
   
    this.apiURL =
      "https://21wgg447m7.execute-api.ap-southeast-1.amazonaws.com/dev/";
    var url = this.apiURL + "questions/20/Maths/easy/123123";
   
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          
          this.setState({
            isLoaded: true,
            items: result
          });
         
        },
       
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    if(this.state.isSubmit)
      return <PostQuestions quearr={this.state.quearr}/>


    return (
      <form onSubmit={this.handleSubmit}>
        <APIService onCheckBoxUpdate={this.onCheckBoxUpdate} onRadioUpdate={this.onRadioUpdate} />
        <div className="col-md-4">
          <Button color="success" type="submit" onClick={this.handleSubmit}>
            Register
          </Button>
        </div>
      </form>
    );
  }
}
export default DisplayQuestions;
