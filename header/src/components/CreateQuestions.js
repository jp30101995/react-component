import React, { Component } from 'react';
import DisplayQuestions from './DisplayQuestions'
import { Redirect } from 'react-router-dom';

class CreateQuestions extends Component {
    constructor(props) {
        
            super(props);
            this.state = {learnerID: '',subject:'Web Development',difficulty:'easy',noOfQuestions:'',redirectToNewPage:false};
        
            this.handleLearnerIDChange = this.handleLearnerIDChange.bind(this);
            this.handleSubjectChange = this.handleSubjectChange.bind(this);
            this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
            this.handleNoOfQuestionsChange = this.handleNoOfQuestionsChange.bind(this);
            
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleLearnerIDChange(event) {
        
        this.setState({learnerID: event.target.value});
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
        //alert(this.state.learnerID + ' and ' + this.state.subject + ' and ' + this.state.difficulty + ' and ' + this.state.noOfQuestions);
       this.setState({redirectToNewPage: true});
       event.preventDefault();
    }

  render() {
    if (this.state.redirectToNewPage === true) {
         return <DisplayQuestions data={this.state.learnerID}/>
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
        <input type='text' className="form-control" value={this.state.learnerID} onChange={this.handleLearnerIDChange}  />
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
        <div className="btn-group" data-toggle="buttons">
          <label className="btn btn-primary active" onClick={this.handleDifficultyChange}>
              <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked  /> Easy
          </label>
          <label className="btn btn-primary" onClick={this.handleDifficultyChange}>
              <input type="radio" name="options" id="option2" autoComplete="off" />Medium
          </label>
          <label className="btn btn-primary" onClick={this.handleDifficultyChange}>
              <input type="radio" name="options" id="option3" autoComplete="off" /> Hard
          </label>
        </div>
      </div>
    </div>
    </div>

    <div className="form-group">
    <div className="row">
      <div className="col-md-2">
        <label htmlFor="test" className="col-xs-offset-1">Number of Questions:</label>
      </div>
      <div className="col-md-4">
        <input type='text' className="form-control" value={this.state.noOfQuestions} onChange={this.handleNoOfQuestionsChange}  />
      </div>
    </div>
    </div>

    <div className="form-group">
      <div className="btn-adn">
        <button data-ng-disabled="registrationInProcess" type="submit" className="btn btn-primary btn-sm loading-demo mr5" style={{marginLeft:'200px', fontSize:'14px'}}>
        <span className="glyphicon glyphicon-ok"></span> Register</button>
      </div>
      </div>
  </div>
  </form>
  </div>
    );
  }
}


// componentDidMount() {
//     let initialPlanets = [];
//     fetch('https://swapi.co/api/planets/')
//         .then(response => {
//             return response.json();
//         }).then(data => {
//         initialPlanets = data.results.map((planet) => {
//             return planet
//         });
//         console.log(initialPlanets);
//         this.setState({
//             planets: initialPlanets,
//         });
//     });
// }
export default CreateQuestions;