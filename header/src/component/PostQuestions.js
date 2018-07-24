import React, { Component } from "react";

class PostQuestions extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.quearr = props.quearr;
  }

  componentWillMount() {
    var url =
      "https://21wgg447m7.execute-api.ap-southeast-1.amazonaws.com/dev/result/123123/easy";

    var jsonData = [];
    this.quearr.map(statevalue => {
      jsonData.push({
        question: statevalue.questionid,
        answer: statevalue.answer
      });
    });
    debugger;
    fetch(url,{
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      }).then(res => res.json())
      .then(
        result => {
          debugger;
        },
        error => {
          debugger;
        }
      );
  }

  render() {
    return <div>Error: Done</div>;
  }
}
export default PostQuestions;
