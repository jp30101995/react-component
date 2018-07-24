import React, { Component } from "react";
import CheckboxQuestionList from "./CheckboxQuestionList";
import RadioButtonQuestionList from "./RadionButtonQuestionList";
import TextAreaQuestionList from "./TextAreaQuestionList";
import DisplayQuestions from "./DisplayQuestions";

class APIService extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    
  }

  onRadioUpdate = (val, questionid) => {
    this.props.onRadioUpdate (val,questionid);
  };
  onCheckBoxUpdate = (val, questionid, isChecked) => {
    this.props.onCheckBoxUpdate(val, questionid, isChecked);
  };

  componentWillMount() {
    var url = "https://21wgg447m7.execute-api.ap-southeast-1.amazonaws.com/dev/" + "questions/20/Maths/easy/123123";
    debugger;
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
    debugger;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var arr = this.state.items;
      debugger;
     return arr.map((innerArray, i) => {
      if (innerArray.questiontype == "chkbox") {
        return (
          <div className="row">
            <div
              className="col-md-10"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "lightgray"
              }}
            >
              {innerArray.question}
            </div>
            <div className="col-md-2">
              <i className="fa fa-camera-retro" />
            </div>
            <div className="col-md-12">
              <CheckboxQuestionList
                label={innerArray.question}
                value={innerArray.options}
                questionid={innerArray._id}
                onCheckBoxUpdate={this.onCheckBoxUpdate}
              />
            </div>
          </div>
        );
      } else if (innerArray.questiontype == "radio") {
        {
          return (
            <div className="row">
              <div
                className="col-md-10"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: "lightgray"
                }}
              >
                {innerArray.question}
              </div>
              <div className="col-md-2">2</div>
              <div className="col-md-12">
                <RadioButtonQuestionList
                  label={innerArray.question}
                  value={innerArray.options}
                  questionid={innerArray._id}
                  onRadioUpdate={this.onRadioUpdate}
                />
              </div>
            </div>
          );
        }
      } else {
        return (
          <div>
            <div
              className="col-md-12"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "lightgray"
              }}
            >
              {innerArray.question}
            </div>
            <TextAreaQuestionList
              label={innerArray.question}
              value={innerArray.options}
              questionid={innerArray._id}
            />
          </div>
        );
      }
    });
    }
  }
}
export default APIService;