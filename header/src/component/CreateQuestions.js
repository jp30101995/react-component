import React, { Component } from 'react';
import DisplayQuestions from './DisplayQuestions'
import { Button,ButtonGroup } from 'reactstrap';

class CreateQuestions extends Component {
    constructor(props) {
        
            super(props);
            this.state = {learnerID: '',testid: '',subject:'Web Development',difficulty:'Easy',noOfQuestions:'',redirectToNewPage:false,backgroundColor:'#007bff'};
        
            this.handleLearnerIDChange = this.handleLearnerIDChange.bind(this);
            this.handleTestIDChange = this.handleTestIDChange.bind(this);
            this.handleSubjectChange = this.handleSubjectChange.bind(this);
            this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
            this.handleNoOfQuestionsChange = this.handleNoOfQuestionsChange.bind(this);
            
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleLearnerIDChange(event) {
        
        this.setState({learnerID: event.target.value});
    }
    handleTestIDChange(event) {
        
        this.setState({testid: event.target.value});
    }
    handleSubjectChange(event) {
        
        this.setState({subject: event.target.value});
    }
    handleDifficultyChange(event) {
        
        this.setState({difficulty: event.target.textContent});
    }
    handleNoOfQuestionsChange(event) {
        
        this.setState({noOfQuestions: event.target.value});
    }

    handleSubmit(event) {
       this.setState({redirectToNewPage: true});
       event.preventDefault();
    }

  render() {
    if (this.state.redirectToNewPage === true) {
         //return <DisplayQuestions data='{"active":{"question":"Active","options":"8","QuestionType":"radionbtn"},"waiting":{"question":"Waiting","options":"1"},"manual":{"question":"Manual","options":"3","QuestionType":"chkbox"}}'/>
         return <DisplayQuestions data='{"active":{"question":"Active","questionid":"1","options":[{"V": "12"},{"V": "13"},{"V": "14"}],"QuestionType":"chkbox"},"active1":{"question":"Active","questionid":"2","options":[{"V": "12"},{"V": "13"},{"V": "14"}],"QuestionType":"radio"},"active2":{"question":"Active","questionid":"2","options":[],"QuestionType":"text"}}'/>
    }

    var subjects = [
        { name: 'Web Development', id: 1 },
        { name: 'Design', id: 2 },
        { name: 'Integration', id: 3 },
        { name: 'Training', id: 4 }
    ];

    let subjectsItems = subjects.map((subject) =>
        <option key={subject.name}>{subject.name}</option>
    );
    return (
    <div className="App">   
    <form onSubmit={this.handleSubmit}>
    <div className="form-horizontal">
    <div className="form-group">
    <div className="row">
      <div className="col-md-2">
        <label htmlFor="test" className="col-xs-offset-1">Learner ID:</label>
      </div>
      <div className="col-md-4">
        <input type='text' className="form-control" value={this.state.learnerID} onChange={this.handleLearnerIDChange} placeholder="Learner ID"  />
      </div>
    </div>
    </div>

    <div className="form-group">
    <div className="row">
      <div className="col-md-2">
        <label htmlFor="test" className="col-xs-offset-1">Test ID:</label>
      </div>
      <div className="col-md-4">
        <input type='text' className="form-control" value={this.state.testid} onChange={this.handleLearnerIDChange} placeholder="Test ID"  />
      </div>
    </div>
    </div>

    <div className="form-group row">
    <div className="row">
    <div className="col-md-2">
        <label htmlFor="test" className="col-xs-offset-1">Subject:</label>
      </div>
      <div className="col-md-4">
      <select className="form-control" id="sel1" onChange={this.handleSubjectChange}>
            {subjectsItems}
      </select>
        </div>
      </div>
    </div>

    <div className="form-group">
    <div className="row">
      <div className="col-md-2">
        <label htmlFor="test" className="col-xs-offset-1">Difficulty:</label>
      </div>
      <div className="col-md-4">
        <ButtonGroup>
            <Button color="primary" onClick={this.handleDifficultyChange} active={this.state.difficulty === 'Easy'} style={[this.state.difficulty === 'Easy' ? '' : '']} >Easy</Button>
            <Button color="primary" onClick={this.handleDifficultyChange} active={this.state.difficulty === 'Medium'}>Medium</Button>
            <Button color="primary" onClick={this.handleDifficultyChange} active={this.state.difficulty === 'Hard'}>Hard</Button>
        </ButtonGroup>
      </div>
    </div>
    </div>

    <div className="row">
    <div className="form-group">
      <div className="col-md-2">
        <label htmlFor="test" className="col-xs-offset-1">Number of Questions:</label>
      </div>
      <div className="col-md-4">
        <input type='text' className="form-control" value={this.state.noOfQuestions} onChange={this.handleNoOfQuestionsChange} placeholder="Number of Questions" />
      </div>
    </div>
    </div>

    <div className="row">
    <div className="form-group">
    <div className="col-md-2"></div>
    <div className="col-md-4">
        <Button color="success" type="submit">Register</Button>
    </div>
          
    </div>
    </div>
  </div>
  </form>
  </div>
    );
  }
}
export default CreateQuestions;